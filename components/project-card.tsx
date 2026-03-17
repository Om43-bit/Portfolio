import { ArrowRight, ImageIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export interface ProjectData {
  id: number
  title: string
  description: string
  category: string
  tags: string[]
  badges: string[]
  year: string
  link: string
  image?: string
}

export function ProjectCard({ project, index }: { project: ProjectData; index: number }) {
  return (
    <Link
      href={project.link}
      className={`animate-fade-in-up stagger-${Math.min(index + 1, 8)} group flex flex-col overflow-hidden rounded-2xl border border-primary/15 bg-card shadow-xl shadow-primary/5 transition-transform duration-200 hover:-translate-y-2 cursor-pointer`}
    >
      {/* Image area */}
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-card to-primary/10">

        {/* Category + year badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-2">
          <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground">
            {project.category}
          </span>
          <span className="rounded-full bg-card/80 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-primary">
            {project.year}
          </span>
        </div>

        {/* Image or placeholder */}
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <ImageIcon size={48} className="text-primary/30" />
          </div>
        )}

        {/* Bottom badges */}
        <div className="absolute bottom-3 left-3 right-3 z-10 flex flex-wrap gap-2">
          {project.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full bg-card/70 backdrop-blur-md px-2.5 py-1 text-xs font-medium text-card-foreground"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content area */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-primary">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-card-foreground/70">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-primary/20 bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="rounded-md border border-primary/10 bg-card px-2 py-0.5 text-xs font-medium text-card-foreground/50">
              {`+${project.tags.length - 4}`}
            </span>
          )}
        </div>

        <div className="mt-auto pt-4">
          <div className="flex items-center justify-end">
            <span className="flex items-center gap-1.5 text-sm font-medium text-card-foreground/60 transition-colors duration-200 group-hover:text-primary">
              Details
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>

      <div className="h-1 w-full bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
    </Link>
  )
}