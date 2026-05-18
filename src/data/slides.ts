export interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  badge?: string;
  bullets?: string[];
  highlight?: string;
  icon: string;
  accentColor: string;
  layout: "hero" | "feature" | "list" | "split" | "closing";
  tag?: string;
}

export interface SlideNote {
  slideId: number;
  title: string;
  duration: string;
  notes: string[];
  tips?: string;
}

export const slides: Slide[] = [
  {
    id: 1,
    title: "Claude Code",
    subtitle: "Agent View, /goal, Compaction & /radio",
    badge: "2026 Update",
    icon: "◈",
    accentColor: "#e86c3a",
    layout: "hero",
    tag: "Anthropic",
  },
  {
    id: 2,
    title: "What Changed?",
    subtitle: "Four new capabilities, one cohesive upgrade",
    bullets: [
      "Agent View — centralized session dashboard",
      "/goal — autonomous outcome-based execution",
      "System Prompt Compaction — context preservation",
      "/radio — built-in lo-fi coding companion",
    ],
    icon: "⬡",
    accentColor: "#4fa3e0",
    layout: "list",
    tag: "Overview",
  },
  {
    id: 3,
    title: "Agent View",
    subtitle: "Your coding sessions, all in one place",
    bullets: [
      "Monitor & manage multiple tasks simultaneously",
      "Inline real-time previews of session activity",
      "Background session support for autonomous execution",
      "Less context-switching, more deep work",
    ],
    highlight: "A centralized command center for everything running in Claude Code",
    icon: "⊞",
    accentColor: "#7c6af7",
    layout: "feature",
    tag: "Feature 01",
  },
  {
    id: 4,
    title: "/goal",
    subtitle: "Define the outcome. Let Claude handle the rest.",
    bullets: [
      "Outcome-based tasks that execute independently",
      "Adapts dynamically to evolving conditions",
      "Remote task management including mobile",
      "Automated decisions on continuation or termination",
    ],
    highlight: "Delegate routine work. Focus on what matters.",
    icon: "◎",
    accentColor: "#3fcf8e",
    layout: "feature",
    tag: "Feature 02",
  },
  {
    id: 5,
    title: "System Prompt Compaction",
    subtitle: "Context that sticks — even in marathon sessions",
    bullets: [
      "Automatically trims prompts to prioritize essentials",
      "Preserves your intent across extended operations",
      "Reduces context drift in complex workflows",
      "Directives stay intact and actionable, longer",
    ],
    highlight: "No more losing your thread mid-session.",
    icon: "⟁",
    accentColor: "#f0a500",
    layout: "feature",
    tag: "Feature 03",
  },
  {
    id: 6,
    title: "/radio",
    subtitle: "Claude FM — lo-fi beats for deep coding focus",
    bullets: [
      "Built-in ambient audio station inside Claude Code",
      "Designed for sustained concentration",
      "Calming backdrop without leaving the tool",
      "Also known as Claude FM",
    ],
    highlight: "Your coding environment is now a vibe.",
    icon: "♫",
    accentColor: "#e84393",
    layout: "feature",
    tag: "Feature 04",
  },
  {
    id: 7,
    title: "Expanded Use Cases",
    subtitle: "What this unlocks for real workflows",
    bullets: [
      "Concurrent PR generation & dashboard updates",
      "Looping background jobs with visible runtimes",
      "Seamless collaboration without interrupting flows",
      "Scalable from solo dev to enterprise teams",
    ],
    icon: "⬣",
    accentColor: "#4fa3e0",
    layout: "list",
    tag: "Impact",
  },
  {
    id: 8,
    title: "Know the Limits",
    subtitle: "Two constraints to plan around",
    bullets: [
      "Token Consumption — multiple agents multiply costs",
      "Session Caps — high-volume projects need careful planning",
    ],
    highlight: "Understanding the ceiling helps you architect smarter.",
    icon: "△",
    accentColor: "#e8523a",
    layout: "split",
    tag: "Caveats",
  },
  {
    id: 9,
    title: "Availability",
    subtitle: "Who has access right now",
    bullets: [
      "Research preview — available today",
      "Pro, Max, Team & Enterprise plans",
      "Cloud API access included",
      "Anthropic positioning Claude Code as the agentic dev standard",
    ],
    icon: "◈",
    accentColor: "#7c6af7",
    layout: "list",
    tag: "Access",
  },
  {
    id: 10,
    title: "The Bigger Picture",
    subtitle: "Claude Code is becoming a development platform",
    highlight:
      "Agent View + /goal + Compaction + /radio isn't just a feature drop — it's the architecture for how AI-assisted development scales.",
    icon: "◉",
    accentColor: "#e86c3a",
    layout: "closing",
    tag: "Takeaway",
  },
];

export const slideNotes: SlideNote[] = [
  {
    slideId: 1,
    title: "Title Slide",
    duration: "~20 sec",
    notes: [
      "Anthropic just dropped a major Claude Code update. Four new features that change how we work with AI in the terminal.",
      "Let's walk through what's new and why it matters.",
    ],
    tips: "Say it confidently and move on quickly. The title slide is just a launch pad.",
  },
  {
    slideId: 2,
    title: "Overview",
    duration: "~30 sec",
    notes: [
      "Four features: Agent View for visibility, /goal for autonomy, Prompt Compaction for reliability, and /radio for focus.",
      "They work together as a system — not just isolated additions.",
    ],
    tips: "Point to each bullet as you name it. Keep the pace brisk.",
  },
  {
    slideId: 3,
    title: "Agent View",
    duration: "~50 sec",
    notes: [
      "Agent View is a central dashboard for all your Claude sessions — think of it as a cockpit.",
      "You can monitor multiple tasks at once, see real-time previews, and let sessions run in the background while you stay focused.",
      "No more tab-switching to figure out what Claude is actually doing.",
    ],
    tips: "The 'cockpit' analogy lands well. Keep it to three beats: see, monitor, stay focused.",
  },
  {
    slideId: 4,
    title: "/goal",
    duration: "~50 sec",
    notes: [
      "Instead of giving Claude step-by-step instructions, /goal lets you define an outcome and step back.",
      "Claude figures out the path, adapts if things change, and even decides when to stop if something goes wrong.",
      "The shift is from directing every move to just setting the destination.",
    ],
    tips: "One sentence summary: 'You set the what, Claude handles the how.'",
  },
  {
    slideId: 5,
    title: "System Prompt Compaction",
    duration: "~40 sec",
    notes: [
      "Long sessions used to drift — Claude would gradually lose track of your conventions and preferences.",
      "Compaction automatically keeps the essential instructions and trims the noise, so your intent stays intact for hours.",
    ],
    tips: "Quick analogy if needed: 'It's like defragging your context window.'",
  },
  {
    slideId: 6,
    title: "/radio",
    duration: "~25 sec",
    notes: [
      "/radio is a built-in lo-fi station — ambient music without leaving Claude Code.",
      "Small feature, but it shows Anthropic is thinking about the whole developer experience, not just raw capability.",
    ],
    tips: "Keep it light. One beat of levity in the presentation is a good thing.",
  },
  {
    slideId: 7,
    title: "Expanded Use Cases",
    duration: "~40 sec",
    notes: [
      "Combine these features and you can run concurrent PR generation, background data jobs, and dashboard updates — all at once.",
      "Claude manages each as a background agent with visible runtimes, so you're always in control.",
    ],
    tips: "Paint a picture of a real workflow. Make it feel tangible, not abstract.",
  },
  {
    slideId: 8,
    title: "Know the Limits",
    duration: "~30 sec",
    notes: [
      "Two things to watch: running multiple agents burns tokens fast, so budget accordingly.",
      "And there are session caps — if you're pushing a lot of concurrent work, plan around them.",
    ],
    tips: "Be direct. A technical audience respects honesty over hype.",
  },
  {
    slideId: 9,
    title: "Availability",
    duration: "~20 sec",
    notes: [
      "Available now as a research preview on Pro, Max, Team, Enterprise, and the Cloud API.",
      "If you're on a paid plan, it's likely already in your settings.",
    ],
    tips: "End with a nudge to act: 'Go check today.'",
  },
  {
    slideId: 10,
    title: "Closing",
    duration: "~35 sec",
    notes: [
      "Claude Code is moving from a coding assistant to a full development platform — one where agents run, collaborate, and ship on your behalf.",
      "Visibility, autonomy, reliability, focus. That's the bet Anthropic is making.",
      "Thanks — happy to take questions.",
    ],
    tips: "Land the final line with a pause before 'happy to take questions.' Give the room a moment to process.",
  },
];
