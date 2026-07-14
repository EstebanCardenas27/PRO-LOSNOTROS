import { SVGProps } from "react";

export const MailIcon = (
  props: SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M0 0h24v24H0z" fill="none" />

    <path
      fill="currentColor"
      d="M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 2h16l-8 5L4 7zm0 10V9l7.42 4.64a1 1 0 0 0 1.16 0L20 9v8z"
    />
  </svg>
);