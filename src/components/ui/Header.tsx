"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { COMPANY } from "@/constants/company";
import { NAVIGATION } from "@/constants/navigation";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant/40 bg-background/50 backdrop-blur-md">
        <div className="container-custom">

            <div className="flex h-20 md:h-24 items-center justify-between">

                <Link href="/" className="flex items-center gap-3 md:gap-4">
                    <Image
                    src={COMPANY.logo}
                    alt={COMPANY.name}
                    width={48}
                    height={48}
                    className="md:w-16 md:h-16 scale-125"
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

            <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
                open ? "max-h-96 py-4" : "max-h-0"
            }`}
            >
                <nav className="flex flex-col gap-2 items-center text-center">
                    {NAVIGATION.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`py-3 w-full text-sm border-b border-outline-variant/20 transition-colors text-center ${
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
                    className="w-40 btn-primary text-center"
                    >
                    Reservar Hora
                    </Link>
                </nav>
            </div>
        </div>
    </header>
  );
}