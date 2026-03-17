import { Bot, Cpu, Sparkles, GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-10 left-10 h-48 w-48 rounded-full bg-primary/8 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="animate-fade-in-up mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          <Sparkles size={16} />
          Computer Engineering Student
        </div>

        <div className="animate-fade-in-up stagger-1 mb-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <GraduationCap size={16} />
          <span>{"3rd Year \u00B7 Abu Dhabi University, Al-Ain Campus"}</span>
        </div>

        <h1 className="animate-fade-in-up stagger-2 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
          {"I build things that "}
          <span className="text-primary">think,</span>
          {" "}
          <span className="text-primary">move,</span>
          {" and "}
          <span className="text-primary">solve</span>
          {" problems"}
        </h1>

        <p className="animate-fade-in-up stagger-3 mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          {"I'm a Computer Engineering student concentrated on AI. I've explored the world of robotics and I'm eager to continue growing, learning, and building impactful solutions."}
        </p>

        <div className="animate-fade-in-up stagger-4 mt-8 flex flex-wrap items-center justify-center gap-4">
          {[
            { icon: Bot, label: "Robotics" },
            { icon: Cpu, label: "AI / ML" },
            { icon: Sparkles, label: "Innovation" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 rounded-xl border border-primary/20 bg-card px-5 py-3 text-sm font-medium text-card-foreground shadow-lg shadow-primary/5 transition-transform duration-200 hover:scale-105 hover:-translate-y-1"
            >
              <item.icon size={18} className="text-primary" />
              {item.label}
            </div>
          ))}
        </div>

        <div className="animate-fade-in-up stagger-5 mt-8">
          <Link
            href="/contact"
            prefetch
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
          >
            Hire Me
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
