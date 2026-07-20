"use client";

import { useEffect, useState } from "react";
import { ChevronRightIcon } from "@/components/Icons/ChevrontRight";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  if (!visible) return null;


  return (
    <button
      type="button"
      aria-label="Volver arriba"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="
        fixed
        bottom-6
        right-6
        z-30
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        bg-(--primary)
        text-white
        shadow-lg
        transition
        duration-300
        hover:bg-(--primary-hover)
        hover:-translate-y-1
        cursor-pointer
      "
    >
      <ChevronRightIcon
        className="
          h-5
          w-5
          rotate-270
        "
      />
    </button>
  );
};