import { WaterDropIcon } from "@/components/Icons/WaterDropIcon";
import { SpaIcon } from "@/components/Icons/SpaIcon";
import { AccessibilityIcon } from "@/components/Icons/AccessibilityIcon";
import { LeafDividerIcon } from "@/components/Icons/LeafDividerIcon";
import { PsychologyIcon } from "@/components/Icons/PsychologyIcon";
import { NutritionIcon } from "@/components/Icons/NutritionIcon";
import { HeartCareIcon } from "@/components/Icons/HeartCareIcon";
import { MassageIcon } from "@/components/Icons/MassageIcon";
import { ReafirmanteIcon } from "@/components/Icons/ReafirmanteIcon";
import { PlusSquareIcon } from "@/components/Icons/PlusSquareIcon";
import { MovementIcon } from "@/components/Icons/MovementIcon";

export const servicesSection = {
  eyebrow: "BIENESTAR QUE SE SIENTE",
  title: "Un Espacio para Cuidar de Ti",
};

export const featuredService = {
  title: "Bienestar Corporal",
  description:
    "Masajes terapéuticos, drenaje linfático y tratamientos corporales orientados al descanso, la recuperación física y el equilibrio integral.",
  image: "/massage.png",
  icon: MassageIcon,
};

export const secondaryServices = [
  {
    title: "Estética y Cuidado Personal",
    description:
      "Tratamientos faciales, depilación y cuidados estéticos pensados para complementar tu bienestar y potenciar el autocuidado.",
    icon: WaterDropIcon,
    iconClass: "text-(--secondary)",
    iconBackground: "bg-(--secondary-soft)/30",
    cardBackground: "bg-[#e7c3e1]/50!",
  },
  {
    title: "Evaluación Integral",
    description:
      "Chequeo bioenergético con orientación personalizada para conocer tu estado de bienestar y recibir recomendaciones enfocadas en hábitos saludables.",
    icon: HeartCareIcon,
    iconClass: "text-(--primary)",
    iconBackground: "bg-(--primary-soft)/25",
    cardBackground: "bg-[#ff717150]!",
  },
];

export const specificTherapy = {
  title: "Red de Profesionales",
  description:
    "Facilitamos el acceso a psicología, nutrición, kinesiología y terapias complementarias mediante profesionales especializados y un espacio diseñado para acompañar tu bienestar de forma integral.",
  icon: PlusSquareIcon,
  iconClass: "text-(--primary)",
  cardBackground: "bg-secondary/40!",
};

export const tags = [
  "Bienestar Integral",
  "Atención Personalizada",
  "Acompañamiento Profesional",
];

export const wellnessCategory = {
  title: "Bienestar Presencial",
  icon: LeafDividerIcon,
};

export const wellnessServicesConst = [
  {
    title: "Bienestar Corporal",
    description:
      "Recupera el equilibrio de tu cuerpo mediante terapias manuales orientadas a la relajación, recuperación muscular y bienestar físico.",
    icon: SpaIcon,
    tags: [
      "Masajes de Relajación",
      "Masajes Descontracturantes",
      "Drenaje Linfático",
      "Tratamientos Corporales",
    ],
    featured: true,
  },
  {
    title: "Estética y Cuidado Personal",
    description:
      "Servicios enfocados en el cuidado de la piel, la imagen personal y el bienestar estético.",
    icon: ReafirmanteIcon,
    tags: [
      "Limpieza Facial",
      "Depilación Facial",
      "Depilación Corporal",
      "Depilación Íntima",
    ],
    link: false,
  },
  {
    title: "Terapias Complementarias",
    description:
      "Técnicas integrativas orientadas al equilibrio físico y emocional desde una mirada complementaria del bienestar.",
    icon: AccessibilityIcon,
    tags: [
      "Acupuntura",
      "Biomagnetismo",
      "Terapias Integrativas",
      "Equilibrio Energético",
    ],
    link: false,
  },
];

export const complementaryTherapies = {
  title: "Productos para el Bienestar",
  description:
    "Complementa tus tratamientos con productos seleccionados para apoyar tus hábitos de autocuidado y bienestar diario.",
  list: [
    "Productos naturales",
    "Productos de autocuidado",
    "Cosmética especializada",
    "Productos Nu Skin",
  ],
};

export const professionalCategory = {
  title: "Teleconsulta Asistida",
  icon: LeafDividerIcon,
};

export const professionalServices = [
  {
    title: "Un espacio preparado para tu atención remota",
    description:
      "Disponemos de un box privado equipado para que puedas conectarte con profesionales especializados desde un entorno cómodo, seguro y acompañado.",
    featured: true,
  },
  {
    title: "Bienestar Emocional",
    description:
      "Accede a acompañamiento profesional online orientado al bienestar psicológico, gestión emocional y desarrollo personal.",
    icon: PsychologyIcon,
    tags: [
      "Psicología",
      "Apoyo emocional",
      "Sesiones online",
      "Desarrollo personal",
    ],
  },
  {
    title: "Bienestar Nutricional",
    description:
      "Orientación personalizada para desarrollar hábitos alimentarios saludables y mejorar tu calidad de vida.",
    icon: NutritionIcon,
    tags: [
      "Nutrición",
      "Alimentación saludable",
      "Hábitos saludables",
    ],
  },
  {
    title: "Movimiento y Recuperación",
    description:
      "Acompañamiento profesional orientado al movimiento, recuperación funcional y prevención de molestias físicas.",
    icon: MovementIcon,
    tags: [
      "Kinesiología",
      "Movimiento",
      "Recuperación funcional",
    ],
  },
];

export const wellnessEducation = {
  title: "Educación para el Bienestar",
  description:
    "Espacios de aprendizaje diseñados para promover hábitos saludables, autocuidado y herramientas prácticas para una vida equilibrada.",
  list: [
    "Talleres",
    "Cursos",
    "Charlas",
    "Programas educativos",
  ],
};

export const futureServices = {
  title: "Tecnología de Evaluación Integral del Bienestar",
  description:
    "Incorporamos herramientas tecnológicas de biofeedback que permiten obtener una visión orientativa del estado general del organismo. Estos reportes funcionan como apoyo complementario para profesionales del área del bienestar.",
  icon: HeartCareIcon,
  items: [
    "Evaluación de biofeedback corporal",
    "Reporte orientativo del estado general",
    "Apoyo para planes de bienestar personalizados",
    "No sustituye evaluación médica ni diagnóstica"
  ],
};
