import {
  wellnessCategory,
  wellnessServicesConst,
  complementaryTherapies,
  professionalCategory,
  professionalServices,
  futureServices,
  wellnessEducation,
} from "@/constants/services";
import { PlusSquareIcon } from "@/components/Icons/PlusSquareIcon";
import Link from "next/link";
import { ChevronRightIcon } from "../Icons/ChevrontRight";

export const WellnessServices = () => {
    const FeaturedIcon = wellnessServicesConst[0].icon;
    const WellnessCategoryIcon = wellnessCategory.icon;
    const ProfessionalCategoryIcon = professionalCategory.icon;
    const FutureServicesIcon = futureServices.icon;    

    return (
        <section className="container-custom space-y-24">
            <div className="space-y-10">

                <div className="flex items-center gap-4">
                    <h2 className="text-display-lg text-(--primary)">
                        {wellnessCategory.title}
                    </h2>

                    <div className="flex-1 h-px bg-(--outline-variant)/30 relative">
                        <span className="absolute right-0 -top-3 text-(--secondary)">
                            <WellnessCategoryIcon className="w-6 h-6" />
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="md:col-span-2 bg-(--surface-container) p-10 md:p-12 rounded-xl relative overflow-hidden group space-y-6">
                        <div className="absolute top-4 right-4 text-(--outline-variant) group-hover:text-(--primary)">
                            <FeaturedIcon className="w-10 h-10" />
                        </div>

                        <h3 className="text-2xl text-(--primary)">
                            {wellnessServicesConst[0]?.title}
                        </h3>

                        <p className="text-(--muted) max-w-xl leading-relaxed">
                            {wellnessServicesConst[0]?.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {wellnessServicesConst[0]?.tags?.map((tag) => (
                                <span
                                key={tag}
                                className="px-3 py-1 rounded-full border text-sm"
                                >
                                {tag}
                                </span>
                            ))}
                        </div>

                        <Link
                            href="/contact"
                            className="group inline-flex items-center justify-center gap-2 btn-primary px-6 py-3 rounded-full"
                            >
                            <span>Coordinar atención</span>

                            <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-all duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {wellnessServicesConst.slice(1).map((service) => {
                        const Icon = service.icon;

                        return (
                            <div key={service.title} className="bg-(--surface-container-highest) p-8 rounded-xl border space-y-5 h-full">
                                <div>
                                    <div className="w-14 h-14 rounded-full bg-(--secondary-soft) flex items-center justify-center">
                                        <Icon className="w-7 h-7 text-(--secondary)" />
                                    </div>
                                </div>

                                <h3 className="text-lg text-(--secondary)">
                                    {service.title}
                                </h3>

                                <p className="text-(--muted) leading-relaxed flex-1">
                                    {service.description}
                                </p>
                                {service.tags && (
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {service.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 rounded-full border text-xs "
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    <div className="md:col-span-2 bg-(--surface-container-high) p-8 rounded-xl flex flex-col md:flex-row gap-8 items-center">

                        <div className="w-full md:w-1/3 h-48 rounded-lg overflow-hidden bg-(--surface)">
                            <img
                                src="/therapies.jpg"
                                alt="Terapias complementarias"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="w-full md:w-2/3 space-y-5">
                            <h3 className="text-2xl text-(--primary)">
                                {complementaryTherapies.title}
                            </h3>

                            <p className="text-(--muted) leading-relaxed">
                                {complementaryTherapies.description}
                            </p>

                            <ul className="grid grid-cols-1 gap-3 text-sm text-(--muted) sm:grid-cols-2">
                                {complementaryTherapies.list.map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full border flex items-center justify-center shrink-0">
                                            <span className="text-(--secondary) text-xs font-bold">✓</span>
                                        </div>

                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-10">                

                <div className="flex items-center gap-4">
                    <h2 className="text-display-lg text-(--primary)">
                        {professionalCategory.title}
                    </h2>

                    <div className="flex-1 h-px bg-(--outline-variant)/30 relative">
                        <span className="absolute right-0 -top-3 text-(--secondary)">
                            <ProfessionalCategoryIcon className="w-6 h-6" />
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {professionalServices.slice(1).map((service) => {

                        const Icon = service.icon!;

                        return (
                            <div key={service.title} className="relative card-organic overflow-hidden bg-white p-8 rounded-xl border border-(--outline-variant)/90 space-y-5">

                                <div className="absolute -top-6 -right-6 opacity-20 pointer-events-none">
                                    <Icon className="w-36 h-36 text-(--primary)" />
                                </div>

                                <div className="relative z-10">

                                    <h3 className="text-lg text-(--primary) font-semibold text-center mt-5">
                                        {service.title}
                                    </h3>

                                    <p className="text-(--muted) leading-relaxed text-center">
                                        {service.description}
                                    </p>

                                    {service.tags && (
                                        <div className="flex flex-wrap gap-2 justify-center mt-5">
                                            {service.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 rounded-full border border-(--outline-variant) text-xs"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}

                </div>

                <div className="bg-(--surface-container-high) border border-(--outline-variant)/90 p-10 md:p-12 rounded-xl relative overflow-hidden space-y-6">

                    <div className="absolute -bottom-10 -right-10 opacity-[0.06] pointer-events-none">
                        <PlusSquareIcon className="w-56 h-56 text-(--primary)" />
                    </div>

                    <h3 className="text-2xl text-(--primary) relative z-10">
                        {professionalServices[0].title}
                    </h3>


                    <p className="text-(--muted) leading-relaxed max-w-2xl relative z-10">
                        {professionalServices[0].description}
                    </p>

                    <Link
                        href="/professionals"
                        className="group btn-secondary px-6 py-3 relative z-10 inline-flex items-center gap-2"
                        >
                        <span>Conocer Profesionales</span>

                        <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-current transition-all duration-300 group-hover:translate-x-1" />
                    </Link>

                </div>
                
            </div>
                

            <div className="bg-(--surface-container)/30 border border-dashed border-(--tertiary)/30 p-10 md:p-16 rounded-2xl space-y-10">
                    
                <div className="text-center space-y-6">

                    <div className="flex justify-center text-(--tertiary)">
                        <FutureServicesIcon className="w-14 h-14" />
                    </div>

                    <h2 className="text-display-lg">
                        {futureServices.title}
                    </h2>

                    <p className="text-(--muted) max-w-2xl mx-auto leading-relaxed">
                        {futureServices.description}
                    </p>

                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    
                    <div className="relative rounded-2xl overflow-hidden bg-(--surface) h-72 md:h-96">
                        <img
                            src="/sensor.webp"
                            alt="Tecnología de evaluación de bienestar"
                            className="w-auto h-auto object-cover"
                        />
                        
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                        
                        <div className="absolute bottom-4 left-4 bg-white/90 text-(--primary) px-3 py-1 rounded-full text-xs font-medium">
                            Evaluación complementaria
                        </div>

                    </div>

                    
                    <div className="space-y-6 text-left">

                        <h3 className="text-xl text-(--primary)">
                            Evaluación de Biofeedback Integral
                        </h3>

                        <p className="text-(--muted) leading-relaxed">
                            Tecnología de apoyo que genera un reporte orientativo del estado general del organismo. 
                            Utilizada como complemento en programas de bienestar integral.
                        </p>

                        <div className="flex flex-col gap-2 text-sm opacity-80">
                            {futureServices.items.map((item) => (
                                <div key={item} className="flex items-start gap-2">
                                    <span className="text-(--tertiary)">✓</span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
};