import type { ReactNode } from "react";

export function renderInline(text: string) {
  const nodes: ReactNode[] = [];
  let rest = text;
  let key = 0;

  const pushText = (value: string) => {
    if (!value) return;
    nodes.push(value);
  };

  const takeNextToken = () => {
    const patterns: Array<{ type: "code" | "link" | "bold" | "italic"; regex: RegExp }> = [
      { type: "code", regex: /`([^`]+)`/ },
      { type: "link", regex: /\[([^\]]+)\]\(([^)]+)\)/ },
      { type: "bold", regex: /\*\*([^*]+)\*\*/ },
      { type: "italic", regex: /(^|[^*])\*([^*]+)\*(?!\*)/ }
    ];

    let best: { type: (typeof patterns)[number]["type"]; match: RegExpMatchArray } | null = null;
    for (const { type, regex } of patterns) {
      const match = rest.match(regex);
      if (!match) continue;
      if (!best || match.index! < best.match.index!) best = { type, match };
    }
    return best;
  };

  while (rest.length) {
    const token = takeNextToken();
    if (!token) {
      pushText(rest);
      break;
    }

    const index = token.match.index ?? 0;
    if (index > 0) {
      pushText(rest.slice(0, index));
      rest = rest.slice(index);
    }

    if (token.type === "code") {
      nodes.push(<code key={`code-${key++}`}>{token.match[1]}</code>);
      rest = rest.slice(token.match[0].length);
      continue;
    }

    if (token.type === "link") {
      const label = token.match[1];
      const href = token.match[2];
      nodes.push(
        <a key={`a-${key++}`} href={href} target="_blank" rel="noreferrer">
          {renderInline(label)}
        </a>
      );
      rest = rest.slice(token.match[0].length);
      continue;
    }

    if (token.type === "bold") {
      nodes.push(<strong key={`b-${key++}`}>{renderInline(token.match[1])}</strong>);
      rest = rest.slice(token.match[0].length);
      continue;
    }

    if (token.type === "italic") {
      pushText(token.match[1]);
      nodes.push(<em key={`i-${key++}`}>{renderInline(token.match[2])}</em>);
      rest = rest.slice(token.match[0].length);
    }
  }

  return nodes;
}

function parseTableRow(line: string) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function isTableSeparator(line: string) {
  const trimmed = line.trim();
  if (!trimmed.startsWith("|")) return false;
  return /^(\|\s*:?-{3,}:?\s*)+\|\s*$/.test(trimmed);
}

export function renderMarkdown(markdown: string): ReactNode[] {
  const lines = markdown
    .replace(/^---[\s\S]*?---\n/, "")
    .split("\n");

  const nodes: ReactNode[] = [];
  let paragraph: string[] = [];
  let listItems: string[] = [];
  let orderedItems: string[] = [];
  let codeFence: string[] = [];
  let inCodeFence = false;

  const flushParagraph = () => {
    if (!paragraph.length) return;
    nodes.push(<p key={`p-${nodes.length}`}>{renderInline(paragraph.join(" "))}</p>);
    paragraph = [];
  };

  const flushList = () => {
    if (!listItems.length) return;
    nodes.push(
      <ul key={`ul-${nodes.length}`}>
        {listItems.map((item, index) => (
          <li key={`${item}-${index}`}>{renderInline(item)}</li>
        ))}
      </ul>
    );
    listItems = [];
  };

  const flushOrderedList = () => {
    if (!orderedItems.length) return;
    nodes.push(
      <ol key={`ol-${nodes.length}`}>
        {orderedItems.map((item, index) => (
          <li key={`${item}-${index}`}>{renderInline(item)}</li>
        ))}
      </ol>
    );
    orderedItems = [];
  };

  const flushCodeFence = () => {
    if (!codeFence.length) return;
    nodes.push(
      <pre key={`pre-${nodes.length}`}>
        <code>{codeFence.join("\n")}</code>
      </pre>
    );
    codeFence = [];
  };

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (line.startsWith("```")) {
      if (inCodeFence) {
        flushCodeFence();
      }
      inCodeFence = !inCodeFence;
      flushParagraph();
      flushList();
      flushOrderedList();
      continue;
    }

    if (inCodeFence) {
      codeFence.push(line);
      continue;
    }

    if (!line.trim()) {
      flushParagraph();
      flushList();
      flushOrderedList();
      continue;
    }

    const heading = line.match(/^(#{1,3})\s+(.*)$/);
    if (heading) {
      flushParagraph();
      flushList();
      flushOrderedList();
      const level = heading[1].length;
      const content = renderInline(heading[2]);
      if (level === 1) nodes.push(<h1 key={`h1-${nodes.length}`}>{content}</h1>);
      else if (level === 2) nodes.push(<h2 key={`h2-${nodes.length}`}>{content}</h2>);
      else nodes.push(<h3 key={`h3-${nodes.length}`}>{content}</h3>);
      continue;
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      flushOrderedList();
      listItems.push(line.slice(2));
      continue;
    }

    const orderedMatch = line.match(/^\d+\.\s+(.*)$/);
    if (orderedMatch) {
      flushParagraph();
      flushList();
      orderedItems.push(orderedMatch[1]);
      continue;
    }

    if (line.startsWith("> ")) {
      flushParagraph();
      flushList();
      flushOrderedList();
      nodes.push(<blockquote key={`quote-${nodes.length}`}>{renderInline(line.slice(2))}</blockquote>);
      continue;
    }

    if (line.trim().startsWith("|")) {
      const next = lines[index + 1];
      if (next && isTableSeparator(next)) {
        flushParagraph();
        flushList();
        flushOrderedList();

        const header = parseTableRow(line);
        index += 2;
        const rows: string[][] = [];
        while (index < lines.length && lines[index].trim().startsWith("|")) {
          const rowLine = lines[index];
          if (isTableSeparator(rowLine)) {
            index += 1;
            continue;
          }
          rows.push(parseTableRow(rowLine));
          index += 1;
        }
        index -= 1;

        nodes.push(
          <table key={`table-${nodes.length}`}>
            <thead>
              <tr>
                {header.map((cell, cellIndex) => (
                  <th key={`th-${cellIndex}`}>{renderInline(cell)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={`tr-${rowIndex}`}>
                  {row.map((cell, cellIndex) => (
                    <td key={`td-${rowIndex}-${cellIndex}`}>{renderInline(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        );
        continue;
      }
    }

    paragraph.push(line.trim());
  }

  flushParagraph();
  flushList();
  flushOrderedList();
  flushCodeFence();

  return nodes;
}
