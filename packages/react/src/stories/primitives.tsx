import type { SVGProps } from "react";

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" height="16" viewBox="0 0 16 16" width="16" {...props}>
      <path
        d="M3.333 8h9.334m0 0L8.667 4m4 4-4 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" height="16" viewBox="0 0 16 16" width="16" {...props}>
      <path
        d="M7.333 12a4.667 4.667 0 1 0 0-9.334 4.667 4.667 0 0 0 0 9.334Zm5.334 1.333-2.54-2.54"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}
