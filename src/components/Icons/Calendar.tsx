import { SVGProps } from "react";

export const CalendarIcon = (
  props: SVGProps<SVGSVGElement>
) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M7 2v2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2zM5 9h14v10H5z"
    />
  </svg>
);