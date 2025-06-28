import { notFound } from "next/navigation";
import { ProjectDetailClient } from "@/components/project-detail-client";
import { projectsData } from "@/data/projects.data";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

export async function generateStaticParams() {
  return projectsData.projects.map((project) => ({
    projectId: project.id,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = projectsData.projects.find((p) => p.id === params.projectId);

  if (!project) {
    return {
      title: "Project Not Found | Santipan Sunee",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} | Project Showcase`,
    description: `${project.description} - ${project.overview}`,
    keywords: [
      ...project.tech,
      "Project Showcase",
      "Portfolio",
      "Web Development",
      "Full Stack Development",
      "React",
      "Next.js",
      "TypeScript",
      "UI/UX Design",
    ],
    openGraph: {
      title: `${project.title} | Project Showcase`,
      description: `${project.description} - ${project.overview}`,
      type: "article",
      url: `https://santipan.dev/projects/${project.id}`,
      images: [
        {
          url: project.images[0] || "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${project.title} - Project Screenshot`,
        },
      ],
      siteName: "Santipan Sunee Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Project Showcase`,
      description: `${project.description} - ${project.overview}`,
      images: [project.images[0] || "/og-image.png"],
    },
    alternates: {
      canonical: `https://santipan.dev/projects/${project.id}`,
    },
    other: {
      "article:published_time": project.year,
      "article:section": "Projects",
      "article:tag": project.tech,
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData.projects.find((p) => p.id === params.projectId);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <ProjectDetailClient project={project} />
    </div>
  );
}
