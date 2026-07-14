import { SVGProps } from "react";

export const ConversationIcon = (
  props: SVGProps<SVGSVGElement>
) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M4 4h16v11H7l-3 3z"
    />
  </svg>
);