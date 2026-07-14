import { whyChooseUsItems } from "@/constants/whyUs";

export const WhyChooseUs = () => {
  return (
    <section className="bg-(--surface-container-high)/50 py-16">

      <div className="px-6 md:px-20 max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-(--secondary)">
                    TU BIENESTAR TAMBIÉN ES PRIORIDAD
                </span>

                <h2>¿Por qué elegirnos?</h2>
            </div>            

            <ul className="space-y-6">
              {whyChooseUsItems.map((item, index) => (
                <li key={index} className="flex gap-4">
                  <div className="bg-(--primary) rounded-full h-6 w-6 flex items-center justify-center mt-1 shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>

                  <div>
                    <h4 className="font-semibold text-(--primary)">
                      {item.title}
                    </h4>
                    <p className="text-(--muted)">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <img
              className="rounded-3xl shadow-xl w-full aspect-4/3 object-cover"
              src="/teleconsulta_2.webp"
              alt="Consultorio natural"
            />
          </div>
        </div>
      </div>
    </section>
  );
};