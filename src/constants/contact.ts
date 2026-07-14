import { CalendarIcon } from "@/components/Icons/Calendar";
import { PhoneIcon } from "@/components/Icons/PhoneIcon";
import { WellnessIcon } from "@/components/Icons/WellnessIcon";

export const contact = {
  title: "Coordina tu Atención",

  description:
    "Completa el formulario y nuestro equipo te ayudará a encontrar el servicio o profesional más adecuado para tus necesidades. Todas las reservas son coordinadas directamente por Centro de Bienestar Los Notros.",

  fields: [
    {
      type: "select",
      label: "Servicio",
      name: "service",
      options: [
        "Seleccione una opción",
        "Masoterapia",
        "Psicología",
        "Nutrición",
        "Teleconsulta asistida",
        "No estoy seguro",
      ],
    },
    {
      type: "select",
      label: "Modalidad",
      name: "modality",
      options: [
        "Seleccione una modalidad",
        "Presencial",
        "Teleconsulta asistida",
        "Necesito orientación",
      ],
    },
    {
      type: "input",
      inputType: "text",
      label: "Nombre",
      name: "name",
      placeholder: "Ingrese su nombre",
    },   
    {
      type: "select",
      label: "Preferencia horaria",
      name: "schedule",
      options: [
        "Seleccione una opción",
        "Mañana",
        "Tarde",
        "Indistinto",
      ],
    },
    {
      type: "textarea",
      label: "Cuéntanos tu necesidad",
      name: "message",
      placeholder:
        "Describe brevemente el motivo de tu consulta...",
      rows: 4,
      fullWidth: true,
    },
  ],

  cards: [
    {
      title: "Coordinación personalizada",
      description:
        "Revisamos cada solicitud y buscamos la mejor alternativa según disponibilidad y necesidades.",
      icon: CalendarIcon,
      background: "bg-(--surface-container-low)",
      iconColor: "text-(--primary)",
      iconBackground: "bg-white/70",
    },
    {
      title: "Respuesta rápida",
      description:
        "Nos contactaremos contigo para coordinar tu atención y resolver cualquier duda.",
      icon: PhoneIcon,
      background: "bg-(--secondary-soft)",
      iconColor: "text-(--secondary)",
      iconBackground: "bg-white/70",
    },
    {
      title: "Acompañamiento continuo",
      description:
        "Te orientamos durante todo el proceso, desde la reserva hasta la atención.",
      icon: WellnessIcon,
      background: "bg-(--primary-soft)/30",
      iconColor: "text-(--primary)",
      iconBackground: "bg-white/70",
    },
  ],
};