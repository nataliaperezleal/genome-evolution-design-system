import type { ReactNode } from "react";

function renderInline(text: string) {
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={index}>{part.slice(1, -1)}</code>;
    }
    return part;
  });
}

export function renderMarkdown(markdown: string): ReactNode[] {
  const lines = markdown
    .replace(/^---[\s\S]*?---\n/, "")
    .split("\n");

  const nodes: ReactNode[] = [];
  let paragraph: string[] = [];
  let listItems: string[] = [];
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

  const flushCodeFence = () => {
    if (!codeFence.length) return;
    nodes.push(
      <pre key={`pre-${nodes.length}`}>
        <code>{codeFence.join("\n")}</code>
      </pre>
    );
    codeFence = [];
  };

  for (const line of lines) {
    if (line.startsWith("```")) {
      if (inCodeFence) {
        flushCodeFence();
      }
      inCodeFence = !inCodeFence;
      flushParagraph();
      flushList();
      continue;
    }

    if (inCodeFence) {
      codeFence.push(line);
      continue;
    }

    if (!line.trim()) {
      flushParagraph();
      flushList();
      continue;
    }

    const heading = line.match(/^(#{1,3})\s+(.*)$/);
    if (heading) {
      flushParagraph();
      flushList();
      const level = heading[1].length;
      const content = renderInline(heading[2]);
      if (level === 1) nodes.push(<h1 key={`h1-${nodes.length}`}>{content}</h1>);
      else if (level === 2) nodes.push(<h2 key={`h2-${nodes.length}`}>{content}</h2>);
      else nodes.push(<h3 key={`h3-${nodes.length}`}>{content}</h3>);
      continue;
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      listItems.push(line.slice(2));
      continue;
    }

    if (line.startsWith("> ")) {
      flushParagraph();
      flushList();
      nodes.push(<blockquote key={`quote-${nodes.length}`}>{renderInline(line.slice(2))}</blockquote>);
      continue;
    }

    if (line.startsWith("|")) {
      continue;
    }

    paragraph.push(line.trim());
  }

  flushParagraph();
  flushList();
  flushCodeFence();

  return nodes;
}
