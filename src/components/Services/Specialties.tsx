import { tags } from "@/constants/services";


export const Specialties = () => {
  return (
    <section className="section-spacing">

        <div className="container-custom">

            <h2 className="text-3xl sm:text-4xl md:text-display-lg leading-tight">
                Salud, Bienestar &<br />
                <span className="font-normal italic">
                    Acompañamiento Profesional 
                </span>
            </h2>

            <p className="text-base sm:text-lg leading-relaxed">
                Un espacio donde encontrarás terapias corporales, apoyo profesional
                y servicios orientados al bienestar físico, emocional y personal.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-4 py-1.5 bg-(--secondary-soft)/40 text-(--secondary) text-sm font-medium rounded-full border border-(--secondary)/20"
                        >
                        {tag}
                    </span>
                ))}
            </div>

        </div>

    </section>
  );
};