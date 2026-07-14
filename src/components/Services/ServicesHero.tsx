import Link from "next/link";
import { ChevronRightIcon } from "@/components/Icons/ChevrontRight";

export const ServcicesHero = () => {
  return (
    <section className="relative section-spacing overflow-hidden">
        <div className="container-custom grid md:grid-cols-2 items-center relative z-10">            
            <div className="space-y-6 text-left">

                <div className="inline-flex items-center gap-2 bg-(--secondary-soft)/40 px-4 py-1.5 rounded-full border border-(--secondary)/20 w-fit">
                    <span className="text-sm font-semibold text-(--secondary) tracking-wide">
                        BIENESTAR INTEGRAL Y ACOMPAÑAMIENTO REMOTO
                    </span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-display-lg text-(--primary) leading-tight">
                    Un espacio para <br />
                    <span className="italic font-normal text-(--tertiary)">
                    restaurar tu equilibrio
                    </span>
                </h1>
            
                <div className="space-y-4 max-w-xl">
                    <p className="text-base sm:text-lg text-(--muted)">
                    En Los Notros encontrarás un espacio dedicado al bienestar físico y emocional,
                    con terapias de relajación, descontracturantes y técnicas de recuperación integral.
                    </p>

                    <p className="text-base sm:text-lg text-(--muted)">
                    Además, contamos con un servicio de apoyo remoto con profesionales de la salud,
                    en un entorno privado y asistido.
                    </p>
                </div>
                
                <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
                    <Link
                        href="/contact"
                        className="btn-primary px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center gap-2 active:scale-95 transition-all cursor-pointer group w-fit">
                            Reservar Sesión
                        <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
            
            <div className="relative mt-6 md:mt-0 flex md:block justify-center">

                <div className="w-[85%] sm:w-[75%] md:w-full aspect-square rounded-[28px] sm:rounded-[36px] md:rounded-[40px] overflow-hidden shadow-2xl relative">

                    <img
                    className="w-full h-full object-cover"
                    src="/ico/logo_sfondo.png"
                    alt="Centro de bienestar"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-(--primary)/25 to-transparent" />

                </div> 

                <div className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:-left-6 card-organic p-4 sm:p-6 rounded-2xl shadow-2xl! max-w-50 sm:max-w-60">
                    <div className="flex items-center gap-3">
                        <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-(--secondary) flex items-center justify-center shrink-0">
                            <span className=" text-xs sm:text-sm text-white">✓</span>
                        </div>

                        <span className="text-xs sm:text-sm leading-snug">
                            Atención Integral
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};