export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  overview: string
  challenge: string
  solution: string
  results: string[]
  images: string[]
  tech: string[]
  liveUrl?: string
  githubUrl?: string
  gradient: string
  featured: boolean
  category: string
  year: number
  status: "completed" | "in-progress" | "maintenance"
  duration: string
  role: string
  teamSize?: number
  features: string[]
}

export const projectsData = {
  title: "Featured Projects",
  description: "A showcase of my recent work and personal projects",
  categories: ["All", "Web Applications", "E-Commerce", "SaaS", "Mobile Apps", "Open Source"],
  projects: [
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.",
      longDescription:
        "A comprehensive e-commerce platform built from scratch with modern technologies. Includes advanced features like real-time inventory management, automated email marketing, analytics dashboard, and multi-vendor support.",
      overview:
        "Built a complete e-commerce ecosystem from the ground up, handling everything from user authentication to payment processing. The platform serves over 10,000 active users and processes $500K+ in monthly transactions.",
      challenge:
        "The main challenge was creating a scalable architecture that could handle high traffic loads while maintaining fast response times. Additionally, integrating multiple payment gateways and ensuring PCI compliance was complex.",
      solution:
        "Implemented a microservices architecture using Node.js and Docker, with Redis for caching and PostgreSQL for data persistence. Used CDN for static assets and implemented comprehensive monitoring with real-time alerts.",
      results: [
        "Achieved 99.9% uptime with average response time under 200ms",
        "Processed over $2M in transactions in the first year",
        "Reduced cart abandonment rate by 35% through UX optimizations",
        "Implemented automated inventory management saving 20 hours/week",
      ],
      images: [
        "/placeholder.svg?height=600&width=1000&text=Homepage+Hero",
        "/placeholder.svg?height=600&width=1000&text=Product+Catalog",
        "/placeholder.svg?height=600&width=1000&text=Shopping+Cart",
        "/placeholder.svg?height=600&width=1000&text=Admin+Dashboard",
        "/placeholder.svg?height=600&width=1000&text=Analytics+Panel",
      ],
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS", "Docker", "AWS", "Redis"],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/alexjohnson/ecommerce-platform",
      gradient: "from-cyan-400 to-blue-500",
      featured: true,
      category: "E-Commerce",
      year: 2024,
      status: "completed" as const,
      duration: "6 months",
      role: "Full Stack Developer & Project Lead",
      teamSize: 4,
      features: [
        "Multi-vendor marketplace",
        "Real-time inventory tracking",
        "Advanced search & filtering",
        "Automated email marketing",
        "Analytics dashboard",
        "Mobile-responsive design",
        "Payment gateway integration",
        "Order management system",
      ],
    },
    {
      id: "task-management-app",
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features built with Next.js and Socket.io.",
      longDescription:
        "A powerful project management application with real-time collaboration, advanced filtering, time tracking, and comprehensive reporting features.",
      overview:
        "Developed a comprehensive project management solution that enables teams to collaborate effectively in real-time. The application supports complex project hierarchies, time tracking, and advanced reporting capabilities.",
      challenge:
        "Creating a real-time collaborative environment where multiple users can work simultaneously without conflicts. Managing complex state synchronization across different clients was particularly challenging.",
      solution:
        "Implemented operational transformation algorithms for conflict resolution and used Socket.io for real-time communication. Built a robust state management system with optimistic updates and rollback capabilities.",
      results: [
        "Improved team productivity by 40% based on user surveys",
        "Reduced project delivery time by 25% on average",
        "Achieved 99.8% real-time sync accuracy",
        "Onboarded 500+ teams in the first 6 months",
      ],
      images: [
        "/placeholder.svg?height=600&width=1000&text=Dashboard+Overview",
        "/placeholder.svg?height=600&width=1000&text=Kanban+Board",
        "/placeholder.svg?height=600&width=1000&text=Time+Tracking",
        "/placeholder.svg?height=600&width=1000&text=Team+Collaboration",
        "/placeholder.svg?height=600&width=1000&text=Reports+Analytics",
      ],
      tech: ["Next.js", "Socket.io", "PostgreSQL", "Prisma", "TypeScript", "Tailwind CSS", "Vercel"],
      liveUrl: "https://taskapp-demo.com",
      githubUrl: "https://github.com/alexjohnson/task-management",
      gradient: "from-green-400 to-emerald-500",
      featured: true,
      category: "SaaS",
      year: 2024,
      status: "completed" as const,
      duration: "8 months",
      role: "Lead Developer",
      teamSize: 3,
      features: [
        "Real-time collaboration",
        "Drag & drop interface",
        "Time tracking",
        "Advanced reporting",
        "Team management",
        "Custom workflows",
        "File attachments",
        "Mobile app support",
      ],
    },
    {
      id: "ai-analytics-dashboard",
      title: "AI-Powered Analytics Dashboard",
      description:
        "Advanced analytics dashboard with machine learning insights, real-time data visualization, and predictive analytics for business intelligence.",
      longDescription:
        "Enterprise-grade analytics platform with AI-powered insights, custom dashboard builder, and advanced data visualization capabilities.",
      overview:
        "Created an intelligent analytics platform that processes millions of data points to provide actionable business insights. The system uses machine learning to identify trends and predict future outcomes.",
      challenge:
        "Processing large volumes of data in real-time while providing meaningful insights. The complexity of implementing machine learning models that could adapt to different business contexts was significant.",
      solution:
        "Built a scalable data pipeline using Apache Kafka and implemented ML models with TensorFlow. Used React with D3.js for interactive visualizations and implemented caching strategies for optimal performance.",
      results: [
        "Processed 10M+ data points daily with sub-second query times",
        "Improved decision-making speed by 60% for client companies",
        "Achieved 85% accuracy in predictive analytics models",
        "Reduced data analysis time from hours to minutes",
      ],
      images: [
        "/placeholder.svg?height=600&width=1000&text=Main+Dashboard",
        "/placeholder.svg?height=600&width=1000&text=Data+Visualization",
        "/placeholder.svg?height=600&width=1000&text=ML+Insights",
        "/placeholder.svg?height=600&width=1000&text=Custom+Reports",
        "/placeholder.svg?height=600&width=1000&text=Predictive+Analytics",
      ],
      tech: ["React", "Python", "TensorFlow", "D3.js", "AWS", "Apache Kafka", "PostgreSQL", "Docker"],
      liveUrl: "https://analytics-demo.com",
      githubUrl: "https://github.com/alexjohnson/ai-analytics",
      gradient: "from-purple-400 to-pink-500",
      featured: true,
      category: "SaaS",
      year: 2023,
      status: "completed" as const,
      duration: "10 months",
      role: "Full Stack Developer & ML Engineer",
      teamSize: 5,
      features: [
        "Real-time data processing",
        "Machine learning insights",
        "Custom dashboard builder",
        "Predictive analytics",
        "Interactive visualizations",
        "Automated reporting",
        "API integrations",
        "Multi-tenant architecture",
      ],
    },
    {
      id: "social-media-app",
      title: "Social Media Platform",
      description:
        "Modern social media application with real-time messaging, story features, and advanced privacy controls.",
      overview:
        "Developed a comprehensive social media platform with focus on user privacy and real-time interactions. The app includes advanced features like disappearing messages, story sharing, and AI-powered content moderation.",
      challenge:
        "Ensuring user privacy while maintaining engaging social features. Implementing real-time messaging at scale and content moderation were key technical challenges.",
      solution:
        "Used end-to-end encryption for messaging, implemented WebSocket connections for real-time features, and integrated AI-based content moderation APIs.",
      results: [
        "Achieved 50K+ active users within 3 months",
        "Maintained 99.5% message delivery rate",
        "Implemented zero-knowledge privacy architecture",
        "Reduced inappropriate content by 95% through AI moderation",
      ],
      images: [
        "/placeholder.svg?height=600&width=1000&text=Social+Feed",
        "/placeholder.svg?height=600&width=1000&text=Messaging+Interface",
        "/placeholder.svg?height=600&width=1000&text=Stories+Feature",
        "/placeholder.svg?height=600&width=1000&text=Profile+Management",
        "/placeholder.svg?height=600&width=1000&text=Privacy+Settings",
      ],
      tech: ["React Native", "Node.js", "MongoDB", "Socket.io", "AWS", "Firebase"],
      liveUrl: "https://social-demo.com",
      githubUrl: "https://github.com/alexjohnson/social-platform",
      gradient: "from-pink-400 to-rose-500",
      featured: false,
      category: "Mobile Apps",
      year: 2023,
      status: "completed" as const,
      duration: "7 months",
      role: "Mobile App Developer",
      teamSize: 3,
      features: [
        "Real-time messaging",
        "Story sharing",
        "Privacy controls",
        "Content moderation",
        "Push notifications",
        "Media sharing",
        "User profiles",
        "Social interactions",
      ],
    },
    {
      id: "crypto-trading-bot",
      title: "Crypto Trading Bot",
      description: "Automated cryptocurrency trading bot with advanced algorithms and risk management features.",
      overview:
        "Built an intelligent trading bot that uses machine learning algorithms to analyze market trends and execute trades automatically. The system includes comprehensive risk management and portfolio optimization features.",
      challenge:
        "Creating reliable trading algorithms that could adapt to volatile cryptocurrency markets while managing risk effectively.",
      solution:
        "Implemented multiple trading strategies with machine learning models for market prediction. Used real-time data feeds and implemented circuit breakers for risk management.",
      results: [
        "Achieved 23% average annual return",
        "Processed 10K+ trades with 99.9% execution accuracy",
        "Implemented advanced risk management reducing max drawdown to 8%",
        "Supported 15+ cryptocurrency exchanges",
      ],
      images: [
        "/placeholder.svg?height=600&width=1000&text=Trading+Dashboard",
        "/placeholder.svg?height=600&width=1000&text=Portfolio+Overview",
        "/placeholder.svg?height=600&width=1000&text=Market+Analysis",
        "/placeholder.svg?height=600&width=1000&text=Risk+Management",
        "/placeholder.svg?height=600&width=1000&text=Performance+Metrics",
      ],
      tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "TensorFlow", "WebSocket"],
      githubUrl: "https://github.com/alexjohnson/crypto-bot",
      gradient: "from-yellow-400 to-orange-500",
      featured: false,
      category: "Open Source",
      year: 2023,
      status: "maintenance" as const,
      duration: "5 months",
      role: "Quantitative Developer",
      features: [
        "Automated trading",
        "Risk management",
        "Portfolio optimization",
        "Market analysis",
        "Multi-exchange support",
        "Real-time monitoring",
        "Backtesting engine",
        "Performance analytics",
      ],
    },
    {
      id: "restaurant-pos",
      title: "Restaurant POS System",
      description: "Complete point-of-sale system for restaurants with inventory management and analytics.",
      overview:
        "Developed a comprehensive POS system specifically designed for restaurants, including order management, inventory tracking, staff management, and detailed analytics.",
      challenge:
        "Creating a system that could handle high-volume transactions during peak hours while maintaining accuracy and providing real-time inventory updates.",
      solution:
        "Built with offline-first architecture using PWA technology, implemented real-time synchronization, and created an intuitive interface for restaurant staff.",
      results: [
        "Deployed in 25+ restaurants with 99.8% uptime",
        "Reduced order processing time by 40%",
        "Improved inventory accuracy to 98%",
        "Increased average order value by 15% through upselling features",
      ],
      images: [
        "/placeholder.svg?height=600&width=1000&text=POS+Interface",
        "/placeholder.svg?height=600&width=1000&text=Order+Management",
        "/placeholder.svg?height=600&width=1000&text=Inventory+Tracking",
        "/placeholder.svg?height=600&width=1000&text=Sales+Analytics",
        "/placeholder.svg?height=600&width=1000&text=Staff+Management",
      ],
      tech: ["Vue.js", "Node.js", "PostgreSQL", "Stripe", "PWA", "Socket.io"],
      liveUrl: "https://restaurant-pos-demo.com",
      gradient: "from-indigo-400 to-purple-500",
      featured: false,
      category: "Web Applications",
      year: 2022,
      status: "completed" as const,
      duration: "4 months",
      role: "Full Stack Developer",
      teamSize: 2,
      features: [
        "Order processing",
        "Inventory management",
        "Payment processing",
        "Staff management",
        "Sales analytics",
        "Offline capability",
        "Receipt printing",
        "Multi-location support",
      ],
    },
    {
      id: "fitness-tracker",
      title: "Fitness Tracking App",
      description: "Mobile fitness application with workout planning, progress tracking, and social features.",
      overview:
        "Created a comprehensive fitness tracking application that helps users plan workouts, track progress, and connect with a community of fitness enthusiasts.",
      challenge:
        "Integrating with various fitness devices and creating engaging social features while maintaining user privacy and data security.",
      solution:
        "Implemented OAuth integrations with major fitness platforms, used React Native for cross-platform development, and built a robust backend with real-time capabilities.",
      results: [
        "Reached 100K+ downloads in first year",
        "Achieved 4.8/5 app store rating",
        "Users logged 2M+ workouts",
        "Built community of 25K+ active users",
      ],
      images: [
        "/placeholder.svg?height=600&width=1000&text=Workout+Tracking",
        "/placeholder.svg?height=600&width=1000&text=Progress+Dashboard",
        "/placeholder.svg?height=600&width=1000&text=Social+Features",
        "/placeholder.svg?height=600&width=1000&text=Workout+Plans",
        "/placeholder.svg?height=600&width=1000&text=Achievement+System",
      ],
      tech: ["React Native", "Firebase", "Node.js", "MongoDB", "OAuth", "Push Notifications"],
      liveUrl: "https://fitness-demo.com",
      gradient: "from-green-400 to-teal-500",
      featured: false,
      category: "Mobile Apps",
      year: 2022,
      status: "completed" as const,
      duration: "6 months",
      role: "Mobile App Developer",
      teamSize: 3,
      features: [
        "Workout tracking",
        "Progress monitoring",
        "Social community",
        "Custom workout plans",
        "Achievement system",
        "Device integration",
        "Nutrition tracking",
        "Goal setting",
      ],
    },
    {
      id: "blog-cms",
      title: "Headless CMS Blog",
      description: "Modern headless CMS with rich text editor, SEO optimization, and multi-author support.",
      overview:
        "Built a flexible headless CMS that allows content creators to manage blogs, articles, and multimedia content with advanced SEO features and multi-author collaboration.",
      challenge:
        "Creating a user-friendly content management interface while maintaining the flexibility of a headless architecture and ensuring optimal SEO performance.",
      solution:
        "Used Next.js for the frontend with Strapi as the headless CMS, implemented advanced caching strategies, and built custom SEO optimization tools.",
      results: [
        "Improved page load speeds by 60%",
        "Increased organic traffic by 150% for client sites",
        "Reduced content publishing time by 70%",
        "Supported 50+ content creators across multiple sites",
      ],
      images: [
        "/placeholder.svg?height=600&width=1000&text=Content+Editor",
        "/placeholder.svg?height=600&width=1000&text=Blog+Frontend",
        "/placeholder.svg?height=600&width=1000&text=SEO+Dashboard",
        "/placeholder.svg?height=600&width=1000&text=Media+Management",
        "/placeholder.svg?height=600&width=1000&text=Analytics+Panel",
      ],
      tech: ["Next.js", "Strapi", "PostgreSQL", "Tailwind CSS", "Vercel", "Cloudinary"],
      liveUrl: "https://blog-cms-demo.com",
      githubUrl: "https://github.com/alexjohnson/headless-cms",
      gradient: "from-blue-400 to-indigo-500",
      featured: false,
      category: "Web Applications",
      year: 2022,
      status: "completed" as const,
      duration: "3 months",
      role: "Full Stack Developer",
      features: [
        "Rich text editor",
        "SEO optimization",
        "Multi-author support",
        "Media management",
        "Content scheduling",
        "Analytics integration",
        "Custom themes",
        "API-first architecture",
      ],
    },
  ] as Project[],
}
