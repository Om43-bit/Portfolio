import { GraduationCap, Bot, Brain, Heart, MapPin, Code2, Trophy } from "lucide-react"

const timeline = [
  {
    year: "Present",
    title: "Computer Engineering Student",
    description: "3rd year at Abu Dhabi University, Al-Ain Campus, concentrated on AI. Building projects that bridge software, hardware, and machine learning.",
    icon: GraduationCap,
  },
  {
    year: "2026",
    title: "1st Place — Self-Driving Cars Competition",
    description: "Won 1st place in the AIRE475 Self-Driving Cars competition at Abu Dhabi University, supervised by Dr. Sajid Khawaja. Built a fully autonomous RC car using Raspberry Pi 5, YOLOv11, and dual-PID control.",
    icon: Trophy,
  },
  {
    year: "2025",
    title: "Dived into Robotics & ML",
    description: "Built an autonomous lane-keeping RC car, trained a TensorFlow action recognition model, and developed a custom hybrid Warnsdorff's algorithm for the Knight's Tour problem.",
    icon: Bot,
  },
  {
    year: "2023",
    title: "Discovered AI",
    description: "Started exploring machine learning, computer vision, and neural networks through cs50x and university coursework.",
    icon: Brain,
  },
]

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C", "C++", "TypeScript", "JavaScript"],
  },
  {
    title: "AI / ML",
    skills: ["TensorFlow", "OpenCV", "YOLOv11", "Minimax", "Warnsdorff's Heuristic", "Pandas", "Matplotlib"],
  },
  {
    title: "Embedded / IoT",
    skills: ["Arduino", "Raspberry Pi 5", "ESP32", "USART", "I2C", "PWM", "Analog Circuits", "Op-Amps"],
  },
  {
    title: "Web",
    skills: ["Next.js", "React", "Angular", "Tailwind CSS", "shadcn/ui", "Node.js"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Vercel", "Linux", "ffmpeg", "Graphviz", "MATLAB"],
  },
]

const interests = [
  "Artificial Intelligence",
  "Robotics",
  "Embedded Systems",
  "Computer Vision",
  "Web Development",
  "Circuit Design",
]

export default function MePage() {
  return (
    <div className="min-h-screen px-6 pt-28 pb-20">
      <div className="mx-auto max-w-4xl">
        <div className="animate-fade-in-up mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            About Me
          </h1>
          <div className="mt-2 flex items-center gap-2 text-muted-foreground">
            <MapPin size={16} />
            <span>Abu Dhabi University, Al-Ain Campus</span>
          </div>
        </div>

        {/* Bio */}
        <div className="animate-fade-in-up stagger-1 mb-16 rounded-2xl border border-primary/15 bg-card p-8 shadow-lg shadow-primary/5">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15">
              <Code2 size={24} className="text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-card-foreground">
                Omar Saab
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-card-foreground/70">
                {"I'm a 3rd year Computer Engineering student at Abu Dhabi University, Al-Ain Campus, concentrated on Artificial Intelligence. I build things that sit at the intersection of software and hardware — autonomous robots, trained ML models, embedded sensor systems, and web applications. I've competed in and won robotics competitions, independently developed algorithms with no existing reference, and worked across the full stack from breadboard circuits to deployed web apps. I'm eager to keep growing and take on problems that actually matter."}
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="animate-fade-in-up stagger-2 mb-16">
          <h2 className="mb-8 text-2xl font-bold text-foreground">Journey</h2>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`animate-slide-in-left stagger-${Math.min(i + 3, 8)} relative flex gap-6 pb-10 last:pb-0`}
              >
                {i < timeline.length - 1 && (
                  <div className="absolute left-5 top-12 h-full w-px bg-primary/20" />
                )}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                  <item.icon size={20} className="text-primary" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-primary">{item.year}</span>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="animate-fade-in-up stagger-4 mb-16">
          <h2 className="mb-8 text-2xl font-bold text-foreground">Technical Skills</h2>
          <div className="space-y-4">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-primary/15 bg-card px-6 py-5 shadow-lg shadow-primary/5"
              >
                <div className="flex flex-wrap items-center gap-4">
                  <span className="w-32 shrink-0 text-sm font-semibold text-card-foreground">
                    {group.title}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="animate-fade-in-up stagger-6">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Interests</h2>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest) => (
              <span
                key={interest}
                className="flex items-center gap-2 rounded-xl border border-primary/20 bg-card px-4 py-2.5 text-sm font-medium text-card-foreground shadow-md shadow-primary/5 transition-transform duration-200 hover:scale-105 hover:-translate-y-0.5"
              >
                <Heart size={14} className="text-primary" />
                {interest}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}