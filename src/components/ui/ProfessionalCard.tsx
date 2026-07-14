import Image from "next/image";
import Link from "next/link";

import type { Professional } from "@/constants/professionals";

interface Props {
  professional: Professional;
}

export const ProfessionalCard = ({
  professional,
}: Props) => {

  const badges = [
    professional.badge,
    ...professional.modalities,
  ];

  return (
    <article className="card-organic flex flex-col h-full border overflow-hidden">

      <div className="relative aspect-4/3 w-full overflow-hidden">

        <Image
          src={professional.image}
          alt={professional.name}
          fill
          className="object-cover"
        />

      </div>

      <div className="p-8 flex flex-col flex-1">

        <h3 className="text-xl text-(--primary)">
          {professional.name}
        </h3>

        <p className="text-(--primary) font-semibold mt-1">
          {professional.specialty}
        </p>

        <p className="text-(--muted) mt-4 grow leading-relaxed">
          {professional.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">

          {badges.map((badge) => (
            <span
              key={badge}
              className="px-3 py-1 rounded-full bg-(--surface-container-highest) text-(--secondary) text-sm font-medium"
            >
              {badge}
            </span>
          ))}

        </div>

        <div className="mt-4 text-sm text-(--muted)">
          {professional.schedule}
        </div>

        <Link
          href="/contact"
          className="btn-primary mt-6 py-3 px-6 text-center"
        >
          Coordinar atención
        </Link>

      </div>

    </article>
  );
};