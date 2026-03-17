import { Code2, Layout, Server, Layers, Cpu, Zap, Globe, Bot } from "lucide-react"
import Link from "next/link"

// These are the regular standalone cards Frontend, Frameworks, and Backend
// have been removed from here since they'll live inside the combined web card below
const skillGroups = [
  {
    title: "Languages",
    slug: "languages",
    icon: Code2,
    skills: ["C", "C++", "Java", "Python"],
  },
  {
    title: "Robotics",
    slug: "robotics",
    icon: Bot,
    skills: ["Arduino", "Raspberry Pi", "ESP32"],
  },
   {
    title: "Circuits",
    slug: "circuits",
    icon: Cpu,
    skills: ["Analog Circuits", "Digital Circuits"],
  },
]

// This is the data for the three small cards that live inside the combined web card.
// It's a separate array because these cards behave differently,they're nested
// inside a parent card rather than sitting on the main grid like the others.
const webGroups = [
  {
    title: "Frontend",
    slug: "frontend",
    icon: Layout,
    skills: ["HTML", "CSS"],
  },
  {
    title: "Frameworks",
    slug: "frameworks",
    icon: Layers,
    skills: ["Angular", "React"],
  },
  {
    title: "Backend",
    slug: "backend",
    icon: Server,
    skills: ["JavaScript", "TypeScript"],
  },
]

export function SkillsSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="animate-fade-in-up mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {"What I'm Good At"}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {"Technologies and skills I work with. Click a group to explore."}
          </p>
        </div>

        {/* Main grid — same as before, now only has Languages and Robotics */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className={`animate-fade-in-up stagger-${Math.min(i + 1, 8)}`}
            >
              <Link
                href={`/skills/${group.slug}`}
                prefetch
                className="group relative block overflow-hidden rounded-2xl border border-primary/15 bg-card p-6 shadow-lg shadow-primary/5 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30"
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 transition-transform duration-200 group-hover:rotate-6">
                      <group.icon size={20} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-card-foreground">
                      {group.title}
                    </h3>
                    <Zap size={14} className="ml-auto text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={`${group.title}-${skill}`}
                        className="rounded-lg border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}

          {/* 
            This is the combined Web Development card.
            It spans all 3 columns on large screens using lg:col-span-3,
            so it stretches the full width below the two cards above it.
            sm:col-span-2 makes it span both columns on medium screens too.
          */}
          <div className="animate-fade-in-up stagger-3 sm:col-span-2 lg:col-span-3">

            {/* Outer container — styled like a card but not a Link itself */}
            <div className="rounded-2xl border border-primary/15 bg-card p-6 shadow-lg shadow-primary/5">

              {/* Header of the combined card */}
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15">
                  {/* Globe icon represents web development as a whole */}
                  <Globe size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  Web Development
                </h3>
              </div>

              {/* 
                Inner grid — this creates the three small clickable cards inside.
                grid-cols-3 always shows 3 columns since the parent is already wide.
              */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {webGroups.map((group) => (
                  // Each small card is a Link, so clicking it navigates to its page
                  <Link
                    key={group.title}
                    href={`/skills/${group.slug}`}
                    prefetch
                    className="group relative overflow-hidden rounded-xl border border-primary/15 bg-background p-4 transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative">
                      <div className="mb-3 flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 transition-transform duration-200 group-hover:rotate-6">
                          <group.icon size={16} className="text-primary" />
                        </div>
                        <h4 className="text-sm font-semibold text-card-foreground">
                          {group.title}
                        </h4>
                        <Zap size={12} className="ml-auto text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-md border border-primary/20 bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}