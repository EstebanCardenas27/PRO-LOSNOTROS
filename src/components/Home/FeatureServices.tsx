import {
  featuredService,
  secondaryServices,
  specificTherapy,
  servicesSection,
} from "@/constants/services";

export const FeatureServices = () => {
  const FeaturedIcon = featuredService.icon;
  const TherapyIcon = specificTherapy.icon;

  return (
    <section className="section-spacing">
        <div className="container-custom">
            <div className="mb-16 space-y-2 text-center">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-(--secondary)">
                    {servicesSection.eyebrow}
                </span>

                <h2>{servicesSection.title}</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-4">
                <div className="md:col-span-2 md:row-span-2">
                    <div className="card-organic flex h-full flex-col justify-between border border-(--outline-variant) bg-(--surface-container-low) p-8">
                        <div>
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-(--outline-variant) bg-(--primary-soft)/30">
                                <FeaturedIcon className="h-8 w-8 text-(--primary)" />
                            </div>

                            <h3 className="mb-4">
                                {featuredService.title}
                            </h3>

                            <p className="text-(--muted)">
                                {featuredService.description}
                            </p>
                        </div>

                        <img
                            src={featuredService.image}
                            alt={featuredService.title}
                            className="mt-8 h-56 w-full rounded-3xl object-cover shadow-sm"
                        />
                    </div>
                </div>

                {secondaryServices.map((service) => {
                    const Icon = service.icon;

                    return (
                    <div key={service.title} className={`card-organic border border-(--outline-variant) p-8 ${service.cardBackground}`}>
                        <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-md border border-(--outline-variant) ${service.iconBackground}`}>
                            <Icon className={`h-6 w-6 ${service.iconClass}`} />
                        </div>

                        <h3 className="mb-2">
                            {service.title}
                        </h3>

                        <p className="text-sm text-(--muted)">
                            {service.description}
                        </p>
                    </div>
                    );
                })}

                <div className="md:col-span-2">
                    <div className={`card-organic flex h-full items-center gap-6 border border-(--outline-variant) p-8 ${specificTherapy.cardBackground}`} >
                        <div className="flex-1">
                            <h3 className="mb-2">
                            {specificTherapy.title}
                            </h3>

                            <p className="text-(--muted)">
                            {specificTherapy.description}
                            </p>
                        </div>

                        <TherapyIcon className={`h-12 w-12 shrink-0 ${specificTherapy.iconClass}`}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};