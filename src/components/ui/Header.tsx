"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { COMPANY } from "@/constants/company";
import { NAVIGATION } from "@/constants/navigation";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open
        ? "hidden"
        : "";

    return () => {
        document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
        setOpen(false);
    }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-outline-variant/40 bg-background md:bg-background/50 backdrop-blur-md">
        <div className=" relative container-custom">

            <div className="flex h-20 md:h-24 items-center justify-between">

                <Link href="/" className="flex items-center gap-3 md:gap-4">
                    <Image
                        src={COMPANY.logo}
                        alt={COMPANY.name}
                        width={80}
                        height={80}
                        quality={100}
                        priority
                    />

                    <div className="leading-tight">
                        <span className="block font-heading text-lg md:text-2xl font-semibold text-primary">
                            {COMPANY.shortName}
                        </span>

                        <span className="text-sm md:text-md text-secondary">
                            Centro de Bienestar
                        </span>
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {NAVIGATION.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        scroll
                        className={`relative text-lg transition-colors duration-300 hover:text-primary ${
                        isActive(item.href)
                            ? "text-primary font-semibold after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-primary"
                            : "after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                        }`}
                    >
                        {item.label}
                    </Link>
                    ))}
                </nav>

                <Link
                    href="/contact"
                    className="hidden md:inline-flex btn-primary px-6 py-3 text-lg font-semibold"
                >
                    Reservar Hora
                </Link>

                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1"
                >
                    <span
                    className={`h-0.5 w-6 bg-primary transition ${
                        open ? "rotate-45 translate-y-1.5" : ""
                    }`}
                    />
                    <span
                    className={`h-0.5 w-6 bg-primary transition ${
                        open ? "opacity-0" : ""
                    }`}
                    />
                    <span
                    className={`h-0.5 w-6 bg-primary transition ${
                        open ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                    />
                </button>
            </div>
            
            <div className={`md:hidden absolute top-full left-0 right-0 z-50 bg-background border-b border-outline-variant/40 shadow-lg transition-all duration-300
            ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none" } `} >
                <nav className="flex flex-col gap-2 items-center text-center">
                    {NAVIGATION.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        scroll
                        onClick={() => setOpen(false)}
                        className={`py-2 w-full text-sm border-b border-outline-variant/20 transition-colors text-center ${
                            isActive(item.href)
                                ? "text-primary font-semibold"
                                : "hover:text-primary"
                        }`}
                    >
                        {item.label}
                    </Link>
                    ))}

                    <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="flex w-40 h-12 btn-primary text-center justify-center items-center mb-6"
                    >
                    Reservar Hora
                    </Link>
                </nav>                
            </div>                    
        </div>                
    </header>
    {open && (
        <div
            onClick={() => setOpen(false)}
            className="
                fixed
                inset-0
                top-20
                z-40
                bg-transparent
                md:hidden
            "
        />
    )}   
    </>
  );
}