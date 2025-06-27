import { notFound } from "next/navigation"
import { ProjectDetailClient } from "@/components/project-detail-client"
import { projectsData } from "@/data/projects.data"
import type { Metadata } from "next"

interface ProjectPageProps {
  params: {
    projectId: string
  }
}

export async function generateStaticParams() {
  return projectsData.projects.map((project) => ({
    projectId: project.id,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projectsData.projects.find((p) => p.id === params.projectId)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} - Alex Johnson`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.images.slice(0, 1),
    },
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData.projects.find((p) => p.id === params.projectId)

  if (!project) {
    notFound()
  }

  return <ProjectDetailClient project={project} />
}
