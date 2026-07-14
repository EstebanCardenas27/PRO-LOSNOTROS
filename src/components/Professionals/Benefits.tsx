import Image from "next/image";

import { benefits } from "@/constants/benefits";

export const Benefits = () => {
  const FeaturedIcon = benefits.featured.primaryCard.icon;

  return (
    <section className="section-spacing">
        <div className="container-custom">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

                <div className="relative">

                    <div className="grid grid-cols-2 gap-4">

                        <div className="relative h-64 rounded-[40px] overflow-hidden shadow-sm">
                            <Image
                            src={benefits.featured.imageTop.src}
                            alt={benefits.featured.imageTop.alt}
                            fill
                            className="object-cover"
                            />
                        </div>

                        <div className="bg-(--primary) text-white rounded-[40px] p-8 flex flex-col justify-center mt-20">

                            <FeaturedIcon className="w-10 h-10 mb-6" />

                            <h3 className="text-white! text-lg! lg:text-xl! mb-3">
                                {benefits.featured.primaryCard.title}
                            </h3>

                            <p className="text-white! text-base">
                                {benefits.featured.primaryCard.description}
                            </p>

                        </div>

                        <div className="bg-(--secondary-soft) rounded-4xl p-6 flex flex-col justify-center text-center mb-20 -mt-10">

                            <p className="text-(--primary) font-semibold">
                                {benefits.featured.secondaryCard.title}
                            </p>

                            <p className="font-bold">
                                {benefits.featured.secondaryCard.subtitle}
                            </p>

                        </div>

                        <div className="relative h-50 rounded-4xl overflow-hidden shadow-sm">
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                            >
                                <source src={benefits.featured.videoBottom.src} type="video/mp4" />
                            </video>
                        </div>

                    </div>

                    <div className=" absolute -bottom-30 left-8 text-[180px] text-(--outline-variant) opacity-30 pointer-events-none">❦</div>

                </div>

                <div>
                    <div className="mb-12">

                        <h2>
                            {benefits.title}
                        </h2>

                        <p className="mt-4 text-(--muted)">
                            {benefits.description}
                        </p>

                    </div>

                    <div className="space-y-8">

                        {benefits.benefits.map((benefit) => {
                            const Icon = benefit.icon;

                            return (
                            <div
                                key={benefit.title}
                                className="flex gap-5"
                            >

                                <div
                                className="
                                    w-14
                                    h-14
                                    rounded-full
                                    border-2
                                    border-(--secondary)
                                    flex
                                    items-center
                                    justify-center
                                    shrink-0
                                "
                                >
                                <Icon className="w-6 h-6 text-(--secondary)" />
                                </div>

                                <div>

                                <h3 className="mb-2">
                                    {benefit.title}
                                </h3>

                                <p className="text-(--muted)">
                                    {benefit.description}
                                </p>

                                </div>

                            </div>
                            );
                        })}

                    </div>

                </div>

            </div>

            <div className="mt-20 p-8 md:p-10 rounded-4xl bg-(--surface-container) border-l-4 border-(--primary) max-w-5xl mx-auto">
                <h3 className="mb-4">
                    {benefits.commitment.title}
                </h3>

                <p className="italic text-(--muted)">
                    "{benefits.commitment.description}"
                </p>

                <p className="mt-6 font-bold text-(--primary)">
                    — {benefits.commitment.signature}
                </p>
            </div>

        </div>
    </section>
  );
};