import { ConversationIcon } from "@/components/Icons/ConversationIcon";
import { CalendarIcon } from "@/components/Icons/Calendar";
import { WellnessIcon } from "@/components/Icons/WellnessIcon";

export const processSteps = {
  title: "¿Cómo te acompañamos?",
  description:
    "Nos encargamos de coordinar tu atención para que solo te preocupes de sentirte mejor.",

  steps: [
    {
      number: "01",
      title: "Cuéntanos qué necesitas",
      description:
        "Te orientamos según tu necesidad y te ayudamos a encontrar el servicio o profesional más adecuado para ti.",
      icon: ConversationIcon,
    },
    {
      number: "02",
      title: "Coordinamos tu atención",
      description:
        "Gestionamos la reserva y articulamos el contacto con el profesional para brindarte una experiencia simple y acompañada.",
      icon: CalendarIcon,
    },
    {
      number: "03",
      title: "Plan de Acción",
      description:
        "Asiste a tu sesión presencial o utiliza nuestro espacio de teleconsulta asistida, diseñado para entregarte comodidad, privacidad y tranquilidad.",
      icon: WellnessIcon,
    },
  ],
};