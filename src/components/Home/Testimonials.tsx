import { testimonials } from "@/constants/testimonials";

export const Testimonials = () => {
  return (
    <section className="px-6 md:px-20 py-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-[36px] md:text-[48px] text-(--primary)">
            Historias de Bienestar
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
            <div
                key={index}
                className="bg-(--surface-container-low) p-8 rounded-2xl shadow-sm border border-(--outline-variant)/30 italic text-(--muted)"
            >
                <p>"{item.text}"</p>

                <div className="mt-6 flex items-center gap-3 not-italic">
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
            ))}
        </div>
    </section>
  );
};