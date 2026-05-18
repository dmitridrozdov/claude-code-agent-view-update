# Claude Code Presentation

A stylish Next.js 14 + TypeScript presentation in dark scheme covering the Claude Code Agent View update (May 2026).

## Features

- **Grid View** (`/`) — Overview of all 10 slides with hover effects
- **Slide Viewer** (`/slides/[id]`) — Full-screen slide presentation with keyboard navigation
- **Speaker Notes** (`/notes`) — Detailed notes on what to say for each slide, with timing estimates

## Slides

1. Title — Claude Code Agent View Update
2. Overview — Four new features at a glance
3. Agent View — Centralized session management
4. /goal — Autonomous outcome-based execution
5. System Prompt Compaction — Context preservation
6. /radio — Built-in lo-fi coding companion
7. Expanded Use Cases
8. Limitations
9. Availability
10. The Bigger Picture — Closing

## Navigation

- **Arrow keys** (←/→) to navigate slides
- **Progress dots** to jump to any slide
- **Speaker Notes** link opens `/notes` in a new tab

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- CSS Modules
- Framer Motion (available for extended animations)
- Syne + Space Mono + DM Sans fonts
