import { SVGProps } from "react";

export const InstagramIcon = (
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
      d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm1.5 1.5a1 1 0 1 0 1 1a1 1 0 0 0-1-1M12 7a5 5 0 1 0 5 5a5 5 0 0 0-5-5m0 2a3 3 0 1 1-3 3a3 3 0 0 1 3-3"
    />
  </svg>
);