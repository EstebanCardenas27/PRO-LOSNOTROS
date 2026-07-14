import Link from "next/link";
import { ChevronDown } from "@/components/Icons/ChevronDown";

import {
  hero,
  description,
  heroButtons,
} from "@/constants/general";
import { ChevronRightIcon } from "../Icons/ChevrontRight";

export const Hero = () => (
    <section className="relative overflow-hidden min-h-[70vh] ">        
        <div className="container-custom relative z-10 pt-4 lg:pt-0">
            <div className="grid items-center lg:grid-cols-12">
                <div className="lg:col-span-7">
                    <div className="max-w-2xl">
                        <span className="badge mb-6">
                            Bienestar • Salud • Comunidad
                        </span>

                        <h1 className="text-3xl! md:text-[3rem]! mb-6">
                            {hero.split("|")[0]}<br/>
                            {hero.split("|")[1]}
                        </h1>

                        <p className="mb-8 text-lg">
                            {description}
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            {heroButtons.map((button) => (
                                <Link
                                key={button.text}
                                href={button.href}
                                className={
                                    button.variant === "primary"
                                        ? "group inline-flex items-center justify-center gap-2 btn-primary rounded-full! px-8 py-4 font-semibold"
                                        : "group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold border-2 border-(--primary) text-(--primary) hover:bg-(--primary) hover:text-white transition-all duration-300"
                                }
                                >
                                <span>{button.text}</span>

                                <ChevronRightIcon
                                    className={
                                    button.variant === "primary"
                                        ? "w-4 h-4 sm:w-5 sm:h-5 text-white transition-all duration-300 group-hover:translate-x-1"
                                        : "w-4 h-4 sm:w-5 sm:h-5 text-current transition-all duration-300 group-hover:translate-x-1"
                                    }
                                />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="hidden lg:block lg:col-span-5">
                    <div className="relative">
                        <div className="overflow-hidden shadow-primary/40 shadow-2xl">
                            <img
                                src="/hero.webp"
                                alt="Centro de Bienestar Los Notros"
                                className="h-137 w-full object-fill"
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
                    <div className="flex flex-col items-center text-black">
                        <span className=" text-xs uppercase tracking-[0.2em]"> Explorar </span>
                        <ChevronDown className="h-8 w-8 animate-bounce" />
                    </div>
                </div> 

            </div>
        </div>
    </section>
);