"use client";

import { contact } from "@/constants/contact";
import { COMPANY } from "@/constants/company";

import { SpaIcon } from "@/components/Icons/SpaIcon";
import { Divider } from "@/components/ui/Divider";

export const ContactForm = () => {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const service = formData.get("service");
  const modality = formData.get("modality");
  const name = formData.get("name");
  const schedule = formData.get("schedule");
  const message = formData.get("message");

  const text = `
  Hola, me gustaría coordinar una atención en Centro de Bienestar Los Notros.

  Nombre: ${name}
  Servicio: ${service}
  Modalidad: ${modality}
  Preferencia horaria: ${schedule}

  Motivo de la consulta:
  ${message}
  `;

    window.open(
      `${COMPANY.contact.phone.href}?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    form.reset();
  };

  return (
    <section className="section-spacing">
      <div className="container-custom md:max-w-3xl!">

        <div className="text-center mb-16">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-(--secondary)!">
              Tu cuerpo también necesita una pausa
          </p>  

          <h1>{contact.title}</h1>         

          <p className="mt-4 text-(--muted) max-w-3xl mx-auto">
            {contact.description}
          </p>

        </div>

        <Divider />

        <div
          className="mt-12 p-8 md:p-12 relative overflow-hidden rounded-[40px] bg-(--surface-container-low) border border-(--outline-variant) shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
          <div
            className="absolute -top-16 -right-16 opacity-[0.06] pointer-events-none rotate-12">
              <SpaIcon className="w-52 h-52 text-(--secondary)" />
          </div>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8 relative z-10">

            {contact.fields.map((field) => {
              if (field.type === "select") {
                return (
                  <div
                    key={field.name}
                    className={field.fullWidth ? "md:col-span-2" : ""}
                  >
                    <label
                      className="
                        block
                        mb-3
                        text-sm
                        uppercase
                        tracking-wider
                        text-(--secondary)
                        font-semibold
                      "
                    >
                      {field.label}
                    </label>

                    <select
                      name={field.name}
                      className="
                        w-full
                        px-4
                        py-3
                        transition-all
                        focus:scale-[1.01]
                      "
                    >
                      {field.options?.map((option) => (
                        <option
                          key={option}
                          value={option}
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              }

              if (field.type === "textarea") {
                return (
                  <div
                    key={field.name}
                    className="md:col-span-2"
                  >
                    <label
                      className="
                        block
                        mb-3
                        text-sm
                        uppercase
                        tracking-wider
                        text-(--secondary)
                        font-semibold
                      "
                    >
                      {field.label}
                    </label>

                    <textarea
                        name={field.name}
                        rows={field.rows}
                        placeholder={field.placeholder}
                        className="
                        w-full
                        px-4
                        py-3
                        transition-all
                        focus:scale-[1.01]
                      "
                    />
                  </div>
                );
              }

              return (
                <div
                  key={field.name}
                  className={field.fullWidth ? "md:col-span-2" : ""}
                >
                  <label
                    className="
                      block
                      mb-3
                      text-sm
                      uppercase
                      tracking-wider
                      text-(--secondary)
                      font-semibold
                    "
                  >
                    {field.label}
                  </label>

                  <input
                      name={field.name}
                      type={field.inputType}
                      placeholder={field.placeholder}
                      className="
                      w-full
                      px-4
                      py-3
                      transition-all
                      focus:scale-[1.01]
                    "
                  />
                </div>
              );
            })}

            <div className="md:col-span-2 flex flex-col items-center pt-4">

              <button
                type="submit"
                className="
                  btn-primary
                  px-10
                  py-4
                  rounded-full
                  font-bold
                  text-lg
                  shadow-lg
                  hover:shadow-xl
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Enviar solicitud por WhatsApp
              </button>

              <p className="mt-4 text-sm text-(--muted)">
                Una vez recibida tu solicitud, serás contactado para coordinar los detalles de tu atención.
              </p>

            </div>

          </form>

        </div>

      </div>
    </section>
  );
};