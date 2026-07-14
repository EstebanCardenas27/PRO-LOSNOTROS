import { processSteps } from "@/constants/processSteps";
import { SpaIcon } from "@/components/Icons/SpaIcon";

export const Process = () => {
  return (
    <section className="section-spacing bg-(--surface-container-high)/50">
        <div className="container-custom">

            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2>
                    {processSteps.title}
                </h2>

                <p className="mt-4 text-(--muted)">
                    {processSteps.description}
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                {processSteps.steps.map((step) => {
                    const Icon = step.icon;

                    return (
                    <article key={step.number} className=" p-8 h-full border rounded-xl text-center relative overflow-hidden  bg-white ">
                        
                        <div className="absolute -top-10 -right-10 opacity-10 pointer-events-none">
                            <SpaIcon className=" w-32 h-32 text-(--secondary) "/>
                        </div>
                        
                        <div className="relative mb-8 flex justify-center">                           

                            <div className="relative flex items-center justify-center ">
                                <Icon className="w-16 h-16" />
                            </div>

                        </div>

                        <h3 className="mb-4 leading-tight">

                            <span>
                                {step.number}.
                            </span>{" "}

                            {step.title}

                        </h3>
                        
                        <p className="text-(--muted)">
                            {step.description}
                        </p>

                    </article>
                    );
                })}
            </div>
        </div>
    </section>
  );
};