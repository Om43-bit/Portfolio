import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ImageIcon, Calendar, Tag } from "lucide-react"

interface ProjectContent {
  title: string
  description: string
  category: string
  tags: string[]
  year: string
  summary: string
  problem: string
  solution: string
  pipeline: string[]
  results: string[]
  image?: string
}

const projectDetails: Record<string, ProjectContent> = {
  "autonomous-lane-keeping": {
    title: "Autonomous Lane-Keeping RC Car",
    description: "Self-driving RC car on Raspberry Pi 5 with real-time YOLOv11 obstacle avoidance, dual-PID control, and lane detection.",
    category: "Robotics",
    tags: ["Python", "OpenCV", "YOLOv11n", "Raspberry Pi 5", "PID Control", "Kalman Filter", "Computer Vision"],
    year: "2026",
    summary:
      "A fully autonomous RC car built on a Raspberry Pi 5 that navigates a track using real-time computer vision. The car detects lane boundaries, avoids obstacles, and maintains its position using dual PID controllers — all running on-device at over 15 FPS.",
    problem:
      "The challenge was to build a self-driving system that could simultaneously handle lane keeping and obstacle avoidance on a real physical track, using only onboard processing with no external compute. The system had to be fast enough to react in real time while running on the limited resources of a Raspberry Pi 5.",
    solution:
      "A two-pipeline approach was used: a lane detection pipeline based on HSV color filtering and Hough line transforms to identify road boundaries, and an obstacle detection pipeline using YOLOv11n — the smallest and fastest variant of YOLO. A Kalman filter was layered on top of YOLO detections for smooth, stable tracking. Two independent PID controllers handled steering and speed separately, allowing fine-grained control over both axes.",
    pipeline: [
      "Camera frame captured and resized for processing.",
      "HSV masking applied to isolate lane colors from the background.",
      "Hough line transform detects left and right lane boundaries.",
      "Lane midpoint computed and fed into the steering PID controller.",
      "YOLOv11n runs inference on the same frame to detect obstacles.",
      "Kalman filter smooths bounding box positions across frames.",
      "Obstacle distance estimated from bounding box size; speed PID adjusts throttle accordingly.",
      "Motor driver receives final steering and speed signals.",
    ],
    results: [
      "Placed 1st in the AIRE475 Self-Driving Cars competition at Abu Dhabi University, supervised by Dr. Sajid Khawaja.",
      "Sustained 15+ FPS real-time inference on the Raspberry Pi 5 throughout the run.",
      "Successfully navigated curved track sections and dashed lane markings without losing lane position.",
      "Maintained stable obstacle tracking despite reflective flooring interfering with detection.",
      "Stopped consistently within ±2cm of obstacles during avoidance testing.",
      "Built as a group project with Housein Hassan Kahhoul and El Sayed Hesham Mowafi.",
    ],
    image: '/images/selfDriving.png'
  },

  "knights-tour": {
    title: "Knight's Tour Solver",
    description: "Knight's Tour app implementing a custom hybrid of Warnsdorff's Rule — a two-step variant developed independently, combined using a weighted formula to solve all 64 squares from any starting position.",
    category: "Coding",
    tags: ["Python", "Algorithm Design", "Warnsdorff's Rule", "Heuristics"],
    year: "2025",
    summary:
      "A Python application that solves the Knight's Tour problem — visiting every square on a chessboard exactly once using only knight moves — from any starting position. The core of the project is a custom heuristic algorithm developed independently over 15 hours with no existing online reference for the specific approach taken.",
    problem:
      "Standard Warnsdorff's Rule (always move to the square with the fewest onward moves) is well-known but has failure cases from certain starting positions. The goal was to find a more robust variant that could guarantee a full 64-square solution from any starting square.",
    solution:
      "Two independent variants of Warnsdorff's Rule were designed: a standard single-step lookahead, and a custom two-step lookahead that evaluates the next move's successors rather than just the immediate move. After testing both in isolation, a hybrid formula was developed combining them using a weighted linear combination (ax + by, where a > b, tuned by trial and error) to leverage the strengths of each variant. This approach was developed without any existing reference for a two-step Warnsdorff's variant.",
    pipeline: [
      "Board initialized as an 8x8 grid with all squares marked unvisited.",
      "Knight placed at the user-specified starting position.",
      "At each step, all valid knight moves from the current position are computed.",
      "Single-step Warnsdorff score calculated for each candidate move.",
      "Two-step lookahead score calculated by evaluating the successors of each candidate.",
      "Hybrid score computed using the weighted formula (ax + by).",
      "Move with the lowest hybrid score selected; ties broken by secondary heuristic.",
      "Process repeats until all 64 squares are visited or no moves remain.",
    ],
    results: [
      "Successfully solved all 64 squares from every starting position tested.",
      "The two-step variant alone failed on certain starting squares; the hybrid resolved these cases.",
      "Weighted coefficients a and b were finalized through trial and error across dozens of starting positions.",
      "Developed entirely independently with no existing online reference for the two-step Warnsdorff's approach.",
    ],
  },

  "ml-action-recognition": {
    title: "ML Model — Action Recognition",
    description: "Group project training a TensorFlow model for video-based action recognition, with dataset preparation using ffmpeg and data analysis using Pandas and Matplotlib.",
    category: "Coding",
    tags: ["Python", "TensorFlow", "ffmpeg", "Pandas", "Matplotlib", "CNN"],
    year: "2025",
    summary:
      "A group machine learning project focused on classifying human actions from video footage. The project covered the full ML workflow from raw video dataset preparation through model training, evaluation, and visualization, using cloud compute for training due to the high VRAM requirements.",
    problem:
      "Raw video data cannot be fed directly into a neural network. The dataset needed to be processed into a consistent frame-based format suitable for training, and the model had to generalize well across different subjects performing the same actions.",
    solution:
      "ffmpeg was used in the terminal to extract frames from video clips at a consistent rate and resize them to a uniform resolution. A convolutional neural network was built and trained using TensorFlow, with Pandas used for organizing and managing the dataset metadata and Matplotlib for visualizing training curves and evaluation metrics. A cloud subscription service was used for training to handle the large batch sizes and epoch counts required.",
    pipeline: [
      "Raw video clips collected and organized by action class.",
      "ffmpeg used to extract frames at a fixed rate and resize to uniform dimensions.",
      "Frames labeled and organized into train/validation/test splits using Pandas.",
      "TensorFlow CNN model architecture defined with convolutional, pooling, and dense layers.",
      "Model trained on cloud GPU with configurable batch size and epoch count.",
      "Training and validation loss/accuracy plotted with Matplotlib after each run.",
      "Final model evaluated on the test set and confusion matrix generated.",
    ],
    results: [
      "Model successfully classified action classes from the dataset.",
      "Training and validation curves showed consistent convergence with no significant overfitting.",
      "ffmpeg pipeline reduced dataset preparation time significantly compared to manual frame extraction.",
      "Cloud training enabled larger batch sizes and more epochs than local hardware would allow.",
    ],
  },

  "tictactoe-bot": {
    title: "Minimax Tic-Tac-Toe Bot",
    description: "Unbeatable Tic-Tac-Toe bot using the Minimax algorithm, where the bot simulates all possible future moves to always play optimally.",
    category: "Coding",
    tags: ["Python", "Minimax", "Game AI", "Recursion"],
    year: "2025",
    summary:
      "A Python Tic-Tac-Toe application where the bot opponent uses the Minimax algorithm to play perfectly. The bot (MAX) simulates every possible game state recursively and always picks the move that maximizes its own score while assuming the human (MIN) also plays optimally.",
    problem:
      "Building a bot that simply picks random or greedy moves is easy to beat. The challenge was to implement a bot that is genuinely unbeatable — one that never makes a suboptimal move regardless of what the human does.",
    solution:
      "The Minimax algorithm was implemented recursively. At each turn, the bot generates all possible moves, simulates the resulting board state, and calls Minimax on each state. MAX nodes (bot's turn) pick the move with the highest score; MIN nodes (human's turn) pick the move with the lowest score. Terminal states return scores of +1 (bot wins), -1 (human wins), or 0 (draw). The bot always picks the root move that leads to the highest guaranteed outcome.",
    pipeline: [
      "Current board state passed into the Minimax function with a flag for whose turn it is.",
      "All empty cells identified as candidate moves.",
      "For each candidate, the move is simulated and Minimax called recursively on the new state.",
      "At terminal states (win, loss, draw), a score is returned directly.",
      "MAX nodes select the child with the highest score; MIN nodes select the lowest.",
      "Bot executes the move corresponding to the highest score at the root call.",
    ],
    results: [
      "Bot is completely unbeatable — every game against an optimal human ends in a draw.",
      "Correctly handles all terminal conditions including diagonal, row, and column wins.",
      "Algorithm explores the full game tree, evaluating all 9! = 362,880 possible game states.",
    ],
  },

  "javafx-app": {
    title: "JavaFX Desktop App",
    description: "Group-built desktop application using JavaFX, integrating OOP concepts, custom UI components, and full CRUD functionality.",
    category: "Coding",
    tags: ["Java", "JavaFX", "OOP", "CRUD", "UI Design"],
    year: "2024",
    summary:
      "A desktop application built as a group project of three, serving as the capstone for Java 2. The app applied all OOP concepts learned throughout the course — encapsulation, inheritance, polymorphism — in a real graphical application with a custom JavaFX UI and full data management features.",
    problem:
      "The project required integrating multiple OOP principles into a single cohesive application with a working graphical interface, moving beyond terminal-based programs for the first time.",
    solution:
      "JavaFX was used for the GUI layer, with FXML for layout and Java controllers handling business logic. The application was structured around well-defined class hierarchies using inheritance and interfaces. Data was managed in memory with full CRUD operations exposed through the UI.",
    pipeline: [
      "Application domain and class hierarchy designed as a group.",
      "FXML layouts created for each screen.",
      "Java controller classes linked to FXML files via JavaFX annotations.",
      "Model classes implemented with encapsulation and inheritance.",
      "CRUD operations wired between the UI and the in-memory data layer.",
      "Error handling added for invalid inputs using custom exception types.",
    ],
    results: [
      "Fully functional desktop application with a working graphical interface.",
      "Covered all core OOP principles assessed in the Java 2 course.",
      "Successfully demonstrated live as a group with all CRUD operations working.",
    ],
  },

  "banking-system": {
    title: "Java Banking System",
    description: "Terminal-based banking system managing accounts and transactions, built with Java using OOP principles and exception handling.",
    category: "Coding",
    tags: ["Java", "OOP", "Exception Handling", "Terminal App"],
    year: "2024",
    summary:
      "A terminal-based banking application written in Java that simulates core banking operations. The project was an exercise in applying OOP design and robust exception handling to a realistic domain.",
    problem:
      "Banking operations involve many edge cases: withdrawing more than the balance, transferring to non-existent accounts, entering invalid amounts. The system needed to handle all of these gracefully without crashing.",
    solution:
      "Account and transaction logic was modeled using classes with proper encapsulation. Custom exception types were created for domain-specific errors (e.g. InsufficientFundsException), caught at the UI layer to display meaningful messages rather than stack traces.",
    pipeline: [
      "Account class defined with balance, owner, and account number fields.",
      "Deposit, withdraw, and transfer methods implemented with validation logic.",
      "Custom exception classes created for insufficient funds and invalid account errors.",
      "Try-catch blocks in the main loop catch exceptions and display user-friendly messages.",
      "Menu-driven terminal interface loops until the user exits.",
    ],
    results: [
      "All core banking operations functional: deposit, withdraw, transfer, and balance check.",
      "Custom exceptions handled cleanly with no unhandled crashes during testing.",
      "Provided a strong foundation for understanding exception-driven design in Java.",
    ],
  },

  "library-system": {
    title: "Java Library System",
    description: "Terminal-based library system with book searching, borrowing, and returning functionality. First full program built using loops and exception handling.",
    category: "Coding",
    tags: ["Java", "OOP", "Exception Handling", "Terminal App"],
    year: "2023",
    summary:
      "A terminal-based library management system — the first complete, non-trivial program built in Java. It supports searching for books, borrowing, and returning, and was the first project to use loops, exception handling, and try-catch-finally together in a real application.",
    problem:
      "As a first full Java program, the challenge was structuring a multi-feature application correctly using OOP principles while also handling errors (like borrowing a book that is already checked out) without crashing.",
    solution:
      "Books were modeled as objects with title, author, and availability state. A library class managed the collection with search, borrow, and return methods. Exception handling using try, catch, and finally was applied to guard against invalid operations.",
    pipeline: [
      "Book class defined with fields for title, author, ISBN, and availability.",
      "Library class maintains a list of Book objects.",
      "Search method iterates through the list and returns matching results.",
      "Borrow method checks availability and throws an exception if already borrowed.",
      "Return method resets availability and confirms the operation.",
      "Terminal menu loops and routes user input to the appropriate method.",
    ],
    results: [
      "All three core operations — search, borrow, return — working correctly.",
      "Exception handling prevented crashes on invalid operations like double-borrowing.",
      "Established the OOP and exception handling patterns used in every Java project since.",
    ],
  },

  "image-processing": {
    title: "C Image Processing",
    description: "Image processing algorithms written in C, including greyscaling by averaging RGB values and Sobel edge detection for X and Y gradients.",
    category: "Coding",
    tags: ["C", "Image Processing", "Sobel Filter", "Algorithms", "cs50x"],
    year: "2024",
    summary:
      "A set of image processing algorithms written in C as part of cs50x, operating directly on bitmap pixel data. The project involved implementing greyscaling and Sobel edge detection from scratch, working with raw memory and pixel structs at a low level.",
    problem:
      "Image processing requires manipulating individual pixels in memory with no high-level library support. Sobel edge detection in particular requires computing gradient convolutions across a 3x3 kernel for every pixel, while carefully handling border pixels and avoiding in-place mutation that corrupts neighboring calculations.",
    solution:
      "The BMP file was read into a 2D array of RGB pixel structs. Greyscaling was implemented by averaging the R, G, and B values of each pixel. Sobel edge detection applied two 3x3 convolution kernels (Gx and Gy) to compute horizontal and vertical gradients independently, then combined them as the square root of Gx² + Gy², capped at 255. A copy of the original pixel array was used during Sobel to prevent mutations from affecting adjacent pixel calculations.",
    pipeline: [
      "BMP file read into a 2D array of RGBTRIPLE pixel structs.",
      "For greyscale: each pixel's R, G, B values averaged and all three channels set to the result.",
      "For Sobel: a deep copy of the pixel array created to preserve original values.",
      "Gx kernel applied across every non-border pixel to compute horizontal gradient.",
      "Gy kernel applied across every non-border pixel to compute vertical gradient.",
      "Final edge value computed as sqrt(Gx² + Gy²), clamped to 255.",
      "Output written back to a new BMP file.",
    ],
    results: [
      "Greyscale output correctly averaged RGB channels for all tested images.",
      "Sobel filter produced clear edge-highlighted outputs matching expected results.",
      "Correctly handled border pixels which cannot have a full 3x3 kernel applied.",
      "No in-place mutation bugs — using a pixel copy was key to correctness.",
    ],
  },

  "tideman": {
    title: "Tideman Voting System",
    description: "Implementation of the Tideman (ranked pairs) voting algorithm in C, determining election winners by ranking candidate pairs and locking edges without creating cycles in the preference graph.",
    category: "Coding",
    tags: ["C", "Algorithms", "Graph Theory", "cs50x", "Recursion"],
    year: "2024",
    summary:
      "An implementation of the Tideman ranked-pairs voting algorithm in C, written as part of cs50x. Tideman is considered one of the most theoretically sound voting methods: voters rank candidates by preference, and the winner is determined by building a directed graph of pairwise wins while avoiding cycles.",
    problem:
      "Tideman is one of the hardest problems in cs50x. The core difficulty is the cycle detection step: when locking in a pair (adding a directed edge from winner to loser), you must first verify that adding this edge would not create a cycle in the graph — because a cycle would mean there is no valid winner. Implementing this correctly in C requires recursive graph traversal with no standard library support.",
    solution:
      "The algorithm was implemented across four functions: record_preferences builds a 2D preferences matrix from each ballot, add_pairs collects all candidate pairs where one beats the other, sort_pairs sorts them in descending order by victory margin, and lock_pairs iterates through sorted pairs and locks each one only if it does not create a cycle. Cycle detection was implemented as a recursive depth-first search: from the potential loser, follow all locked edges and check if any path leads back to the winner.",
    pipeline: [
      "Each voter's ranked ballot is read and all pairwise preferences recorded in a 2D matrix.",
      "All pairs where one candidate beats another are collected into a pairs array.",
      "Pairs sorted in descending order by the strength of the victory (margin of votes).",
      "For each pair (strongest first): cycle detection runs a DFS from the loser through existing locked edges.",
      "If no path from loser leads back to winner, the edge is locked into the graph.",
      "If a cycle would be created, the pair is skipped entirely.",
      "The candidate with no locked edges pointing at them is declared the winner.",
    ],
    results: [
      "Correctly determined the Tideman winner across all test cases including edge cases with near-cycles.",
      "Cycle detection handled all configurations without false positives or missed cycles.",
      "Passed all cs50x automated test checks including check50 validation.",
      "Developed a strong understanding of directed graphs and recursive DFS through this problem.",
    ],
  },

  "arduino-sensor-systems": {
    title: "Arduino Sensor Systems",
    description: "A collection of hardware projects: USART and I2C communication between two Arduino Unos, temperature-based fan control, and a breadboard heartbeat sensor using infrared LEDs and op-amps.",
    category: "Circuits",
    tags: ["C++", "Arduino", "USART", "I2C", "Op-Amps", "Infrared", "Embedded Systems"],
    year: "2025",
    summary:
      "A series of embedded systems projects built on Arduino Unos as part of the IoT 1 course. Each project targeted a specific hardware concept: inter-device communication via USART and I2C protocols, temperature-driven actuator control, and analog sensor design using op-amps and infrared components on a breadboard.",
    problem:
      "Each sub-project addressed a distinct embedded challenge: reliably transmitting data between two microcontrollers, controlling a motor based on a real-world sensor input without blocking the main loop, and building an analog signal conditioning circuit capable of detecting the subtle voltage changes from a heartbeat pulse.",
    solution:
      "For USART communication, one Arduino was configured as the transmitter and the other as the receiver, exchanging data over the TX/RX pins with matching baud rates. I2C was then implemented using the Wire library with one Arduino as master and the other as slave. For fan control, analogRead sampled a temperature sensor and PWM via analogWrite controlled the fan motor, using millis() for non-blocking timing. The heartbeat sensor used an infrared LED and phototransistor pair with an op-amp configured as a comparator to amplify and threshold the small reflected signal into a detectable digital pulse.",
    pipeline: [
      "USART: baud rate matched on both Arduinos; transmitter sends bytes via Serial, receiver reads and processes them.",
      "I2C: master initiates communication via Wire.beginTransmission(); slave listens with Wire.onReceive() and Wire.onRequest().",
      "Fan control: analogRead samples temperature sensor; threshold logic determines fan state; analogWrite sets PWM duty cycle; millis() handles timing without delay().",
      "Heartbeat sensor: IR LED emits light toward fingertip; phototransistor detects reflected light intensity.",
      "Op-amp amplifies the small phototransistor signal and compares it against a reference voltage.",
      "Output toggles high/low with each heartbeat pulse, readable as a digital signal on the Arduino.",
    ],
    results: [
      "USART communication successfully transmitted data between two Unos with no packet loss at the tested baud rate.",
      "I2C master-slave communication worked reliably for both sending and requesting data.",
      "Fan speed responded correctly to temperature changes using non-blocking millis() timing.",
      "Heartbeat sensor produced a clean, detectable pulse signal on the breadboard using only passive components and a single op-amp.",
    ],
  },

  "portfolio-website": {
    title: "Portfolio Website",
    description: "This portfolio website, built with Next.js and TypeScript, featuring a custom color scheme, CSS animations, dark/light mode, and responsive design.",
    category: "Coding",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "shadcn/ui", "Vercel"],
    year: "2026",
    summary:
      "A personal portfolio website built from scratch using Next.js 16 with the App Router, TypeScript, and Tailwind CSS v4. The site showcases projects, skills, and background through a custom design with a warm color scheme, cyan accents, CSS-based animations, and full dark/light mode support.",
    problem:
      "Portfolio websites built with generic templates or AI tools look identical to each other. The goal was to build something that felt personal and intentional — with real content, a distinctive visual identity, and clean code that I fully understood and owned.",
    solution:
      "The site was built with Next.js for server-side rendering and fast navigation, TypeScript for type safety, and Tailwind CSS v4 for utility-first styling with custom design tokens defined directly in CSS. shadcn/ui was used as a component reference but the UI components used are custom-built. Vercel Analytics was added for traffic visibility. The color scheme uses a warm beige/navy light mode with a deep navy dark mode, and a consistent cyan primary accent throughout.",
    pipeline: [
      "Next.js App Router set up with TypeScript and Tailwind CSS v4.",
      "Custom CSS variables defined in globals.css for the full color system (light and dark).",
      "Reusable components built: Navbar, HeroSection, SkillsSection, ProjectCard, SplashScreen.",
      "Dynamic routing set up for /projects/[slug] and /skills/[group] detail pages.",
      "Splash screen implemented with sessionStorage to show only on first visit per tab.",
      "CSS keyframe animations written for fade-in and slide-in effects with stagger classes.",
      "Vercel Analytics integrated in the root layout for passive traffic tracking.",
      "Deployed to Vercel with automatic builds on push.",
    ],
    results: [
      "Fully responsive across mobile, tablet, and desktop breakpoints.",
      "Splash screen, fade-in animations, and hover interactions all running on CSS with no JavaScript animation libraries.",
      "Dark and light mode working via next-themes with theme stored in a class on the html element.",
      "All pages statically renderable with no unnecessary client components.",
    ],
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

const sectionHeader = (icon: React.ReactNode, title: string) => (
  <div className="mb-4 flex items-center gap-3">
    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15">
      {icon}
    </div>
    <h2 className="text-lg font-semibold text-card-foreground">{title}</h2>
  </div>
)

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params
  const project = projectDetails[slug]

  if (!project) {
    return (
      <div className="min-h-screen px-6 pt-28 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold text-foreground">Project not found</h1>
          <Link href="/projects" className="mt-4 inline-flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  const sections: { title: string; content: string | string[]; icon: React.ReactNode }[] = [
    {
      title: "Summary",
      content: project.summary,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
        </svg>
      ),
    },
    {
      title: "Problem",
      content: project.problem,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
    },
    {
      title: "Solution",
      content: project.solution,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ),
    },
    {
      title: "Pipeline",
      content: project.pipeline,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
        </svg>
      ),
    },
    {
      title: "Results",
      content: project.results,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen px-6 pt-28 pb-20">
      <div className="mx-auto max-w-4xl">

        {/* Back link */}
        <div className="animate-fade-in-up">
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-150 hover:text-primary"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>

        {/* Image placeholder */}
        <div className="animate-fade-in-up stagger-1 relative mb-8 h-64 overflow-hidden rounded-2xl border border-primary/15 bg-card shadow-lg shadow-primary/5 md:h-80">
          <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
            <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground">
              {project.category}
            </span>
            <span className="rounded-full bg-card/80 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-primary">
              {project.year}
            </span>
          </div>
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-card to-primary/10">
              <ImageIcon size={64} className="text-primary/20" />
            </div>
          )}
        </div>

        {/* Title */}
        <h1 className="animate-fade-in-up stagger-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {project.title}
        </h1>

        {/* Meta */}
        <div className="animate-fade-in-up stagger-3 mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            {project.year}
          </span>
          <span className="flex items-center gap-1.5">
            <Tag size={14} />
            {project.category}
          </span>
        </div>

        {/* Content sections */}
        <div className="mt-10 space-y-6">
          {sections.map((section, i) => (
            <div
              key={section.title}
              className={`animate-fade-in-up stagger-${Math.min(i + 4, 8)} rounded-2xl border border-primary/15 bg-card p-6 shadow-lg shadow-primary/5`}
            >
              {sectionHeader(section.icon, section.title)}

              {Array.isArray(section.content) ? (
                <ol className="space-y-2">
                  {section.content.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm leading-relaxed text-card-foreground/70">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
                        {index + 1}
                      </span>
                      {point}
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="text-sm leading-relaxed text-card-foreground/70">
                  {section.content}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="animate-fade-in-up mt-8">
          <h2 className="mb-3 text-sm font-semibold text-foreground">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}