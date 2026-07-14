import Link from "next/link";
import { ChevronDown } from "@/components/Icons/ChevronDown";

import {
  hero,
  description,
  heroButtons,
} from "@/constants/general";

export const Hero = () => (
    <section className="relative overflow-hidden min-h-[90vh] ">
        
        <div className="container-custom relative z-10 py-4 lg:py-0">
            <div className="grid items-center gap-16 lg:grid-cols-12 min-h-[80vh]">
                <div className="lg:col-span-7">
                    <div className="max-w-2xl">
                        <span className="badge mb-6">
                            Bienestar • Salud • Comunidad
                        </span>

                        <h1 className="mb-6">
                            {hero}
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
                                    ? "btn-primary px-8 py-4 font-semibold cursor-pointer rounded-full!"
                                    : "rounded-full border-2 border-black/10 px-8 py-4 font-semibold transition hover:bg-white cursor-pointer"
                                }
                                >
                                    {button.text}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-5">
                    <div className="relative">
                        <div className="overflow-hidden shadow-primary/40 shadow-2xl">
                            <img
                                src="/hero.webp"
                                alt="Centro de Bienestar Los Notros"
                                className="hidden lg:block  h-137 w-full object-fill"
                            />
                        </div>

                        <div className="absolute -bottom-12 -left-36 hidden max-w-60 bg-white rounded-2xl p-6 shadow-xl lg:block">
                            <p className="font-heading text-xl text-primary/50 font-bold">
                                "Tu salud en manos expertas"
                            </p>                            
                        </div>

                    </div>
                </div>

            </div>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-center text-white/80 lg:bottom-8">
            <div className="flex flex-col items-center text-black">
                <span className=" text-xs uppercase tracking-[0.2em]"> Explorar </span>
                <ChevronDown className="h-8 w-8 animate-bounce" />
            </div>
        </div>
    </section>
);