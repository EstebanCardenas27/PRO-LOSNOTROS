export type Professional = {
  id: number;
  name: string;
  specialty: string;
  description: string;
  image: string;
  modalities: string[];
  schedule: string;
  badge: string;
};

export const professionals: Professional[] = [
  {
    id: 1,
    name: "Macarena Rodriguez",
    specialty: "Masoterapeuta y Esteticista",
    badge: "Bienestar Presencial",
    description:
      "Terapias manuales, tratamientos corporales, estética y evaluaciones integrales orientadas al bienestar físico.",
    image: "/professionals/profileFoto.jpg",
    modalities: [
      "Masoterapia",
      "Estética",
      "Depilación",
    ],
    schedule: "Lunes a Viernes · 09:00 a 18:00",
  },
  {
    id: 2,
    name: "Josefina Parker",
    specialty: "Nutricionista",
    badge: "Bienestar Nutricional",
    description:
      "Evaluación y acompañamiento nutricional personalizado para mejorar hábitos y calidad de vida.",
    image: "/professionals/JosefinaParkerWichelhaus.jpg",
    modalities: [
      "Online",
      "Teleconsulta",
    ],
    schedule: "Lunes a Viernes · 09:00 a 18:00",
  },
  {
    id: 3,
    name: "Nombre de la Psicóloga",
    specialty: "Psicóloga",
    badge: "Bienestar Emocional",
    description:
      "Acompañamiento psicológico orientado al desarrollo personal, la gestión emocional y el fortalecimiento del bienestar integral.",
    image: "/professionals/profileFoto.jpg",
    modalities: [
      "Teleconsulta",
      "Online",
    ],
    schedule: "Lunes a Viernes · 09:00 a 18:00",
  },
];