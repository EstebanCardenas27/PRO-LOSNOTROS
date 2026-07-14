import Image from "next/image";
import Link from "next/link";
import { locateMedia } from "@/constants/general";

import { COMPANY } from "@/constants/company";
import { LocationIcon } from "../Icons/LocationIcon";

export const Locate = () => {
  return (
    <section className="px-6 md:px-20 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 flex gap-4 justify-center lg:justify-start">
                {locateMedia.map((item, i) => (
                    <div
                    key={i}
                    className={`relative w-40 md:w-52 lg:w-56 h-64 md:h-80 rounded-[40px] overflow-hidden shadow-lg ${
                        item.offset ? "-mt-8" : ""
                    }`}
                    >
                        {item.type === "image" ? (
                            <Image
                            src={item.src}
                            alt={item.alt}
                            width={400}
                            height={600}
                            className="w-full h-full object-cover"
                            />
                        ) : (
                            <video
                            src={item.src}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                            />
                        )}

                        <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                            {item.badge}
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left">

                <span className="badge mb-6">
                   UN ESPACIO PARA VOLVER A TI • SAN JOSÉ DE LA MARIQUINA
                </span>

                <h2 className="text-display-lg text-(--primary)">
                    {COMPANY.shortName}
                </h2>

                <p className="text-(--muted) leading-relaxed">
                    Te esperamos en un ambiente cálido y acogedor, pensado para desconectarte, recuperar energías y dedicar un momento a tu bienestar.
                </p>

                <Link
                    href="https://www.google.com/maps?q=-39.539192983093464,-72.9594632596832"
                    target="_blank"
                    className="group inline-flex items-center gap-2 btn-primary rounded-full px-6 py-3"
                    >
                    <span>Cómo llegar</span>

                    <LocationIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    </section>
  );
};

