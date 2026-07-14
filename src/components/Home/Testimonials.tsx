import { testimonials } from "@/constants/testimonials";

export const Testimonials = () => {
  return (
    <section className="px-6 md:px-20 py-16 max-w-7xl mx-auto">

        <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-(--secondary)">
                CUIDARSE ES VOLVER A TI
            </span>

            <h2>Historias de Bienestar</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {testimonials.map((item, index) => (

            <article
                key={index}
                className=" relative overflow-hidden p-8 border border-(--outline-variant)/30 bg-(--surface-container-low) rounded-tl-[40px] rounded-br-[40px] transition-all duration-300 hover:-translate-y-1 hover:shadow-(--shadow-hover) ">

                <div className="absolute -top-10 -right-10 w-40 h-40 opacity-15 bg-no-repeat bg-contain pointer-events-none"
                    style={{ backgroundImage: "url('/ico/logo_sfondo.png')",}}/>

                <div className="relative z-10">

                    <p className="italic text-(--muted) leading-relaxed">
                        "{item.text}"
                    </p>

                    <div className="mt-8 flex items-center gap-3 not-italic">

                        <div className="w-10 h-10 rounded-full bg-(--secondary-soft)" />

                        <div>
                            <p className="font-bold text-(--primary) text-sm">
                                {item.name}
                            </p>

                            <p className="text-xs text-(--secondary)">
                                {item.role}
                            </p>
                        </div>

                    </div>

                </div>

            </article>

            ))}

        </div>

    </section>
  );
};