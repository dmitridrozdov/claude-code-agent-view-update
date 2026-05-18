import { slides, slideNotes } from "@/data/slides";
import Link from "next/link";
import styles from "./notes.module.css";

export default function NotesPage() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <Link href="/" className={styles.back}>
          ← Back to Grid
        </Link>
        <div className={styles.headerContent}>
          <span className={styles.label}>Speaker Notes</span>
          <h1 className={styles.title}>What to Say</h1>
          <p className={styles.subtitle}>
            Presentation guide for Claude Code Agent View Update · May 2026
          </p>
        </div>
        <div className={styles.quickNav}>
          <span className={styles.quickLabel}>Jump to slide:</span>
          <div className={styles.quickLinks}>
            {slides.map((s) => (
              <a key={s.id} href={`#slide-${s.id}`} className={styles.quickLink} style={{ "--accent": s.accentColor } as React.CSSProperties}>
                {String(s.id).padStart(2, "0")}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Notes list */}
      <main className={styles.main}>
        {slideNotes.map((note) => {
          const slide = slides.find((s) => s.id === note.slideId)!;
          return (
            <section
              key={note.slideId}
              id={`slide-${note.slideId}`}
              className={styles.noteCard}
              style={
                {
                  "--accent": slide.accentColor,
                } as React.CSSProperties
              }
            >
              {/* Slide reference */}
              <div className={styles.slideRef}>
                <div className={styles.slideIcon} style={{ color: slide.accentColor }}>
                  {slide.icon}
                </div>
                <div>
                  <div className={styles.slideTag}>
                    <span className={styles.tagText}>{slide.tag}</span>
                    <span className={styles.slideNum}>Slide {note.slideId}</span>
                  </div>
                  <h2 className={styles.slideTitle}>{slide.title}</h2>
                </div>
                <div className={styles.duration}>
                  <span className={styles.durationLabel}>Est. time</span>
                  <span className={styles.durationVal}>{note.duration}</span>
                </div>
              </div>

              {/* Accent line */}
              <div
                className={styles.accentLine}
                style={{ background: slide.accentColor }}
              />

              {/* Notes */}
              <div className={styles.noteSection}>
                <h3 className={styles.sectionLabel}>What to say</h3>
                <ol className={styles.notesList}>
                  {note.notes.map((n, i) => (
                    <li key={i} className={styles.noteItem}>
                      <span
                        className={styles.noteIndex}
                        style={{ color: slide.accentColor }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className={styles.noteText}>{n}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Tips */}
              {note.tips && (
                <div className={styles.tipBox} style={{ borderColor: slide.accentColor }}>
                  <span className={styles.tipIcon}>💡</span>
                  <p className={styles.tipText}>{note.tips}</p>
                </div>
              )}

              {/* Link to slide */}
              <Link
                href={`/slides/${note.slideId}`}
                className={styles.viewSlide}
                style={{ color: slide.accentColor }}
              >
                View slide {note.slideId} →
              </Link>
            </section>
          );
        })}
      </main>

      <footer className={styles.footer}>
        <Link href="/" className={styles.footerBack}>← Back to Grid View</Link>
        <Link href="/slides/1" className={styles.footerPresent}>Start Presenting →</Link>
      </footer>
    </div>
  );
}
