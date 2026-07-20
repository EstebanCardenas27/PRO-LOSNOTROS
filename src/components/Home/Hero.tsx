"use client"

import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "@/components/Icons/ChevronDown";

import {
  hero,
  description,
  heroButtons,
} from "@/constants/general";
import { ChevronRightIcon } from "@/components/Icons/ChevrontRight";

window.history.replaceState(null, "", window.location.pathname);
const [titleLine1, titleLine2] = hero.split("|");
const buttonBaseClass =
  "group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold transition-all duration-300";

export const Hero = () => ( 
    <section className="relative overflow-hidden min-h-[70vh] ">        
        <div className="container-custom relative z-10 pt-4 lg:pt-0">
            <div className="grid items-center lg:grid-cols-12">
                <div className="lg:col-span-7">
                    <div className="max-w-2xl">
                        <span className="badge mb-6">
                            Bienestar • Salud • Comunidad
                        </span>

                        <h1>
                            {titleLine1}
                            <br />
                            {titleLine2}
                        </h1>

                        <p className="mb-8 text-lg">
                            {description}
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row">

                            {heroButtons.map(({ text, href, variant }) => (

                                <Link
                                    key={text}
                                    href={href}
                                    className={`${buttonBaseClass}
                                        ${
                                        variant === "primary"
                                            ? "btn-primary"
                                            : "border-2 border-(--primary) text-(--primary) hover:bg-(--primary) hover:text-white"
                                        }`}
                                    >

                                    <span>{text}</span>

                                    <ChevronRightIcon
                                        className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5 ${
                                        variant === "primary"
                                            ? "text-white"
                                            : "text-current"
                                        }`}
                                    />

                                </Link>

                            ))}
                        </div>
                    </div>
                </div>

                <div className="hidden lg:block lg:col-span-5">
                    <div className="relative">
                        <div className="overflow-hidden shadow-primary/40 shadow-2xl">                           
                            <Image
                                src="/hero.webp"
                                alt="Centro de Bienestar Los Notros"
                                width={600}
                                height={700}
                                priority
                            />
                        </div>

                        <div className="card-organic absolute -bottom-12 -left-36 hidden max-w-60 bg-transparent! backdrop-blur-xs border  p-6 shadow-xl lg:block">
                            <p className=" font-heading text-xl text-primary/50 font-bold">
                                " Bienestar con sentido "
                            </p>                            
                        </div>

                    </div>
                </div>

                <div className="lg:col-span-12 flex flex-col items-center text-center text-white/80 pt-12 lg:pt-30! ">
                    <button
                        onClick={() => {
                            document
                            .getElementById("servicios")
                            ?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            });
                        }}
                        className="group flex flex-col items-center text-black transition-opacity hover:opacity-70 cursor-pointer"
                        >
                        <span className="text-xs uppercase tracking-[0.2em]">
                            Explorar
                        </span>

                        <ChevronDown className="h-8 w-8 animate-bounce transition-transform group-hover:translate-y-1" />
                    </button>
                </div> 

            </div>
        </div>
    </section>
);