import Link from "next/link";
import { PhoneIcon } from "@/components/Icons/PhoneIcon";
import { LocationIcon } from "@/components/Icons/LocationIcon";

import { contactInfo } from "@/constants/general";

export const CTA = () => {
  return (
    <section className="px-6 md:px-20 py-16 max-w-7xl mx-auto">
        <div className="rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden bg-[url('/cta_mobile.png')] md:bg-[url('/cta.png')] backdrop-blur-3xl bg-cover bg-center">
            <div className="relative z-10 space-y-6">
                <h2 className="text-[36px] md:text-[48px] leading-tight">
                    {contactInfo.title}
                </h2>

                <p className="text-lg max-w-2xl mx-auto">
                    {contactInfo.description}
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-8 pt-8">

                    <div className="flex items-center justify-center gap-3">
                        <PhoneIcon className="w-8 h-8 lg:w-12 lg:h-12" />
                        <span className="font-bold">{contactInfo.phone}</span>
                    </div>

                    <div className="flex items-center justify-center gap-3">
                        <LocationIcon className="w-12 h-12" />
                        <span className="font-bold">{contactInfo.address}</span>
                    </div>

                </div>

                <Link 
                    href="/contact"
                    className="inline-block mt-8 bg-white border text-(--primary) px-10 py-4 rounded-full font-bold text-lg shadow-sm hover:scale-105 transition cursor-pointer">
                    {contactInfo.button}
                </Link>
            </div>
        </div>
    </section>
  );
};