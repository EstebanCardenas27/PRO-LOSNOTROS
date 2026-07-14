import Image from "next/image";
import Link from "next/link";

import { COMPANY } from "@/constants/company";
import { NAVIGATION } from "@/constants/navigation";
import { Divider } from "@/components/ui/Divider";
import { MailIcon } from "@/components/Icons/MailIcon";
import { InstagramIcon } from "@/components/Icons/InstagramIcon";
import { WhatsAppIcon } from "../Icons/WhatsAppIcon";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-outline-variant bg-surface-low">
        <div className="container-custom py-16">
            <div className="grid gap-12 md:grid-cols-3">            
                <div className="flex flex-col items-center text-center lg:items-start lg:text-start">
                    <Image
                        src={COMPANY.logo}
                        alt={COMPANY.name}
                        width={96}
                        height={96}
                        className="mb-4"
                    />
                    <h3 className="mb-3 font-heading text-2xl text-primary">
                        {COMPANY.shortName}
                    </h3>

                    <p className="max-w-sm text-muted">
                        {COMPANY.slogan}
                    </p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                    <h4 className="mb-6 font-heading text-lg relative font-semibold text- inline-block">
                        Navegación
                        <span className="absolute left-1/2 -bottom-2 h-0.5 w-10 -translate-x-1/2 bg-primary rounded-full" />
                    </h4>

                    <ul className="space-y-3">
                    {NAVIGATION.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className="transition-colors duration-300 hover:text-(--primary-soft)"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    </ul>
                </div>
                
                <div className="flex flex-col items-center text-center">
                    <h4 className="mb-6 font-heading text-lg relative font-semibold inline-block">
                       Contacto
                    <span className="absolute left-1/2 -bottom-2 h-0.5 w-10 -translate-x-1/2 bg-primary rounded-full" />
                    </h4>

                    <ul className="space-y-3">
                        <li>{COMPANY.contact.address}</li>

                        <li>{COMPANY.contact.city}</li>

                        <li>{COMPANY.contact.phone.label}</li>

                        <li>{COMPANY.contact.email.label}</li>
                    </ul>

                    <div className="mt-8 flex items-center gap-4">                        
                        <a
                            href={`mailto:${COMPANY.contact.email}`}
                            aria-label="Enviar correo"
                            className="w-11 h-11 rounded-full border border-(--outline-variant) flex items-center justify-center text-(--primary) transition-all duration-300 hover:bg-(--primary) hover:text-white"
                        >
                            <MailIcon className="w-5 h-5" />
                        </a>

                        <a
                            href={COMPANY.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="w-11 h-11 rounded-full border border-(--outline-variant) flex items-center justify-center text-(--primary) transition-all duration-300 hover:bg-(--primary) hover:text-white"
                        >
                            <InstagramIcon className="w-5 h-5" />
                        </a>

                        <a
                            href={COMPANY.contact.phone.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="w-11 h-11 rounded-full border border-(--outline-variant) flex items-center justify-center text-(--primary) transition-all duration-300 hover:bg-(--primary) hover:text-white"
                            >
                            <WhatsAppIcon className="w-5 h-5" />
                        </a>

                    </div>
                </div>
            </div>

            <Divider/>

            <div className="flex flex-col gap-4 text-sm text-muted items-center justify-center ">
                <p>Bienestar • Salud • Comunidad</p>
                <p> © {new Date().getFullYear()} {COMPANY.name} </p>
            </div>

        </div>
    </footer>
  );
}