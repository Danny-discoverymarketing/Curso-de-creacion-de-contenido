const WHATSAPP_NUMBER = "52XXXXXXXXXX";
const whatsappBase = `https://wa.me/${WHATSAPP_NUMBER}`;
const WORDMARK = '<span class="eterno-word inline-wordmark" aria-label="Eterno"><span aria-hidden="true">Et<span class="eterno-mark">e</span>rno</span></span>';
const HERO_WORDMARK = '<span class="eterno-word hero-wordmark" aria-label="Eterno"><span aria-hidden="true">Et<span class="eterno-mark">e</span>rno</span></span>';

const translations = {
  es: {
    pageTitle: "Eterno Training Club | Gimnasio en Cabo San Lucas",
    pageDescription:
      "Descubre Eterno Training Club, un gimnasio en Cabo San Lucas con buena vibra, coaches que te orientan y una comunidad enfocada en el progreso.",
    skip: "Saltar al contenido",
    navHome: "Inicio",
    navAbout: "Nosotros",
    navFacilities: "Instalaciones",
    navMemberships: "Membresias",
    navContact: "Contacto",
    navVisit: "Agenda tu visita",
    heroEyebrow: `${WORDMARK} Training Club · Cabo San Lucas`,
    heroTitle: `${HERO_WORDMARK} Training Club: tu mejor version comienza aqui`,
    heroCopy: "Un club donde entrenas fuerte, te reciben con buena vibra y formas parte de una comunidad que te impulsa en Cabo San Lucas.",
    heroMemberships: "Conoce nuestras membresias",
    heroVisit: "Agenda tu visita",
    metaStrength: "Fuerza",
    metaBoxing: "Boxeo",
    metaFunctional: "Funcional",
    aboutKicker: "Nosotros",
    aboutTitle: "Una comunidad que se siente",
    aboutCopy: `${WORDMARK} Training Club es un lugar donde la diferencia empieza desde que entras. Te reciben con una sonrisa, te saludan, te dan la bienvenida y, si necesitas ayuda, hay coaches dispuestos a orientarte para que entrenes mejor. Aqui no solo vienes a usar maquinas: vienes a formar parte de una comunidad con energia, buena vibra y ganas de progresar.`,
    statEquipment: "Bienvenida",
    statQuality: "Buena vibra",
    statCoaches: "Coaches",
    statProfessional: "Te orientan",
    statCommunity: "Comunidad",
    statDiscipline: "Progreso real",
    facilitiesKicker: "Instalaciones",
    facilitiesTitle: "Espacios creados para entrenar con enfoque",
    galleryWeights: "Area de pesas",
    galleryMachines: "Maquinas de fuerza",
    galleryBoxing: "Area de boxeo",
    galleryFunctional: "Zona funcional",
    galleryReception: "Recepcion",
    galleryCommon: "Areas comunes",
    galleryCommunity: "Comunidad",
    galleryBoxingShort: "Boxeo",
    membershipsKicker: "Membresias",
    membershipsTitle: "El pase correcto para empezar",
    planReference: "Referencia",
    planRecommended: "Recomendado",
    planConsult: "Consultar",
    dayPassTitle: "Day Pass",
    dayPassOne: "Acceso por dia",
    dayPassTwo: "Uso de area de fuerza",
    dayPassThree: "Ideal para conocer el club",
    dayPassFour: "Horarios sujetos a operacion",
    monthlyTitle: "Acceso mensual",
    monthlyOne: "Mensual sin contrato",
    monthlyTwo: "Acceso al club",
    monthlyThree: "Clases disponibles segun calendario",
    monthlyFour: "Lunes a viernes y sabado",
    personalTitle: "Entrenamiento personalizado",
    personalOne: "Plan uno a uno",
    personalTwo: "Evaluacion inicial",
    personalThree: "Seguimiento con coach",
    personalFour: "Disponibilidad por confirmar",
    whyKicker: "Por que elegirnos",
    whyTitle: "La diferencia se siente cuando entras",
    whyCopy:
      "En Eterno se esta formando una comunidad cercana: trabajadores que te reciben bien, entrenadores que apoyan y una energia que hace que entrenar se sienta distinto.",
    request: "Solicita",
    info: "info",
    membershipButton: "Quiero esta membresia",
    monthlyButton: "Comprar pase mensual",
    hoursKicker: "Horarios",
    hoursTitle: "Entrena con claridad",
    weekday: "Lunes a viernes",
    saturday: "Sabado",
    sunday: "Domingo",
    sundayHours: "Cerrado / consultar disponibilidad",
    holidayNote: "Los horarios pueden variar en dias festivos.",
    locationKicker: "Ubicacion",
    locationCopy: `${WORDMARK} Training Club, Cabo San Lucas, Baja California Sur, Mexico.`,
    directions: "Como llegar",
    ctaKicker: "Empieza hoy",
    ctaTitle: "Agenda una visita o compra tu pase mensual por WhatsApp.",
    ctaCopy: "Ven a conocer la energia del club, entrena en sus instalaciones y descubre una comunidad que te recibe desde el primer dia.",
    ctaPrimary: "Comprar pase mensual",
    ctaSecondary: "Enviar mensaje",
    contactKicker: "Contacto",
    contactTitle: "Solicita informacion o agenda tu visita",
    formName: "Nombre",
    formPhone: "Telefono",
    formEmail: "Correo",
    formMembership: "Tipo de membresia de interes",
    formSelect: "Selecciona una opcion",
    trialClass: "Clase de prueba",
    formMessage: "Mensaje",
    formPrivacy: "Acepto el aviso de privacidad.",
    formSubmit: "Enviar solicitud",
    contactPhone: "Telefono",
    contactEmail: "Correo",
    contactAddress: "Direccion",
    whatsappContact: "Contactar por WhatsApp",
    footerCopy: "Club de entrenamiento en Cabo San Lucas enfocado en fuerza, buena vibra, comunidad y progreso real.",
    footerLinks: "Enlaces",
    footerWeekdays: "Lun - Vie: 5:00 a. m. - 9:00 p. m.",
    footerSaturday: "Sab: 6:00 a. m. - 6:00 p. m.",
    footerSunday: "Dom: cerrado / consultar",
    privacy: "Aviso de privacidad",
    terms: "Terminos y condiciones",
    rights: "Todos los derechos reservados.",
    validateRequired: "Este campo es obligatorio.",
    validateEmail: "Ingresa un correo valido.",
    validateName: "Ingresa tu nombre completo.",
    validatePhone: "Ingresa un telefono valido.",
    validateMessage: "Cuentanos un poco mas.",
    privacyError: "Acepta el aviso de privacidad para continuar.",
    formError: "Revisa los campos marcados antes de enviar.",
    formSuccess: "Solicitud lista. Se abrira WhatsApp para enviar el mensaje.",
    defaultWhatsApp: "Hola, quiero informacion sobre Eterno Training Club y agendar una visita.",
    planWhatsApp: "Hola, quiero informacion sobre {plan} en Eterno Training Club.",
    formWhatsApp:
      "Hola, soy {name}. Me interesa {membership}. Telefono: {phone}. Correo: {email}. Mensaje: {message}",
    lightboxAlt: "Fotografia de {title} en Eterno Training Club",
  },
  en: {
    pageTitle: "Eterno Training Club | Gym in Cabo San Lucas",
    pageDescription:
      "Discover Eterno Training Club, a gym in Cabo San Lucas with great energy, helpful coaches, and a progress-focused community.",
    skip: "Skip to content",
    navHome: "Home",
    navAbout: "About",
    navFacilities: "Facilities",
    navMemberships: "Memberships",
    navContact: "Contact",
    navVisit: "Book a visit",
    heroEyebrow: `${WORDMARK} Training Club · Cabo San Lucas`,
    heroTitle: `${HERO_WORDMARK} Training Club: your best version starts here`,
    heroCopy: "A club where you train hard, feel welcomed, and become part of a community that pushes you forward in Cabo San Lucas.",
    heroMemberships: "View memberships",
    heroVisit: "Book a visit",
    metaStrength: "Strength",
    metaBoxing: "Boxing",
    metaFunctional: "Functional",
    aboutKicker: "About",
    aboutTitle: "A community you can feel",
    aboutCopy: `${WORDMARK} Training Club feels different from the moment you walk in. You are greeted with a smile, welcomed by the team, and if you need help, coaches are there to guide your training. This is not just a place to use machines: it is a community built around good energy, support, and progress.`,
    statEquipment: "Welcome",
    statQuality: "Good energy",
    statCoaches: "Coaches",
    statProfessional: "Helpful",
    statCommunity: "Community",
    statDiscipline: "Real progress",
    facilitiesKicker: "Facilities",
    facilitiesTitle: "Spaces built for focused training",
    galleryWeights: "Free weights",
    galleryMachines: "Strength machines",
    galleryBoxing: "Boxing area",
    galleryFunctional: "Functional zone",
    galleryReception: "Reception",
    galleryCommon: "Common areas",
    galleryCommunity: "Community",
    galleryBoxingShort: "Boxing",
    membershipsKicker: "Memberships",
    membershipsTitle: "Choose the right pass to start",
    planReference: "Reference",
    planRecommended: "Recommended",
    planConsult: "Ask us",
    dayPassTitle: "Day Pass",
    dayPassOne: "One-day access",
    dayPassTwo: "Strength area access",
    dayPassThree: "Ideal for getting to know the club",
    dayPassFour: "Hours subject to operation",
    monthlyTitle: "Monthly access",
    monthlyOne: "Monthly, no contract",
    monthlyTwo: "Club access",
    monthlyThree: "Classes available by schedule",
    monthlyFour: "Monday to Friday and Saturday",
    personalTitle: "Personal training",
    personalOne: "One-on-one plan",
    personalTwo: "Initial assessment",
    personalThree: "Coach follow-up",
    personalFour: "Availability to be confirmed",
    whyKicker: "Why choose us",
    whyTitle: "You feel the difference when you walk in",
    whyCopy:
      "Eterno is building a close community: a team that welcomes you, coaches who help, and an energy that makes training feel different.",
    request: "Request",
    info: "info",
    membershipButton: "I want this membership",
    monthlyButton: "Buy monthly pass",
    hoursKicker: "Hours",
    hoursTitle: "Train with clarity",
    weekday: "Monday to Friday",
    saturday: "Saturday",
    sunday: "Sunday",
    sundayHours: "Closed / ask for availability",
    holidayNote: "Hours may vary on holidays.",
    locationKicker: "Location",
    locationCopy: `${WORDMARK} Training Club, Cabo San Lucas, Baja California Sur, Mexico.`,
    directions: "Get directions",
    ctaKicker: "Start today",
    ctaTitle: "Book a visit or buy your monthly pass.",
    ctaCopy: "Come feel the energy of the club, train in the space, and discover a community that welcomes you from day one.",
    ctaPrimary: "Buy monthly pass",
    ctaSecondary: "Send a message",
    contactKicker: "Contact",
    contactTitle: "Request information or book a visit",
    formName: "Name",
    formPhone: "Phone",
    formEmail: "Email",
    formMembership: "Membership of interest",
    formSelect: "Select an option",
    trialClass: "Trial class",
    formMessage: "Message",
    formPrivacy: "I accept the privacy notice.",
    formSubmit: "Send request",
    contactPhone: "Phone",
    contactEmail: "Email",
    contactAddress: "Address",
    whatsappContact: "Contact via WhatsApp",
    footerCopy: "Training club in Cabo San Lucas focused on strength, good energy, community, and real progress.",
    footerLinks: "Links",
    footerWeekdays: "Mon - Fri: 5:00 a.m. - 9:00 p.m.",
    footerSaturday: "Sat: 6:00 a.m. - 6:00 p.m.",
    footerSunday: "Sun: closed / ask",
    privacy: "Privacy notice",
    terms: "Terms and conditions",
    rights: "All rights reserved.",
    validateRequired: "This field is required.",
    validateEmail: "Enter a valid email.",
    validateName: "Enter your full name.",
    validatePhone: "Enter a valid phone number.",
    validateMessage: "Tell us a little more.",
    privacyError: "Accept the privacy notice to continue.",
    formError: "Check the highlighted fields before sending.",
    formSuccess: "Request ready. WhatsApp will open so you can send the message.",
    defaultWhatsApp: "Hi, I want information about Eterno Training Club and would like to book a visit.",
    planWhatsApp: "Hi, I want information about {plan} at Eterno Training Club.",
    formWhatsApp:
      "Hi, my name is {name}. I am interested in {membership}. Phone: {phone}. Email: {email}. Message: {message}",
    lightboxAlt: "Photo of {title} at Eterno Training Club",
  },
};

const planNames = {
  "Day Pass": {
    es: "Day Pass",
    en: "Day Pass",
  },
  "Acceso mensual": {
    es: "Acceso mensual",
    en: "Monthly access",
  },
  "Entrenamiento personalizado": {
    es: "Entrenamiento personalizado",
    en: "Personal training",
  },
  "Pase mensual": {
    es: "Pase mensual",
    en: "Monthly pass",
  },
};

const differentiators = {
  es: [
    {
      title: "Te reciben bien desde que entras",
      body:
        "La experiencia empieza en la entrada: una sonrisa, un saludo y una bienvenida que hacen que el club se sienta cercano desde el primer dia.",
    },
    {
      title: "Coaches que tambien te ayudan",
      body:
        "Aunque esten trabajando con entrenamiento personalizado, los coaches mantienen una actitud de apoyo. Si necesitas orientacion, te instruyen para entrenar mejor.",
    },
    {
      title: "Una vibra que se esta construyendo",
      body:
        "La energia de Eterno viene de su gente: trabajadores, entrenadores y miembros que estan formando una comunidad distinta a la de cualquier otro gym.",
    },
  ],
  en: [
    {
      title: "You feel welcomed when you walk in",
      body:
        "The experience starts at the door: a smile, a greeting, and a welcome that makes the club feel personal from day one.",
    },
    {
      title: "Coaches who are there to help",
      body:
        "Even when coaches are working with personal training clients, the attitude is supportive. If you need guidance, they help you train better.",
    },
    {
      title: "A culture and energy being built",
      body:
        "Eterno's energy comes from its people: staff, coaches, and members building a community that feels different from any other gym.",
    },
  ],
};

const header = document.querySelector("#siteHeader");
const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");
const testimonialCard = document.querySelector("#testimonialCard");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxTitle = document.querySelector("#lightboxTitle");
const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");
const languageButtons = document.querySelectorAll(".language-option");
const metaDescription = document.querySelector('meta[name="description"]');

let activeTestimonial = 0;
let activeLanguage =
  localStorage.getItem("eternoLanguage") || (navigator.language.toLowerCase().startsWith("es") ? "es" : "en");

function t(key) {
  return translations[activeLanguage][key] || translations.es[key] || "";
}

function interpolate(template, values) {
  return Object.entries(values).reduce((text, [key, value]) => text.replaceAll(`{${key}}`, value), template);
}

function makeWhatsAppUrl(message) {
  return `${whatsappBase}?text=${encodeURIComponent(message)}`;
}

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 20);
}

function closeMenu() {
  menuToggle.classList.remove("active");
  menuToggle.setAttribute("aria-expanded", "false");
  mainNav.classList.remove("open");
  document.body.classList.remove("menu-open");
}

function renderTestimonial() {
  const items = differentiators[activeLanguage];
  const item = items[activeTestimonial % items.length];
  testimonialCard.innerHTML = `
    <h3>${item.title}</h3>
    <p>${item.body}</p>
  `;
}

function setWhatsAppLinks() {
  document.querySelector("#whatsAppFloat").href = makeWhatsAppUrl(t("defaultWhatsApp"));
  document.querySelector("#contactWhatsApp").href = makeWhatsAppUrl(t("defaultWhatsApp"));
  document.querySelectorAll("[data-plan]").forEach((link) => {
    const plan = planNames[link.dataset.plan]?.[activeLanguage] || link.dataset.plan;
    link.href = makeWhatsAppUrl(interpolate(t("planWhatsApp"), { plan }));
    link.target = "_blank";
    link.rel = "noopener";
  });
}

function applyLanguage(language) {
  activeLanguage = language;
  localStorage.setItem("eternoLanguage", language);
  document.documentElement.lang = language === "es" ? "es-MX" : "en";
  document.body.dataset.language = language;
  document.title = t("pageTitle");
  if (metaDescription) metaDescription.setAttribute("content", t("pageDescription"));

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = t(element.dataset.i18nHtml);
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  setWhatsAppLinks();
  renderTestimonial();
}

function validateField(field) {
  const row = field.closest(".form-row");
  if (!row) return field.checked || field.value.trim().length > 0;

  const error = row.querySelector("small");
  let message = "";

  if (field.validity.valueMissing) message = t("validateRequired");
  else if (field.type === "email" && field.validity.typeMismatch) message = t("validateEmail");
  else if (field.name === "name" && field.value.trim().length < 2) message = t("validateName");
  else if (field.name === "phone" && field.value.replace(/\D/g, "").length < 8) message = t("validatePhone");
  else if (field.name === "message" && field.value.trim().length < 8) message = t("validateMessage");

  row.classList.toggle("invalid", Boolean(message));
  error.textContent = message;
  return !message;
}

function initReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((item) => item.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  elements.forEach((item) => observer.observe(item));
}

window.addEventListener("scroll", updateHeader, { passive: true });

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.classList.toggle("active", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
});

mainNav.addEventListener("click", (event) => {
  if (event.target.matches("a")) closeMenu();
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

document.querySelector("#prevTestimonial").addEventListener("click", () => {
  activeTestimonial = (activeTestimonial - 1 + differentiators[activeLanguage].length) % differentiators[activeLanguage].length;
  renderTestimonial();
});

document.querySelector("#nextTestimonial").addEventListener("click", () => {
  activeTestimonial = (activeTestimonial + 1) % differentiators[activeLanguage].length;
  renderTestimonial();
});

document.querySelector("#galleryGrid").addEventListener("click", (event) => {
  const item = event.target.closest(".gallery-item");
  if (!item) return;
  lightboxImage.src = item.dataset.src;
  lightboxImage.alt = interpolate(t("lightboxAlt"), { title: item.dataset.title });
  lightboxTitle.textContent = item.dataset.title;
  document.body.classList.add("lightbox-open");
  lightbox.showModal();
});

document.querySelector("#lightboxClose").addEventListener("click", () => {
  lightbox.close();
});

lightbox.addEventListener("close", () => {
  document.body.classList.remove("lightbox-open");
  lightboxImage.src = "";
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const fields = [...contactForm.querySelectorAll("input:not([type='checkbox']), select, textarea")];
  const fieldsAreValid = fields.map(validateField).every(Boolean);
  const privacy = document.querySelector("#privacy");

  if (!privacy.checked) {
    formStatus.textContent = t("privacyError");
    formStatus.style.color = "#ef8f8f";
    return;
  }

  if (!fieldsAreValid) {
    formStatus.textContent = t("formError");
    formStatus.style.color = "#ef8f8f";
    return;
  }

  const data = new FormData(contactForm);
  const message = interpolate(t("formWhatsApp"), {
    name: data.get("name"),
    membership: data.get("membership"),
    phone: data.get("phone"),
    email: data.get("email"),
    message: data.get("message"),
  });
  formStatus.textContent = t("formSuccess");
  formStatus.style.color = "";
  window.open(makeWhatsAppUrl(message), "_blank", "noopener");
  contactForm.reset();
});

contactForm.querySelectorAll("input, select, textarea").forEach((field) => {
  field.addEventListener("blur", () => validateField(field));
});

document.querySelector("#year").textContent = new Date().getFullYear();

applyLanguage(activeLanguage);
updateHeader();
initReveal();
