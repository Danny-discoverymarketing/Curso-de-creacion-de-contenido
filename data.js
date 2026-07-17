const resourceSections = [
  {
    category: "Videos Curso Cut 30 en Español",
    resources: [
      {
        title: "Semana 1",
        description: "Video de referencia para la primera semana.",
        url: "https://youtu.be/jybf94f8zjU",
      },
      {
        title: "Semana 2",
        description: "Video de referencia para la segunda semana.",
        url: "https://youtu.be/lm58Sie2c0Q",
      },
      {
        title: "Semana 3",
        description: "Video de referencia para la tercera semana.",
        url: "https://youtu.be/02bNEoe0kX8",
      },
    ],
  },
  {
    category: "Ideas para crear contenido",
    resources: [
      {
        title: "Viajes y paisajes",
        description: "Ejemplos generales de contenido.",
        url: "https://www.instagram.com/reel/DEPcQH3gzNy/",
      },
      {
        title: "Receta de comida",
        description: "Ejemplos generales de contenido.",
        url: "https://www.instagram.com/reel/C9XIhBGv_We/",
      },
      {
        title: "Tutorial de edición y transición Match Cut",
        description: "Ejemplos generales de contenido.",
        url: "https://www.instagram.com/reel/DTc9My6jALd/",
      },
      {
        title: "Viaje con amigos por Italia",
        description: "Ejemplos generales de contenido.",
        url: "https://www.instagram.com/reel/DBi_SDAp3sN/",
      },
      {
        title: "Contenido gastronómico y restaurante",
        description: "Ejemplos generales de contenido.",
        url: "https://www.instagram.com/reel/DQnEIVOkjK5/",
      },
    ],
  },
  {
    category: "Marca personal",
    resources: [
      {
        title: "Define tus tres pilares",
        description: "Guía para elegir temas principales y mantener coherencia editorial.",
        url: "https://notion.so/",
      },
      {
        title: "Prueba de autoridad",
        description: "Ideas para mostrar experiencia sin sonar arrogante ni repetitivo.",
        url: "https://linkedin.com/",
      },
      {
        title: "Tu punto de vista",
        description: "Preguntas para convertir opiniones en una voz reconocible.",
        url: "https://medium.com/",
      },
    ],
  },
  {
    category: "Hooks para videos",
    resources: [
      {
        title: "Hooks hablados para detener el scroll",
        description: "Hooks o ganchos para videos.",
        url: "https://www.instagram.com/reel/DT_NuQpj-eE/",
      },
      {
        title: "Hooks visuales para Reels y TikTok",
        description: "Hooks o ganchos para videos.",
        url: "https://www.instagram.com/reel/Dafz_nYklKc/",
      },
      {
        title: "Ideas de movimientos e inicios visuales",
        description: "Hooks o ganchos para videos.",
        url: "https://www.instagram.com/reel/DV3gkIFCGMV/",
      },
      {
        title: "Hooks de curiosidad y conversación",
        description: "Hooks o ganchos para videos.",
        url: "https://www.instagram.com/reel/DXXc4NNhMfL/",
      },
      {
        title: "Diez ideas de hooks visuales",
        description: "Hooks o ganchos para videos.",
        url: "https://www.instagram.com/reel/DXwirLhkpBe/",
      },
    ],
  },
  {
    category: "Carruseles",
    resources: [
      {
        title: "Cómo explicar lo que está pasando",
        description: "Ejemplo de carrusel para hablar sobre un tema actual.",
        url: "https://instagram.com/",
      },
      {
        title: "Cuenta una historia personal",
        description: "Estructura para transformar una experiencia personal en contenido.",
        url: "https://instagram.com/",
      },
      {
        title: "Responder comentarios negativos",
        description: "Ejemplo de contenido para responder críticas sin dañar tu marca.",
        url: "https://instagram.com/",
      },
      {
        title: "Aumentar credibilidad",
        description: "Ideas para demostrar experiencia, resultados y autoridad.",
        url: "https://instagram.com/",
      },
    ],
  },
  {
    category: "Storytelling",
    resources: [
      {
        title: "Storytelling de transformación: antes y después",
        description: "Ejemplos de storytelling.",
        url: "https://www.instagram.com/reel/DZ6B9_apQn6/",
      },
      {
        title: "Historia personal o historia del fundador",
        description: "Ejemplos de storytelling.",
        url: "https://www.instagram.com/reel/DUoiEXNkshc/",
      },
      {
        title: "Cómo contar una historia en menos de 60 segundos",
        description: "Ejemplos de storytelling.",
        url: "https://www.instagram.com/reel/DTAurN1Cqku/",
      },
      {
        title: "Estructura narrativa de antes y después",
        description: "Ejemplos de storytelling.",
        url: "https://www.instagram.com/reel/DRC3VqVkqwI/",
      },
      {
        title: "Dificultades, crecimiento y aprendizaje personal",
        description: "Ejemplos de storytelling.",
        url: "https://www.instagram.com/reel/DZkFf6GJVwq/",
      },
      {
        title: "Storytelling detrás de cámaras",
        description: "Ejemplos de storytelling.",
        url: "https://www.instagram.com/reel/DZRdSbGxIEI/",
      },
      {
        title: "Storytelling cinematográfico",
        description: "Ejemplos de storytelling.",
        url: "https://www.instagram.com/reel/DRKffRSiVPl/",
      },
      {
        title: "Storytelling sin hablar a cámara",
        description: "Ejemplos de storytelling.",
        url: "https://www.instagram.com/reel/DRBjmlkDYYk/",
      },
      {
        title: "Storytelling visual para negocios y marca personal",
        description: "Ejemplos de storytelling.",
        url: "https://www.instagram.com/reel/DVt3kLrkQAw/",
      },
      {
        title: "Storytelling malo, bueno y excelente",
        description: "Ejemplos de storytelling.",
        url: "https://www.instagram.com/reel/DT5PLf5ESfv/",
      },
    ],
  },
  {
    category: "Ejemplos de Reels",
    resources: [
      {
        title: "Reel de proceso rápido",
        description: "Ejemplos de Reels.",
        url: "https://www.instagram.com/reel/DZ6JLVdR2NN/",
      },
      {
        title: "Mito contra realidad",
        description: "Ejemplos de Reels.",
        url: "https://www.instagram.com/reel/DRuwYysDwjy/",
      },
      {
        title: "Mini tutorial de tres pasos",
        description: "Ejemplos de Reels.",
        url: "https://www.instagram.com/reel/DV9KKGZCIL",
      },
    ],
  },
  {
    category: "Guiones y plantillas",
    resources: [
      {
        title: "Guion problema-solución",
        description:
          "Estructura: gancho, problema y solución. Explica una fórmula sencilla para organizar guiones de videos cortos: comenzar con un gancho, presentar el problema y terminar con la solución.",
        url: "https://www.instagram.com/reel/CtclhzFMJAJ/",
      },
      {
        title: "Checklist antes de publicar",
        description:
          "Checklist para revisar un Reel o TikTok. Muestra los puntos que debes comprobar antes de publicar cualquier video en redes sociales.",
        url: "https://www.instagram.com/reel/DUWKiOSCH5l/",
      },
      {
        title: "Plantilla de CTA suave",
        description:
          "Cómo usar una llamada a la acción sin que parezca forzada. Explica que un CTA no debe limitarse a decir “sígueme para más”, sino que debe guiar naturalmente al espectador hacia una acción.",
        url: "https://www.instagram.com/reel/DRKZ9jikYSn/",
      },
    ],
  },
];
