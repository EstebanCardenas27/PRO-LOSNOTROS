import { contact } from "@/constants/contact";

export const ContactInfo = () => {
  return (
    <section className="pb-stack-lg">
      <div className="container-custom">

        <div className="grid md:grid-cols-3 gap-6">
          
          {contact.cards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className={` 
                  relative
                  overflow-hidden
                  p-8
                  border
                  border-(--outline-variant)
                  transition-all
                  duration-300
                  rounded-tl-[40px]
                  rounded-br-[40px]
                  hover:-translate-y-1
                  hover:shadow-(--shadow-hover)
                  ${card.background}
                `}
              >

                <div className="absolute -right-20 bottom-30 w-50 h-50 opacity-10 bg-no-repeat bg-contain pointer-events-none"
                  style={{
                    backgroundImage: "url('/ico/logo_sfondo.png')",
                  }}
                />

                <div className="relative z-10">

                  <div className={`w-16 h-16 rounded-full border border-(--outline-variant) flex items-center justify-center mb-6 backdrop-blur-sm ${card.iconBackground}`}>
                    <Icon className={`w-8 h-8 ${card.iconColor}`}/>
                  </div>

                  <h3 className="mb-3">
                    {card.title}
                  </h3>

                  <p className="text-(--muted)">
                    {card.description}
                  </p>

                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
};