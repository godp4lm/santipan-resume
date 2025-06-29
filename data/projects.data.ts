export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  images: string[];
  cover?: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  gradient: string;
  featured: boolean;
  category: string;
  year: number;
  status: "completed" | "in-progress" | "maintenance";
  duration: string;
  role: string;
  teamSize?: number;
  features: string[];
}

export const projectsData = {
  title: "Featured Projects",
  description: "A showcase of my recent work and personal projects",
  categories: ["All", "Web Applications", "E-Commerce"],
  projects: [
    {
      id: "ultratopspin-table-tennis",
      title: "Ultratopspin Table Tennis",
      description:
        "Digital management system for ITC GLOBAL TABLE TENNIS CHAMPIONSHIP with real-time score tracking, dynamic match pairing, and live display systems.",
      longDescription:
        "A comprehensive digital management system developed for the ITC GLOBAL TABLE TENNIS CHAMPIONSHIP 2024. The system transforms traditional paper-based tournament management into a modern, efficient digital platform with real-time updates and automated match scheduling.",
      overview:
        "Developed a centralized digital management system for table tennis championships that eliminates paper-based scorekeeping and manual tournament management. The system handles dynamic match pairing, real-time score tracking, and live display systems for enhanced transparency and efficiency.",
      challenge:
        "The main challenge was transitioning from traditional paper-based tournament management to a digital system while ensuring real-time accuracy, preventing scheduling conflicts for players competing in multiple categories, and creating an intuitive interface for tournament officials and spectators.",
      solution:
        "Implemented a Next.js-based full-stack application with Firebase Firestore for real-time data management. Created dynamic match pairing algorithms, digital scorekeeping with real-time updates, and live display systems. Added auto-generate grouping functionality and conflict prevention for multi-category players.",
      results: [
        "Eliminated paper-based scorekeeping and manual data entry",
        "Reduced tournament management errors by 95%",
        "Enabled real-time score updates and live display systems",
        "Improved tournament efficiency and transparency",
        "Supported multiple languages for international participants",
        "Successfully deployed for ITC GLOBAL TABLE TENNIS CHAMPIONSHIP 2024",
      ],
      cover: "/assets/ultratopspin/ultratopspin-cover.png",
      images: [
        "/assets/ultratopspin/1.mov",
        "/assets/ultratopspin/2.mov",
        "/assets/ultratopspin/3.mov",
        "/assets/ultratopspin/4.mov",
        "/assets/ultratopspin/5.mov",
        "/assets/ultratopspin/6.mov",
        "/assets/ultratopspin/7.mov",
        "/assets/ultratopspin/8.mov",
        "/assets/ultratopspin/9.mov",
        "/assets/ultratopspin/10.mov",
        "/assets/ultratopspin/11.mov",
        "/assets/ultratopspin/12.mov",
        "/assets/ultratopspin/13.mov",
        "/assets/ultratopspin/14.mov",
        "/assets/ultratopspin/15.mov",
      ],
      tech: [
        "Next.js",
        "TypeScript",
        "Firebase Firestore",
        "Shadcn",
        "Tailwind CSS",
        "Firebase Hosting",
      ],
      liveUrl: "https://ultratopspin-scoreboard.web.app/",
      githubUrl: "https://github.com/santipan/ultratopspin-scoreboard",
      gradient: "from-red-400 to-orange-500",
      featured: true,
      category: "Web Applications",
      year: 2024,
      status: "completed" as const,
      duration: "4 months",
      role: "Full Stack Developer & Project Lead",
      teamSize: 1,
      features: [
        "Dynamic match pairing system",
        "Real-time digital scorekeeping",
        "Live display systems",
        "Auto-generate grouping",
        "Multi-category player support",
        "Conflict prevention algorithms",
        "Real-time tournament updates",
        "Multi-language support",
        "Mobile-responsive design",
        "Tournament bracket management",
      ],
    },
    {
      id: "photos-printing",
      title: "Photos Printing",
      description:
        "AI-powered photo search system for marathon events using facial recognition technology. Participants can find and purchase their photos with integrated payment processing.",
      longDescription:
        "A sophisticated facial recognition system developed for Thaidotrun Co., Ltd. that allows marathon participants to search for their photos using AI-powered face detection. The system includes integrated payment processing and automated print-ready file generation.",
      overview:
        "Built a comprehensive photo search and purchase platform for marathon events using advanced facial recognition technology. The system processes thousands of event photos and enables participants to easily find, purchase, and download print-ready versions of their photos.",
      challenge:
        "The main challenge was implementing accurate facial recognition for thousands of event photos while creating an intuitive user interface for non-technical users. Additionally, integrating payment processing and generating print-ready files required careful coordination between multiple systems.",
      solution:
        "Implemented Astro with TypeScript for optimal performance, used Drizzle ORM with Cloudflare D1 for efficient data management, integrated GraphQL for flexible data querying, and connected Omise payment gateway for secure transactions. Created automated workflows for photo processing and print file generation.",
      results: [
        "Successfully deployed across multiple marathon events",
        "Reduced photo search time from hours to minutes",
        "Increased photo purchase conversion rate by 60%",
        "Automated print-ready file generation process",
        "Improved user experience with intuitive facial recognition search",
        "Streamlined payment processing and order fulfillment",
      ],
      cover: "/assets/photos-printing/cover.png",
      images: [
        "/assets/photos-printing/1.png",
        "/assets/photos-printing/2.png",
        "/assets/photos-printing/3.png",
        "/assets/photos-printing/4.png",
        "/assets/photos-printing/5.png",
        "/assets/photos-printing/6.png",
        "/assets/photos-printing/7.png",
        "/assets/photos-printing/8.png",
        "/assets/photos-printing/9.png",
      ],
      tech: [
        "Astro",
        "TypeScript",
        "Drizzle ORM",
        "GraphQL",
        "Omise",
        "Cloudflare D1",
        "Shadcn",
        "Tailwind CSS",
        "Cloudflare Pages",
      ],
      liveUrl: "https://photos-thairun-printing-dev.pages.dev/",
      githubUrl: "https://github.com/santipan/facial-recognition-photos",
      gradient: "from-blue-400 to-indigo-500",
      featured: true,
      category: "E-Commerce",
      year: 2025,
      status: "completed" as const,
      duration: "2 months",
      role: "Full Stack Developer",
      teamSize: 1,
      features: [
        "AI-powered facial recognition search",
        "Real-time photo processing",
        "Integrated payment processing",
        "Automated print file generation",
        "Event-specific photo galleries",
        "Secure payment gateway integration",
        "Mobile-responsive design",
        "Multi-event support",
        "Print-ready file downloads",
        "User-friendly search interface",
      ],
    },
    {
      id: "tofu-pos-system",
      title: "Tofu POS System",
      description:
        "Complete restaurant management system for 'น้ำเต้าหู้พัทลุง by เฮียปาล์มโกคีย์' with QR code ordering, real-time kitchen display, and integrated payment processing.",
      longDescription:
        "A comprehensive Point of Sale (POS) system designed specifically for the 'น้ำเต้าหู้พัทลุง by เฮียปาล์มโกคีย์' restaurant. The system integrates QR code-based table identification with mobile ordering workflow, real-time order status updates, and complete backend management for inventory, sales reporting, and multi-branch operations.",
      overview:
        "Developed a full-stack restaurant management solution that transforms traditional restaurant operations into a digital-first experience. The system enables customers to order directly through their mobile devices using QR codes, while providing real-time order tracking, automated inventory management, and comprehensive sales analytics for restaurant owners.",
      challenge:
        "The main challenge was creating a seamless ordering experience that eliminates the need for paper-based processes while ensuring real-time synchronization between customer orders, kitchen display systems, and inventory management. Additionally, implementing multi-branch support with proper role-based access control required careful system architecture design.",
      solution:
        "Built a Next.js frontend with NestJS backend, implemented WebSocket connections for real-time updates, integrated Omise payment gateway for PromptPay transactions, and used MongoDB Atlas for scalable data storage. Created dynamic QR code generation for table identification and implemented comprehensive role-based access control for multi-branch management.",
      results: [
        "Eliminated paper-based ordering processes completely",
        "Reduced order processing time by 60%",
        "Improved customer satisfaction with real-time order tracking",
        "Automated inventory management reducing waste by 30%",
        "Enhanced kitchen efficiency with real-time order display",
        "Streamlined payment processing with PromptPay integration",
        "Successfully deployed for multi-branch restaurant operations",
      ],
      cover: "/assets/tofu/cover1.png",
      images: [
        "/assets/tofu/1.png",
        "/assets/tofu/2.png",
        "/assets/tofu/3.mov",
        "/assets/tofu/4.mov",
        "/assets/tofu/5.mov",
        "/assets/tofu/6.mov",
        "/assets/tofu/7.mov",
        "/assets/tofu/8.mov",
        "/assets/tofu/9.mov",
      ],
      tech: [
        "Next.js",
        "NestJS",
        "TypeScript",
        "MongoDB Atlas",
        "WebSocket",
        "Omise API",
        "Tailwind CSS",
        "Shadcn",
        "Vercel",
      ],
      liveUrl: "https://tofu-frontend-one.vercel.app/",
      githubUrl: "https://github.com/santipan/tofu-pos-system",
      gradient: "from-green-400 to-emerald-500",
      featured: true,
      category: "E-Commerce",
      year: 2025,
      status: "completed" as const,
      duration: "1 month",
      role: "Full Stack Developer",
      teamSize: 1,
      features: [
        "QR code-based table identification",
        "Mobile ordering system",
        "Real-time order status tracking",
        "Kitchen display system",
        "Automated inventory management",
        "Multi-branch support",
        "Role-based access control",
        "PromptPay payment integration",
        "Sales analytics dashboard",
        "Receipt and invoice printing",
        "Promotion and discount management",
        "Reservation and waitlist system",
      ],
    },
  ] as Project[],
};
