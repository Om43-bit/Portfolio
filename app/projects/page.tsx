"use client"

import { useState } from "react"
import { ProjectCard, type ProjectData } from "@/components/project-card"

const categories = ["All", "Coding", "Circuits", "Robotics"]

const projects: ProjectData[] = [
  {
    id: 1,
    title: "Autonomous Lane-Keeping RC Car",
    description: "Self-driving RC car on Raspberry Pi 5 with real-time YOLOv11 obstacle avoidance, dual-PID control, and lane detection.",
    category: "Robotics",
    tags: ["Python", "OpenCV", "YOLOv11n", "Raspberry Pi 5", "PID Control"],
    badges: ["15+ FPS", "YOLOv11 + Kalman", "Raspberry Pi 5"],
    year: "2026",
    link: "/projects/autonomous-lane-keeping",
    image: '/images/selfDriving.png'
  },
  {
    id: 2,
    title: "Knight's Tour Solver",
    description: "Knight's Tour app implementing a custom hybrid of Warnsdorff's Rule — a two-step variant developed independently, combined using a weighted formula to solve all 64 squares from any starting position.",
    category: "Coding",
    tags: ["Python", "Algorithm Design", "Warnsdorff's Rule"],
    badges: ["All 64 Squares", "Custom Algorithm"],
    year: "2025",
    link: "/projects/knights-tour",
  },
  {
    id: 3,
    title: "ML Model — Action Recognition",
    description: "Group project training a TensorFlow model for video-based action recognition, with dataset preparation using ffmpeg and data analysis using Pandas and Matplotlib.",
    category: "Coding",
    tags: ["Python", "TensorFlow", "ffmpeg", "Pandas", "Matplotlib"],
    badges: ["Group Project", "Cloud Training"],
    year: "2025",
    link: "/projects/ml-action-recognition",
  },
  {
    id: 4,
    title: "Minimax Tic-Tac-Toe Bot",
    description: "Unbeatable Tic-Tac-Toe bot using the Minimax algorithm, where the bot simulates all possible future moves to always play optimally.",
    category: "Coding",
    tags: ["Python", "Minimax", "Game AI"],
    badges: ["Unbeatable Bot", "Minimax"],
    year: "2025",
    link: "/projects/tictactoe-bot",
  },
  {
    id: 5,
    title: "JavaFX Desktop App",
    description: "Group-built desktop application using JavaFX, integrating OOP concepts, custom UI components, and full CRUD functionality.",
    category: "Coding",
    tags: ["Java", "JavaFX", "OOP"],
    badges: ["Group Project", "JavaFX UI"],
    year: "2024",
    link: "/projects/javafx-app",
  },
  {
    id: 6,
    title: "Java Banking System",
    description: "Terminal-based banking system managing accounts and transactions, built with Java using OOP principles and exception handling.",
    category: "Coding",
    tags: ["Java", "OOP", "Exception Handling"],
    badges: ["Terminal App"],
    year: "2024",
    link: "/projects/banking-system",
  },
  {
    id: 7,
    title: "Java Library System",
    description: "Terminal-based library system with book searching, borrowing, and returning functionality. First full program built using loops and exception handling.",
    category: "Coding",
    tags: ["Java", "OOP", "Exception Handling"],
    badges: ["Terminal App", "First Full Program"],
    year: "2023",
    link: "/projects/library-system",
  },
  {
    id: 8,
    title: "C Image Processing",
    description: "Image processing algorithms written in C, including greyscaling by averaging RGB values and Sobel edge detection for X and Y gradients.",
    category: "Coding",
    tags: ["C", "Image Processing", "Sobel Filter", "Algorithms"],
    badges: ["Greyscale", "Edge Detection"],
    year: "2024",
    link: "/projects/image-processing",
  },
  {
    id: 9,
    title: "Tideman Voting System",
    description: "Implementation of the Tideman (ranked pairs) voting algorithm in C, determining election winners by ranking candidate pairs and locking edges without creating cycles in the preference graph.",
    category: "Coding",
    tags: ["C", "Algorithms", "Graph Theory", "cs50x"],
    badges: ["Ranked Pairs", "Cycle Detection"],
    year: "2024",
    link: "/projects/tideman",
  },
  {
    id: 10,
    title: "Arduino Sensor Systems",
    description: "A collection of hardware projects: USART and I2C communication between two Arduino Unos, temperature-based fan control, and a breadboard heartbeat sensor using infrared LEDs and op-amps.",
    category: "Circuits",
    tags: ["C++", "Arduino", "USART", "I2C", "Op-Amps"],
    badges: ["USART + I2C", "Analog Circuits"],
    year: "2025",
    link: "/projects/arduino-sensor-systems",
  },
  {
    id: 11,
    title: "Portfolio Website",
    description: "This portfolio website, built with Next.js and TypeScript, featuring a custom color scheme, CSS animations, dark/light mode, and responsive design.",
    category: "Coding",
    tags: ["TypeScript", "Next.js", "Tailwind CSS"],
    badges: ["Responsive", "Animated"],
    year: "2026",
    link: "/projects/portfolio-website",
  },
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen px-6 pt-28 pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="animate-fade-in-up mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Projects
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            A collection of things I have built and explored.
          </p>
        </div>

        <div className="animate-fade-in-up stagger-1 mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-20 text-center text-muted-foreground">
            No projects in this category yet.
          </p>
        )}
      </div>
    </div>
  )
}