import { FaAws } from "react-icons/fa";

import {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiFlutter,
  SiSwift,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiDart,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiRedis,
  SiVercel,
  SiDocker,
  SiRender,
  SiGraphql,
} from "react-icons/si";

/* -------------------------------------------------------------------------- */
/*                                   STATS                                    */
/* -------------------------------------------------------------------------- */

export const stats = [
  {
    value: 50,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    value: 35,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    value: 5,
    suffix: "+",
    label: "Years Experience",
  },
  {
    value: 20,
    suffix: "+",
    label: "Technologies Used",
  },
];

/* -------------------------------------------------------------------------- */
/*                                  SERVICES                                  */
/* -------------------------------------------------------------------------- */
export const services = [
  {
    slug: "web-development",
    icon: "Globe",
    title: "Web Development",
    description:
      "High-performance websites and web applications built with Next.js, React, and modern technologies. Fast, responsive, scalable, and SEO-ready.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    accent: "blue",
  },

  {
    slug: "custom-software-development",
    icon: "Code2",
    title: "Custom Software Development",
    description:
      "Business software tailored to your workflows, requirements, and processes—from internal tools and portals to production-ready applications.",
    gradient: "from-violet-500/20 to-purple-500/20",
    accent: "violet",
  },

  {
    slug: "mobile-app-development",
    icon: "Smartphone",
    title: "Mobile App Development",
    description:
      "Cross-platform and native mobile applications for Android and iOS using Flutter, React Native, and modern backend technologies.",
    gradient: "from-fuchsia-500/20 to-pink-500/20",
    accent: "fuchsia",
  },

  {
    slug: "enterprise-applications",
    icon: "Building2",
    title: "Enterprise Applications",
    description:
      "Scalable business systems including portals, CRM, ERP, HRM, workflow platforms, and multi-user applications designed around your operations.",
    gradient: "from-orange-500/20 to-red-500/20",
    accent: "orange",
  },

  {
    slug: "dashboard-development",
    icon: "LayoutDashboard",
    title: "Dashboard Development",
    description:
      "Interactive dashboards with data visualization, role-based access, reporting, filtering, and actionable business insights.",
    gradient: "from-cyan-500/20 to-teal-500/20",
    accent: "cyan",
  },

  {
    slug: "api-development",
    icon: "Zap",
    title: "API Development",
    description:
      "Secure and scalable REST and GraphQL APIs designed for web applications, mobile apps, third-party integrations, and business workflows.",
    gradient: "from-yellow-500/20 to-amber-500/20",
    accent: "yellow",
  },

  {
    slug: "ui-ux-design",
    icon: "Palette",
    title: "UI/UX Design",
    description:
      "User-focused interfaces designed from wireframes and prototypes to responsive, production-ready experiences.",
    gradient: "from-pink-500/20 to-rose-500/20",
    accent: "pink",
  },

  {
    slug: "maintenance-support",
    icon: "Shield",
    title: "Maintenance & Support",
    description:
      "Post-launch maintenance, bug fixes, performance improvements, security updates, feature enhancements, and ongoing technical support.",
    gradient: "from-emerald-500/20 to-green-500/20",
    accent: "emerald",
  },
]

/* -------------------------------------------------------------------------- */
/*                                  PROJECTS                                  */
/* -------------------------------------------------------------------------- */

export const projects = [
  {
    id: "knk-partners",
    title: "KNK Partners",
    category: "Enterprise Portal",
    tags: ["Portals", "Enterprise Apps"],
    tagline: "Background Verification Management System",

    description:
      "A full-stack enterprise portal for KNK Partners to digitize their background verification workflow, including vendor management, case processing, API integrations, reporting, and operational tracking.",

    color: "from-blue-600 to-cyan-500",
    bgPattern: "bg-blue-950",

    highlights: [
      "Vendor Management",
      "Case Tracking",
      "Status APIs",
      "Dashboard Reporting",
      "Excel Export",
      "PDF Reports",
    ],

    tech: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "REST APIs",
      "AWS",
      "PDF Generation",
    ],

    challenge:
      "KNK Partners needed a centralized system to manage verification cases, vendors, status updates, reporting, and client communication more efficiently than spreadsheet-based workflows.",

    solution:
      "Built a multi-tenant portal with role-based access, case management, vendor-wise filtering, API-based status tracking, audit logging, and automated PDF and Excel reporting.",

    results: [
      "Automated case processing workflows",
      "Centralized audit trail",
      "Real-time client status visibility",
      "Reduced manual data handling",
    ],

    url: "https://knkpartner.com",
  },

  {
    id: "preventfire",
    title: "PreventFire",
    category: "Corporate Website",
    tags: ["Websites", "SEO"],

    tagline: "Fire Safety & Compliance Platform",

    description:
      "A modern corporate website for PreventFire designed to showcase fire safety services, communicate expertise, improve online visibility, and generate qualified business enquiries.",

    color: "from-orange-600 to-red-500",
    bgPattern: "bg-orange-950",

    highlights: [
      "Corporate Website",
      "Service Showcase",
      "Lead Generation",
      "SEO Optimized",
    ],

    tech: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "SEO",
      "Vercel",
    ],

    challenge:
      "PreventFire needed a professional online presence that clearly communicated its fire safety services and made it easier for potential customers to discover and contact the business.",

    solution:
      "Designed and developed a responsive, conversion-focused website with structured content, service sections, clear calls-to-action, SEO-friendly metadata, and lead capture functionality.",

    results: [
      "SEO-optimized online presence",
      "Improved service visibility",
      "Conversion-focused user experience",
      "Fast and responsive website",
    ],

    url: "https://advistadigitalmarketing.in/ultrafiretechlarapp/",
  },

  {
    id: "tridevpandey",
    title: "TridevPandey.in",
    category: "Personal Brand",
    tags: ["Websites", "Branding"],

    tagline: "Personal Brand & Portfolio Website",

    description:
      "A premium personal brand website for Tridev Pandey, designed to establish a strong professional identity, showcase expertise, and create a polished digital presence.",

    color: "from-violet-600 to-purple-500",
    bgPattern: "bg-violet-950",

    highlights: [
      "Professional Branding",
      "Responsive Design",
      "Fast Performance",
      "Portfolio Experience",
    ],

    tech: [
      "Next.js",
      "Framer Motion",
      "Tailwind CSS",
      "Vercel",
    ],

    challenge:
      "The project required a professional digital presence that could communicate expertise clearly while maintaining a distinctive and approachable visual identity.",

    solution:
      "Crafted a responsive visual identity with smooth animations, clear messaging hierarchy, strong content structure, and strategically placed calls-to-action.",

    results: [
      "Professional digital presence",
      "Responsive user experience",
      "Fast website performance",
      "Strong personal branding",
    ],

    url: "https://tridevpandey.in/",
  },

  {
    id: "niceandeasy",
    title: "NiceAndEasyFitness",
    category: "Fitness Business",
    tags: ["Websites", "Lead Generation"],

    tagline: "Fitness Programs & Lead Capture",

    description:
      "A results-focused fitness business website featuring program showcases, transformation content, responsive layouts, and lead capture functionality.",

    color: "from-emerald-600 to-teal-500",
    bgPattern: "bg-emerald-950",

    highlights: [
      "Fitness Programs",
      "Lead Capture",
      "Mobile Optimized",
      "Responsive Design",
    ],

    tech: [
      "Next.js",
      "React Hook Form",
      "Tailwind CSS",
      "Vercel",
    ],

    challenge:
      "The website needed to communicate fitness programs clearly while providing a smooth mobile experience and a simple path for visitors to make enquiries.",

    solution:
      "Created a mobile-first website with program sections, transformation content, social proof, clear calls-to-action, and a frictionless enquiry experience.",

    results: [
      "Mobile-first experience",
      "Improved lead capture",
      "Responsive program presentation",
      "Optimized user journey",
    ],

    url: "https://niceandeasyfitness.com/",
  },

  {
    id: "preventfire-app",
    title: "PreventFire Mobile App",
    category: "Enterprise Mobile App",
    tags: ["Mobile Apps", "Enterprise"],

    tagline: "Fire Safety & Emergency Management Application",

    description:
      "A cross-platform mobile application built for fire safety management, enabling users to access emergency services, safety resources, and compliance-related features across Android and iOS.",

    color: "from-zinc-800 via-slate-700 to-stone-500",
    bgPattern: "bg-zinc-950",

    highlights: [
      "Android & iOS",
      "Cross Platform",
      "Enterprise Solution",
      "Fire Safety",
    ],

    tech: [
      "React Native",
      "Android",
      "iOS",
      "REST API",
      "Firebase",
    ],

    challenge:
      "Provide a reliable mobile platform for fire safety services that allows users to quickly access important safety information and emergency-related features.",

    solution:
      "Developed a responsive cross-platform mobile application with an intuitive interface, optimized performance, and seamless access to fire safety services across Android and iOS.",

    results: [
      "Available on Android & iOS",
      "Cross-platform deployment",
      "Optimized mobile experience",
      "Enterprise mobile solution",
    ],

    url: "https://play.google.com/store/apps/details?id=freelance.com.nits.firetech&pcampaignid=web_share",
  },

  {
    id: "jaiib-caiib",
    title: "JAIIB CAIIB Aspirants",
    category: "Educational Mobile App",
    tags: ["Mobile Apps", "Education"],

    tagline: "Banking Exam Preparation Platform",

    description:
      "A mobile learning application designed for banking professionals preparing for JAIIB and CAIIB examinations with study resources, practice modules, and a user-friendly learning experience.",

    color: "from-pink-600 via-fuchsia-600 to-violet-500",
    bgPattern: "bg-fuchsia-950",

    highlights: [
      "Educational Platform",
      "Practice Modules",
      "Mobile Learning",
      "Android App",
    ],

    tech: [
      "React Native",
      "Android",
      "REST API",
      "Firebase",
    ],

    challenge:
      "Create a simple and accessible learning platform that helps banking professionals prepare efficiently for certification exams from their mobile devices.",

    solution:
      "Built a responsive Android application with structured learning content, smooth navigation, and an optimized user experience for exam preparation.",

    results: [
      "Mobile-first learning",
      "Easy content accessibility",
      "Optimized user experience",
      "Scalable application architecture",
    ],

    url: "https://play.google.com/store/apps/details?id=com.jaiibcaiib.aspirants&pcampaignid=web_share",
  },
];

/* -------------------------------------------------------------------------- */
/*                                 TECH STACK                                 */
/* -------------------------------------------------------------------------- */

export const techStack = {
  Frontend: [
    {
      name: "Next.js",
      icon: SiNextdotjs,
    },
    {
      name: "React",
      icon: SiReact,
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
    },
    {
      name: "Framer Motion",
      icon: SiFramer,
    },
  ],

  Backend: [
    {
      name: "Node.js",
      icon: SiNodedotjs,
    },
    {
      name: "Express",
      icon: SiExpress,
    },
    {
      name: "Laravel",
      icon: SiLaravel,
    },
    {
      name: "REST APIs",
      icon: "🔌",
    },
    {
      name: "GraphQL",
      icon: SiGraphql,
    },
  ],

  Mobile: [
    {
      name: "Flutter",
      icon: SiFlutter,
    },
    {
      name: "Dart",
      icon: SiDart,
    },
    {
      name: "React Native",
      icon: SiReact,
    },
    {
      name: "Swift",
      icon: SiSwift,
    },
  ],

  Database: [
    {
      name: "MongoDB",
      icon: SiMongodb,
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
    },
    {
      name: "MySQL",
      icon: SiMysql,
    },
    {
      name: "Supabase",
      icon: SiSupabase,
    },
    {
      name: "Redis",
      icon: SiRedis,
    },
  ],

  Cloud: [
    {
      name: "AWS",
      icon: FaAws,
    },
    {
      name: "Vercel",
      icon: SiVercel,
    },
    {
      name: "Railway",
      icon: "🚂",
    },
    {
      name: "Render",
      icon: SiRender,
    },
    {
      name: "Docker",
      icon: SiDocker,
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*                                   PROCESS                                  */
/* -------------------------------------------------------------------------- */

export const process = [
  {
    step: "01",
    title: "Discover",
    description:
      "We understand your business goals, target users, requirements, and challenges before defining the right solution.",
    icon: "Search",
  },

  {
    step: "02",
    title: "Plan",
    description:
      "We define the technical approach, project scope, milestones, architecture, and delivery roadmap before development begins.",
    icon: "ClipboardList",
  },

  {
    step: "03",
    title: "Design",
    description:
      "We create wireframes and high-fidelity UI designs focused on usability, responsive layouts, and clear user journeys.",
    icon: "Palette",
  },

  {
    step: "04",
    title: "Develop",
    description:
      "We build the product using modern technologies, reusable components, clean code, API integrations, and scalable architecture.",
    icon: "Code2",
  },

  {
    step: "05",
    title: "Test",
    description:
      "We test functionality, responsiveness, performance, integrations, and browser compatibility before production release.",
    icon: "TestTube",
  },

  {
    step: "06",
    title: "Launch",
    description:
      "We handle production deployment, environment configuration, domain setup, and the final handover required to get your product live.",
    icon: "Rocket",
  },

  {
    step: "07",
    title: "Support",
    description:
      "After launch, we provide ongoing maintenance, bug fixes, performance improvements, and feature enhancements as your needs evolve.",
    icon: "LifeBuoy",
  },
];

/* -------------------------------------------------------------------------- */
/*                                TESTIMONIALS                                */
/* -------------------------------------------------------------------------- */

export const testimonials = [
  {
    name: "Rahul Mehta",
    role: "CEO",
    company: "KNK Partners",
    avatar: "RM",
    rating: 5,
    text:
      "Aptechnosys transformed our manual verification process into a fully automated system. The team understood our complex requirements and delivered beyond expectations. Truly a premium development partner.",
    gradient: "from-blue-500 to-cyan-500",
  },

  {
    name: "Vikram Singh",
    role: "Director",
    company: "PreventFire",
    avatar: "VS",
    rating: 5,
    text:
      "Our website now provides a much stronger online presence and makes it easier for customers to discover our services and get in touch with us.",
    gradient: "from-orange-500 to-red-500",
  },

  {
    name: "Priya Sharma",
    role: "Founder",
    company: "NiceAndEasyFitness",
    avatar: "PS",
    rating: 5,
    text:
      "The mobile experience they built is incredible. The website provides a much smoother experience for visitors and makes it easier for potential customers to enquire.",
    gradient: "from-emerald-500 to-teal-500",
  },
];

/* -------------------------------------------------------------------------- */
/*                                    FAQ                                     */
/* -------------------------------------------------------------------------- */

export const faqs = [
  {
    q: "How long does development typically take?",
    a:
      "Project timelines vary by scope. A marketing website typically takes 2–4 weeks, a custom web application 6–16 weeks, and larger enterprise systems can take several months. After understanding your requirements, we provide a detailed timeline and milestone plan.",
  },

  {
    q: "What technologies do you use?",
    a:
      "Our primary technologies include Next.js, React, Node.js, Express, MongoDB, PostgreSQL, Flutter, React Native, REST APIs, GraphQL, AWS, Vercel, Docker, and other modern tools. We select technologies based on the specific requirements of each project.",
  },

  {
    q: "Do you provide ongoing support after launch?",
    a:
      "Yes. We provide ongoing maintenance and support including bug fixes, performance improvements, security updates, feature enhancements, and technical assistance after launch.",
  },

  {
    q: "Can you redesign our existing website?",
    a:
      "Absolutely. We can review your existing website's design, performance, SEO, UX, content structure, and conversion flow before creating a modern redesigned experience.",
  },

  {
    q: "Do you build custom business software?",
    a:
      "Yes. We build custom business software such as CRMs, ERPs, HR systems, inventory platforms, verification portals, booking systems, dashboards, APIs, and workflow management systems based on your business requirements.",
  },

  {
    q: "What is your pricing model?",
    a:
      "We work with different pricing models depending on project scope. Fixed-price contracts are suitable for clearly defined projects, while evolving projects can be handled through milestone-based or time-and-materials models. After understanding your requirements, we provide a detailed proposal.",
  },
];


/*  TRUST FEATURES   */

export const trustFeatures = [
  {
    icon: "Cpu",
    title: "Built Around Your Needs",
    description:
      "We tailor each solution around your business requirements, workflows, users, and technical constraints.",
  },

  {
    icon: "Zap",
    title: "Efficient Delivery",
    description:
      "Clear milestones, regular communication, and focused development help keep projects moving from planning through launch.",
  },

  {
    icon: "Layers",
    title: "Scalable Architecture",
    description:
      "We design modular systems that can evolve with your business and support future features and integrations.",
  },

  {
    icon: "Search",
    title: "SEO-Friendly Development",
    description:
      "We consider technical SEO, performance, structured metadata, responsive design, and Core Web Vitals during development.",
  },

  {
    icon: "HeadphonesIcon",
    title: "Dedicated Support",
    description:
      "We remain available after launch for maintenance, troubleshooting, improvements, and future development needs.",
  },

  {
    icon: "Star",
    title: "Modern Technology",
    description:
      "We work with modern technologies such as Next.js, React, Node.js, MongoDB, PostgreSQL, Flutter, AWS, Vercel, and Docker.",
  },
];