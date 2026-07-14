import { ProfessionalCard } from "@/components/ui/ProfessionalCard";
import { professionals } from "@/constants/professionals";

export const GridProfessionals = () => {
  return (
    <section className="container-custom section-spacing">

        <div className="text-center mb-12">

            <h2>Nuestros Profesionales</h2>

            <p className="mt-4 max-w-2xl mx-auto text-(--muted)">
                Un equipo comprometido con tu bienestar físico, emocional y nutricional.
            </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {professionals.map((professional) => (
            <ProfessionalCard
                key={professional.id}
                professional={professional}
            />
            ))}

        </div>

    </section>
  );
};