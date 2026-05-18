import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claude Code — Agent View Update",
  description: "Presentation: Claude Code Agent View, /goal, Compaction & /radio — 2026 Update",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
