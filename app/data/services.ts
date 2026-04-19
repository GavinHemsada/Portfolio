export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceItem = {
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  heroImage: string;
  detailImage: string;
  intro: string;
  deliverables: string[];
  process: string[];
  outcomes: string[];
  faqs: ServiceFaq[];
};

export const services: ServiceItem[] = [
  {
    slug: "web-design",
    subtitle: "FOR DIGITAL EXPERIENCES",
    title: "Web Design",
    shortDescription:
      "Modern, user-centered interface design that turns first impressions into trust and action.",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    detailImage:
      "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=1600&auto=format&fit=crop",
    intro:
      "I design clear, conversion-focused website interfaces that balance visual impact with usability. Every layout is built around your brand message, customer journey, and business goals.",
    deliverables: [
      "UI moodboards and visual direction",
      "Wireframes for key page flows",
      "High-fidelity responsive mockups",
      "Design system basics (colors, typography, spacing)",
      "Clickable prototype for stakeholder review",
    ],
    process: [
      "Discovery and brand alignment",
      "User journey mapping and wireframing",
      "Visual exploration and style selection",
      "Prototype validation and refinements",
      "Handoff ready for development",
    ],
    outcomes: [
      "Stronger brand perception",
      "Higher on-page engagement",
      "Improved conversion readiness",
    ],
    faqs: [
      {
        question: "Do you design for both desktop and mobile?",
        answer:
          "Yes. Every design is responsive by default, with dedicated layouts for desktop, tablet, and mobile breakpoints.",
      },
      {
        question: "Can you redesign an existing website?",
        answer:
          "Absolutely. I can audit your current UI and redesign it while preserving your core content and brand identity.",
      },
    ],
  },
  {
    slug: "web-development",
    subtitle: "FOR ONLINE BUSINESSES",
    title: "Web Development",
    shortDescription:
      "Fast, scalable, and maintainable web applications built with modern full-stack practices.",
    heroImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    detailImage:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1600&auto=format&fit=crop",
    intro:
      "I build production-grade websites and platforms using modern frameworks, clean architecture, and performance-first engineering. The result is a reliable product that supports growth.",
    deliverables: [
      "Responsive frontend implementation",
      "Backend architecture and APIs",
      "Authentication and role-based access",
      "CMS or dashboard integrations",
      "Deployment-ready codebase",
    ],
    process: [
      "Technical planning and scope definition",
      "Component and API architecture",
      "Incremental feature development",
      "Testing and quality assurance",
      "Launch and post-launch support",
    ],
    outcomes: [
      "Reliable product foundation",
      "Faster feature delivery over time",
      "Lower maintenance friction",
    ],
    faqs: [
      {
        question: "What stack do you usually use?",
        answer:
          "I commonly work with Next.js, TypeScript, Node.js, Spring Boot, and ASP.NET, based on project requirements.",
      },
      {
        question: "Do you handle hosting and deployment?",
        answer:
          "Yes. I can set up deployment pipelines and production environments on providers like Vercel, Netlify, or cloud VPS platforms.",
      },
    ],
  },
  {
    slug: "api-development",
    subtitle: "FOR SCALABLE INTEGRATIONS",
    title: "API Development",
    shortDescription:
      "Secure, well-documented APIs that connect products, services, and third-party systems reliably.",
    heroImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
    detailImage:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1600&auto=format&fit=crop",
    intro:
      "From REST endpoints to microservice communication, I design API layers that are secure, versionable, and easy for teams to integrate with confidence.",
    deliverables: [
      "REST API architecture",
      "Authentication and authorization flows",
      "Validation and error handling standards",
      "OpenAPI/Swagger documentation",
      "Monitoring and rate-limiting setup",
    ],
    process: [
      "Domain model and endpoint design",
      "Security planning (tokens, scopes, roles)",
      "Implementation with validation layers",
      "Performance and load testing",
      "Documentation and integration support",
    ],
    outcomes: [
      "Cleaner product integrations",
      "Improved system reliability",
      "Reduced backend coupling",
    ],
    faqs: [
      {
        question: "Can you improve an existing API?",
        answer:
          "Yes. I can refactor slow or inconsistent APIs, improve response schemas, and add versioning without breaking existing clients.",
      },
      {
        question: "Do you build internal and public APIs?",
        answer:
          "Yes. I support both internal service communication and public developer-facing APIs with proper security controls.",
      },
    ],
  },
  {
    slug: "website-performance-optimization",
    subtitle: "FOR HIGH SPEED DELIVERY",
    title: "Website Performance Optimization",
    shortDescription:
      "Performance tuning that improves Core Web Vitals, SEO, and real user experience.",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    detailImage:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop",
    intro:
      "I diagnose and optimize bottlenecks across frontend and backend layers to make your site faster, smoother, and more conversion-friendly.",
    deliverables: [
      "Performance audit with action plan",
      "Asset optimization (images, fonts, scripts)",
      "Code splitting and lazy loading strategy",
      "Caching and CDN recommendations",
      "Core Web Vitals monitoring setup",
    ],
    process: [
      "Benchmarking and baseline capture",
      "Critical rendering path optimization",
      "JavaScript and network payload reduction",
      "Server response and caching improvements",
      "Post-optimization validation",
    ],
    outcomes: [
      "Faster page load times",
      "Lower bounce rates",
      "Higher SEO performance",
    ],
    faqs: [
      {
        question: "Will optimization affect my current design?",
        answer:
          "No major visual changes are required. Most performance gains come from technical optimization behind the scenes.",
      },
      {
        question: "How do you measure improvements?",
        answer:
          "I use Lighthouse, Core Web Vitals, and real-world metrics to compare before and after performance.",
      },
    ],
  },
  {
    slug: "full-stack-developer",
    subtitle: "FOR END-TO-END SOLUTIONS",
    title: "Full Stack Developer",
    shortDescription:
      "One technical partner for frontend, backend, databases, and deployment workflows.",
    heroImage:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop",
    detailImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
    intro:
      "I handle complete web product delivery from user interface to backend systems. This gives you aligned architecture decisions and faster progress across the whole stack.",
    deliverables: [
      "Frontend and backend implementation",
      "Database schema design",
      "Authentication and business logic",
      "Admin/dashboard tooling",
      "Production deployment and handover",
    ],
    process: [
      "Business requirement breakdown",
      "System architecture mapping",
      "Feature-by-feature full-stack delivery",
      "Integration and QA cycles",
      "Launch, monitoring, and support",
    ],
    outcomes: [
      "Faster product iteration",
      "Consistent code quality across layers",
      "Streamlined communication and ownership",
    ],
    faqs: [
      {
        question: "Is full-stack work suitable for startups?",
        answer:
          "Yes. It is ideal when speed, flexibility, and budget efficiency are important during early product stages.",
      },
      {
        question: "Can this scale later with a larger team?",
        answer:
          "Yes. I structure projects to be maintainable and easy for future developers to extend.",
      },
    ],
  },
  {
    slug: "software-developer",
    subtitle: "FOR CUSTOM APPLICATIONS",
    title: "Software Developer",
    shortDescription:
      "Custom software solutions tailored to unique workflows, operations, and business logic.",
    heroImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
    detailImage:
      "https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?q=80&w=1600&auto=format&fit=crop",
    intro:
      "Beyond websites, I build custom software systems that solve operational bottlenecks, automate manual tasks, and improve team productivity.",
    deliverables: [
      "Requirement analysis and technical specification",
      "Modular software architecture",
      "Workflow automation and integrations",
      "Reporting and admin tools",
      "Documentation and maintenance plan",
    ],
    process: [
      "Business workflow discovery",
      "MVP scope and architecture planning",
      "Core module development",
      "Validation with real user feedback",
      "Scale-up and long-term support",
    ],
    outcomes: [
      "Reduced manual workload",
      "Higher operational efficiency",
      "Software tailored to your exact process",
    ],
    faqs: [
      {
        question: "Can you build internal business tools?",
        answer:
          "Yes. I build custom dashboards, management systems, and internal platforms for day-to-day team operations.",
      },
      {
        question: "Do you provide ongoing maintenance?",
        answer:
          "Yes. I offer updates, bug fixes, and feature enhancements after launch based on your growth needs.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((service) => service.slug === slug);
}
