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
    duration: "~30 seconds",
    notes: [
      "Welcome everyone. Today we're looking at Anthropic's latest Claude Code update from May 2026.",
      "This release isn't just a patch — it introduces a genuinely new way of thinking about AI-assisted development.",
      "We'll cover four new features, their use cases, limitations, and what it all signals about where Claude Code is heading.",
    ],
    tips: "Keep this brief — let the design do the talking. Pause for a moment before speaking.",
  },
  {
    slideId: 2,
    title: "Overview",
    duration: "~45 seconds",
    notes: [
      "Four features shipped together: Agent View, /goal, System Prompt Compaction, and /radio.",
      "They're designed to work as a cohesive system — not isolated additions.",
      "Think of it as: visibility (Agent View), autonomy (/goal), reliability (Compaction), and atmosphere (/radio).",
      "Each one addresses a real pain point developers have hit in production use of Claude Code.",
    ],
    tips: "Read the four bullets at a comfortable pace. Let the audience absorb each one.",
  },
  {
    slideId: 3,
    title: "Agent View",
    duration: "~1.5 minutes",
    notes: [
      "Agent View is essentially a cockpit for your Claude sessions. If you've ever had to switch between terminals, tabs, or contexts to track what Claude is doing — this solves that.",
      "You get a single dashboard that shows all active sessions, what they're doing, and their real-time status.",
      "Background sessions mean tasks can run while you're focused elsewhere. Claude keeps going; you stay in flow.",
      "This is especially powerful for teams or developers juggling multiple features simultaneously.",
      "Think of it like having a project manager that never sleeps and never needs to be updated on context.",
    ],
    tips: "Emphasize the 'never leave your flow' angle. Developers relate strongly to context-switching pain.",
  },
  {
    slideId: 4,
    title: "/goal",
    duration: "~1.5 minutes",
    notes: [
      "The /goal command is where things get genuinely agentic. Instead of step-by-step instructions, you define an outcome.",
      "Claude then figures out how to achieve it, adapting as things change along the way.",
      "Remote management means you can kick off a task from your laptop and monitor it from your phone.",
      "It can also make decisions autonomously — including knowing when to stop a task that's gone off the rails.",
      "The key mental shift here: from 'tell Claude what to do' to 'tell Claude what you need done.'",
    ],
    tips: "Use a concrete example if the audience is technical: 'Set a goal to refactor the auth module and Claude handles the subtasks.'",
  },
  {
    slideId: 5,
    title: "System Prompt Compaction",
    duration: "~1 minute",
    notes: [
      "One of the more subtle but important features. Long sessions degrade — Claude starts forgetting your conventions, your preferences, your constraints.",
      "Compaction automatically prioritizes what's essential in the system prompt and trims the rest.",
      "Your intent is preserved even hours into a session. Workflows stay coherent.",
      "This is especially critical for enterprise use cases where sessions run overnight or across multiple work blocks.",
    ],
    tips: "You can describe it as 'memory management for long conversations' if you need a quick analogy.",
  },
  {
    slideId: 6,
    title: "/radio",
    duration: "~45 seconds",
    notes: [
      "This one's a bit unexpected — and that's the point.",
      "Claude FM is a built-in lo-fi audio station. You can pipe ambient music directly into your coding environment without switching apps.",
      "It's a small thing, but it signals something important: Anthropic is thinking about the developer experience holistically, not just technically.",
      "It reduces friction. Fewer distractions. One less reason to leave the tool.",
    ],
    tips: "Keep this light. It's a fun feature — you can smile while presenting it. Maybe joke 'finally, a feature for the vibes.'",
  },
  {
    slideId: 7,
    title: "Expanded Use Cases",
    duration: "~1 minute",
    notes: [
      "Together, these features open up workflows that simply weren't practical before.",
      "You can generate PRs, update dashboards, and run data pipelines all concurrently — Claude managing each as a background agent.",
      "Looping jobs with visible runtimes means you can see how long something has been running and intervene if needed.",
      "For teams, this means Claude can participate in collaborative work without slowing anyone down.",
    ],
    tips: "This is a good moment to ask the audience: 'What's a task you currently do manually that this could handle?'",
  },
  {
    slideId: 8,
    title: "Know the Limits",
    duration: "~45 seconds",
    notes: [
      "No tech is perfect. Two real constraints to call out.",
      "First: token consumption. Multiple agents running simultaneously can get expensive fast. Budget accordingly.",
      "Second: session caps. If you're running many concurrent projects, you may hit limits. Plan your architecture around this.",
      "Neither of these are blockers for most use cases — but ignoring them leads to nasty surprises at billing time.",
    ],
    tips: "Be matter-of-fact here. Honesty about limits builds trust with a technical audience.",
  },
  {
    slideId: 9,
    title: "Availability",
    duration: "~30 seconds",
    notes: [
      "This is in research preview — meaning it's live, you can use it now, but expect some rough edges.",
      "Access is available on Pro, Max, Team, Enterprise, and the Cloud API.",
      "If you're on a paid plan, check your Claude Code settings today — these features may already be waiting for you.",
    ],
    tips: "Encourage the audience to try it. Give them a reason to act today, not 'eventually.'",
  },
  {
    slideId: 10,
    title: "Closing",
    duration: "~1 minute",
    notes: [
      "Let's zoom out. What does this update actually mean?",
      "Claude Code is evolving from a smart autocomplete into a development platform. An environment where agents run, collaborate, and produce — with you as the director.",
      "Agent View gives you visibility. /goal gives you leverage. Compaction gives you reliability. /radio gives you focus.",
      "The developers who learn to orchestrate these tools will ship faster, think bigger, and stay in flow longer.",
      "That's the bet Anthropic is making — and it's a good one.",
      "Thanks for listening. Happy to take questions.",
    ],
    tips: "End with energy. This is your 'call to action' moment — leave the audience feeling excited to try something new.",
  },
];
