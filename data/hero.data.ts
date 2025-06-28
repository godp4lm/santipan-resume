export const heroData = {
  name: "Hi, I'm Santipan Sunee ",
  title: "Full Stack Developer",
  avatar: {
    initials: "SS",
    gradient: "from-cyan-400 to-blue-500",
  },
  description:
    "Blending creativity with code to craft digital products people love to use.",
  buttons: [
    {
      text: "Download Resume",
      type: "primary" as const,
      icon: "Download",
      href: "/resume.pdf",
    },
    {
      text: "View Projects",
      type: "secondary" as const,
      icon: "ExternalLink",
      href: "#projects",
    },
  ],
  socialLinks: [
    {
      platform: "GitHub",
      icon: "Github",
      href: "https://github.com/alexjohnson",
      color: "hover:text-gray-300",
    },
    {
      platform: "LinkedIn",
      icon: "Linkedin",
      href: "https://linkedin.com/in/alexjohnson",
      color: "hover:text-blue-400",
    },
    {
      platform: "Email",
      icon: "Mail",
      href: "mailto:alex.johnson@email.com",
      color: "hover:text-cyan-400",
    },
  ],
};
