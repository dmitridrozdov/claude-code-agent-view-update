import Link from "next/link";
import { slides } from "@/data/slides";
import { SlideCard } from "@/components/SlideCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.headerLeft}>
            <span className={styles.badge}>May 2026</span>
            <h1 className={styles.headline}>Claude Code Update</h1>
            <p className={styles.description}>
              Agent View · /goal · Prompt Compaction · /radio
            </p>
          </div>
          <div className={styles.headerActions}>
            <Link href="/slides/1" className={styles.btnPrimary}>
              Present →
            </Link>
            <Link href="/notes" className={styles.btnSecondary}>
              Speaker Notes
            </Link>
          </div>
        </div>

        {/* Decorative line */}
        <div className={styles.headerLine} />
      </header>

      {/* Stats bar */}
      <div className={styles.statsBar}>
        <div className={styles.stat}>
          <span className={styles.statNum}>10</span>
          <span className={styles.statLabel}>Slides</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.stat}>
          <span className={styles.statNum}>4</span>
          <span className={styles.statLabel}>New Features</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.stat}>
          <span className={styles.statNum}>~10</span>
          <span className={styles.statLabel}>Min Runtime</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.stat}>
          <span className={styles.statNum}>5</span>
          <span className={styles.statLabel}>Plans Supported</span>
        </div>
      </div>

      {/* Grid */}
      <section className={styles.grid}>
        {slides.map((slide, i) => (
          <Link
            key={slide.id}
            href={`/slides/${slide.id}`}
            className={styles.cardLink}
          >
            <SlideCard slide={slide} index={i} />
          </Link>
        ))}
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <span className={styles.footerText}>
          Built with Next.js & TypeScript
        </span>
      </footer>
    </main>
  );
}
