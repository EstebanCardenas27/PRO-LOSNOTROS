import { HeartCareIcon } from "@/components/Icons/HeartCareIcon";
import { CalendarIcon } from "@/components/Icons/Calendar";
import { AccessibilityIcon } from "@/components/Icons/AccessibilityIcon";
import { WellnessIcon } from "@/components/Icons/WellnessIcon";

export const benefits = {
  title: "Una experiencia pensada para tu bienestar",

  description:
    "En Los Notros coordinamos cada atención para que vivas una experiencia cómoda, cercana y acompañada desde el primer contacto.",

  featured: {
    imageTop: {
      src: "/teleconsulta_1.webp",
      alt: "Teleconsulta asistida",
    },

    videoBottom: {
      src: "/teleconsulta_2.mp4",
    },

    primaryCard: {
      title: "Teleconsulta Asistida",
      description:
        "Espacio privado equipado para facilitar tus consultas remotas.",
      icon: AccessibilityIcon,
    },

    secondaryCard: {
      title: "Atención",
      subtitle: "Personalizada",
    },
  },

  benefits: [
    {
      title: "Atención personalizada",
      description:
        "Te orientamos para encontrar el servicio o profesional más adecuado para tus necesidades.",
      icon: HeartCareIcon,
    },
    {
      title: "Coordinación centralizada",
      description:
        "Gestionamos las reservas y articulamos la comunicación con cada profesional.",
      icon: CalendarIcon,
    },
    {
      title: "Teleconsulta asistida",
      description:
        "Contamos con un espacio privado equipado con computador e internet para facilitar tus consultas remotas.",
      icon: AccessibilityIcon,
    },
    {
      title: "Bienestar integral",
      description:
        "Accede a distintos servicios orientados al bienestar físico, emocional y nutricional.",
      icon: WellnessIcon,
    },
  ],

  commitment: {
    title: "Nuestro compromiso",
    description:
      "Crear un espacio donde cada persona se sienta escuchada, acompañada y cuidada, ya sea en una atención presencial o mediante teleconsulta asistida.",
    signature: "Centro de Bienestar Los Notros",
  },
};