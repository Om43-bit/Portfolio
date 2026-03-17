"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, BookOpen, Wrench, Target } from "lucide-react"

// We changed howLearned, whatBuilt, stillToLearn from string to string[]
// string[] means "an array of strings" in TypeScript — this is the type change
interface SkillContent {
  howLearned: string[]
  whatBuilt: string[]
  stillToLearn: string[]
}

const groupsData: Record<string, { title: string; skills: Record<string, SkillContent> }> = {
  languages: {
    title: "Languages",
    skills: {
      C: {
        // Each sentence/point is now a separate item in the array
        // This is what gives us bullet points — one array item = one bullet
        howLearned: [
          "Learned C in my second year through Harvard's cs50x online course.",
          "Covered fundamentals: for loops, if statements, and variables.",
          "Progressed to algorithms: bubble sort, merge sort, linear search, selection sort, and quick sort.",
          "Explored image processing filtering edges using Sobel X/Y, and greyscaling by averaging RGB values.",
          "Learned how memory works through hexadecimals and pointers.",
          "Studied data structures: queues, stacks, binary search trees, and linked lists.",
          "This was my first experience with low-level programming, it gave me a solid foundation for everything after.",
        ],
        whatBuilt: [
          "Built a voting system bob/alice/jacob.",
          "Built a greyscaling algorithm, edges algorithm, and sorting algorithms.",
          "Built terminal based games like scramble.",
        ],
        stillToLearn: [
          "Learn file I/O in C to persist data like saving voting results to a file.",
          "Use struct to organize complex data in your games, a stepping stone toward OOP in C++.",
          "Learn make and Makefile to compile multi-file C projects efficiently.",
        ],
      },
      "C++": {
        howLearned: [
          "Learned C++ in third year through my university's IoT 1 course, primarily to program the Arduino Uno.",
          "Recapped programming basics then learned C++-specific syntax like enum and switch statements.",
          "Learned the Arduino program structure: setup() for initialization and loop() for continuous execution.",
          "Used delay() for timed operations, then learned delay-free programming with millis() for non-blocking timing.",
          "Worked with functions like digitalWrite(), digitalRead(), analogWrite(), analogRead(), and Serial.print() for controlling and monitoring hardware.",
          "Learned how to use hardware interrupts with attachInterrupt() to respond to events instantly without polling inside the main loop."
        ],
        whatBuilt: [
          "Built a code that uses a communication mechanism like USART or I2C to have communication between two arduino unos.",
          "Learn how to use FreeRTOS on Arduino to manage multiple tasks simultaneously, going beyond the single loop() structure.",
          "Built code that would have motor control."
        ],
        stillToLearn: [
          "Explore more communication protocols like SPI and UART to expand beyond I2C and USART for connecting multiple devices.",
          "Learn game engine development and high-performance computing with C++.",
          "Dive into PID control for more precise motor and fan speed regulation instead of simple on/off or threshold-based logic."
        ],
      },
      Java: {
        howLearned: [
          "First introduction to OOP coming from only MATLAB, starting directly with Java 2 In my first year.",
          "Learned core OOP concepts: encapsulation, classes, and object-oriented design principles.",
          "Covered fundamentals: loops, linear search, and exception handling with try, catch, and finally.",
          "Learned how to create custom exception types for more descriptive error handling.",
          "In third year (Java 3), studied data structures: linked lists, ArrayLists, how pointers link nodes, and how each node holds its own attributes."
        ],
        whatBuilt: [
          "Built a terminal-based library system supporting searching, borrowing, and returning books. This was my first full program using loops and exception handling.",
          "Built a terminal-based banking system managing accounts and transactions.",
          "Built a JavaFX desktop application in a group of three, integrating everything learned in Java 2.",
          "Built a terminal-based expense calculator that exports data to an Excel sheet.",
          "Built a terminal-based graph system where researchers are nodes and collaborations are edges, with full add/delete/edit operations and export to a .dot file that can be visualized as a PNG."
        ],
        stillToLearn: [
          "Explore multithreading and concurrency in Java to handle multiple tasks simultaneously.",
          "Learn Spring Boot to move into backend development and build RESTful APIs.",
          "Dive into design patterns like Singleton, Factory, and Observer that are widely used in enterprise Java applications."
        ],
      },
      Python: {
        howLearned: [
          "First exposure through a YouTube video covering basic loops and if statements.",
          "Deepened knowledge through cs50x, then two university courses: Machine Learning and AI for Engineers.",
          "Learned data manipulation and visualization using Matplotlib and Pandas, applied to regression tasks.",
          "Learned to use ffmpeg in terminal to resize images and extract frames from videos for dataset preparation.",
          "Trained ML models using TensorFlow, using a cloud subscription service for high VRAM/RAM to handle large batch and epoch training.",
          "Learned algorithmic problem-solving: the N-Queens problem, a calculator app, and a Minimax-based Tic-Tac-Toe bot where the bot simulates all possible moves to maximize its score."
        ],
        whatBuilt: [
          "Built and trained a machine learning model using TensorFlow as part of a group project.",
          "Built a Tic-Tac-Toe bot using the Minimax algorithm, where the bot plays as MAX and the human as MIN, predicting all possible moves before deciding.",
          "Led the algorithm development for a Knight's Tour app (group project), implementing Warnsdorff's Rule in two variants, single-step and a custom two-step approach with no existing reference online. After 15 hours of work, developed a hybrid formula combining both using a weighted linear combination (ax + by, with a > b via trial and error), successfully solving all 64 squares from any starting position."
        ],
        stillToLearn: [
          "Explore reinforcement learning, where instead of Minimax, an agent learns optimal moves through reward-based training.",
          "Get comfortable with ML pipelines and experiment tracking using tools like MLflow.",
          "Learn how to deploy trained models as APIs so they can be used inside real applications.",
        ],
      },

    },
  },
  frontend: {
    title: "Frontend",
    skills: {
      HTML: {
        howLearned: [
          "HTML was the very first web technology I learned.",
          "Started with simple static pages and learned semantic HTML5 elements.",
          "Studied accessibility attributes and proper document structure.",
        ],
        whatBuilt: [
          "Structured numerous web projects with semantic markup.",
          "Used proper heading hierarchies, ARIA attributes, and form elements for accessibility and SEO.",
        ],
        stillToLearn: [
          "Deepen understanding of Web Components and the Shadow DOM.",
          "Learn HTML's role in progressive enhancement and performance optimization.",
        ],
      },
      CSS: {
        howLearned: [
          "Mastered layouts with Flexbox and Grid.",
          "Learned responsive design, CSS variables, animations, and transitions.",
          "Used Tailwind CSS to understand utility-first approaches.",
        ],
        whatBuilt: [
          "Created responsive layouts, complex animations, and custom design systems.",
          "Built fully responsive email templates and print stylesheets.",
        ],
        stillToLearn: [
          "Explore container queries, cascade layers, and new color functions (oklch).",
          "Learn CSS Houdini and custom layout algorithms with the Layout API.",
        ],
      },
    },
  },
  frameworks: {
    title: "Frameworks",
    skills: {
      Angular: {
        howLearned: [
          "Introduced to Angular in web development coursework.",
          "Learned component-based architecture, TypeScript integration, and RxJS for reactive programming.",
          "Used Angular CLI extensively for scaffolding and building projects.",
        ],
        whatBuilt: [
          "Built a project management tool with real-time collaboration features.",
          "Developed a dashboard for IoT device monitoring and several CRUD applications.",
        ],
        stillToLearn: [
          "Explore micro-frontend architectures with Angular.",
          "Learn NgRx for state management and how to publish reusable Angular libraries.",
          "Explore Angular's approach to progressive web apps (PWAs).",
        ],
      },
      React: {
        howLearned: [
         
        ],
        whatBuilt: [
         
        ],
        stillToLearn: [
         
        ],
      },
    },
  },
  backend: {
    title: "Backend",
    skills: {
      JavaScript: {
        howLearned: [
          "Learned JavaScript through web development courses and personal projects.",
          "Started with basic DOM manipulation, then moved to modern ES6+ features.",
          "Learned asynchronous programming, closures, and the event loop.",
        ],
        whatBuilt: [
          "Built full-stack web applications including interactive dashboards and a portfolio website.",
          "Used Node.js for backend APIs and vanilla JavaScript for browser-based visualizations.",
        ],
        stillToLearn: [
          "Explore Web Workers, Service Workers, and WebAssembly integration.",
          "Understand V8 engine internals and performance optimization techniques.",
        ],
      },
      TypeScript: {
        howLearned: [
          "TypeScript was a natural progression from JavaScript.",
          "Adopted it when working on larger Angular projects where type safety became essential.",
          "Learned interfaces, generics, and the strong typing system.",
        ],
        whatBuilt: [
          "Used TypeScript in all Angular projects, including a full-stack task manager with real-time updates.",
          "Built this portfolio website using TypeScript with Next.js.",
        ],
        stillToLearn: [
          "Master advanced TypeScript: conditional types, mapped types, and template literal types.",
          "Explore TypeScript for backend development with NestJS.",
        ],
      },
    },
  },
  robotics: {
    title: "Robotics",
    skills: {
      Arduino: {
        howLearned: [
          "Arduino was my entry point into embedded systems and physical computing.",
          "Started with blinking LEDs, then moved to sensors, motors, and complete robotic systems.",
          "Learned digital and analog I/O, serial communication, and interrupt-driven programming.",
        ],
        whatBuilt: [
          "Built a maze-solving robot with ultrasonic sensors and motor drivers.",
          "Created an automated plant watering system.",
          "Developed several sensor-based projects for coursework.",
        ],
        stillToLearn: [
          "Move beyond the Arduino IDE and explore bare-metal AVR programming.",
          "Learn FreeRTOS on Arduino-compatible boards.",
          "Build complex multi-sensor fusion systems.",
        ],
      },
      "Raspberry pi": {
        howLearned: [
          
        ],
        whatBuilt: [
          
        ],
        stillToLearn: [
          
        ],
      },
      ESP32: {
        howLearned: [
          
        ],
        whatBuilt: [
          
        ],
        stillToLearn: [
          
        ],
      },
    },
  },
  circuits: {
    title: "Circuits",
    skills: {
      "Analog Circuits": {
        howLearned: [
        
        ],
        whatBuilt: [
        
        ],
        stillToLearn: [
         
        ],
      },
      "Digital Circuit": {
        howLearned: [
          
        ],
        whatBuilt: [
          
        ],
        stillToLearn: [
          
        ],
      },
      ESP32: {
        howLearned: [
          
        ],
        whatBuilt: [
          
        ],
        stillToLearn: [
          
        ],
      },
    },
  },
}

export default function SkillGroupPage() {
  const params = useParams()
  const groupSlug = params.group as string
  const groupData = groupsData[groupSlug]

  const [activeSkill, setActiveSkill] = useState<string | null>(null)

  if (!groupData) {
    return (
      <div className="min-h-screen px-6 pt-28 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold text-foreground">Group not found</h1>
          <Link href="/" className="mt-4 inline-flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const skillNames = Object.keys(groupData.skills)
  const currentSkill = activeSkill || skillNames[0]
  const content = groupData.skills[currentSkill]

  return (
    <div className="min-h-screen px-6 pt-28 pb-20">
      <div className="mx-auto max-w-4xl">
        {/* Back link */}
        <div className="animate-fade-in-up">
          <Link
            href="/"
            prefetch
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-150 hover:text-primary"
          >
            <ArrowLeft size={16} />
            Back to Skills
          </Link>
        </div>

        {/* Title */}
        <h1 className="animate-fade-in-up stagger-1 mb-8 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          {groupData.title}
        </h1>

        {/* Skill tab buttons */}
        <div className="animate-fade-in-up stagger-2 mb-10 flex flex-wrap gap-2">
          {skillNames.map((skill) => {
            const isActive = currentSkill === skill
            return (
              <button
                key={skill}
                onClick={() => setActiveSkill(skill)}
                className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "border border-primary/20 bg-card text-card-foreground hover:bg-primary/15 hover:text-primary"
                }`}
              >
                {skill}
              </button>
            )
          })}
        </div>

        {/* Skill content */}
        <div key={currentSkill} className="space-y-6">
          <div className="animate-fade-in rounded-2xl border border-primary/15 bg-card p-6 shadow-lg shadow-primary/5">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15">
                <BookOpen size={18} className="text-primary" />
              </div>
              <h2 className="text-lg font-semibold text-card-foreground">
                How I Learned {currentSkill}
              </h2>
            </div>
              <ul className="space-y-2">
                {content.howLearned.map((point, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm leading-relaxed text-card-foreground/70">
                    {/* This is the colored dot bullet */}
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
          </div>

          <div className="animate-fade-in stagger-1 rounded-2xl border border-primary/15 bg-card p-6 shadow-lg shadow-primary/5">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15">
                <Wrench size={18} className="text-primary" />
              </div>
              <h2 className="text-lg font-semibold text-card-foreground">
                {"What I've Built With It"}
              </h2>
            </div>
              <ul className="space-y-2">
                {content.whatBuilt.map((point, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm leading-relaxed text-card-foreground/70">
                    {/* This is the colored dot bullet */}
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
          </div>

          <div className="animate-fade-in stagger-2 rounded-2xl border border-primary/15 bg-card p-6 shadow-lg shadow-primary/5">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15">
                <Target size={18} className="text-primary" />
              </div>
              <h2 className="text-lg font-semibold text-card-foreground">
                {"What's Still to Learn"}
              </h2>
            </div>
              <ul className="space-y-2">
                {content.stillToLearn.map((point, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm leading-relaxed text-card-foreground/70">
                    {/* This is the colored dot bullet */}
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
