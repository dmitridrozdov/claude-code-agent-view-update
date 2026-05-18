"use client";

import { useState, useEffect, useCallback } from "react";
import { Slide } from "@/data/slides";
import Link from "next/link";
import styles from "./SlideViewer.module.css";

interface SlideViewerProps {
  slides: Slide[];
  initialSlide?: number;
}

export function SlideViewer({ slides, initialSlide = 0 }: SlideViewerProps) {
  const [current, setCurrent] = useState(initialSlide);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const slide = slides[current];

  const go = useCallback(
    (dir: "next" | "prev") => {
      if (animating) return;
      const next =
        dir === "next"
          ? Math.min(current + 1, slides.length - 1)
          : Math.max(current - 1, 0);
      if (next === current) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent(next);
        setAnimating(false);
      }, 300);
    },
    [current, slides.length, animating]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") go("next");
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") go("prev");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [go]);

  return (
    <div className={styles.viewer}>
      {/* Top bar */}
      <div className={styles.topBar}>
        <Link href="/" className={styles.backLink}>
          ← Grid View
        </Link>
        <div className={styles.progress}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ""} ${i < current ? styles.dotDone : ""}`}
              style={
                i === current
                  ? ({ "--accent": slide.accentColor } as React.CSSProperties)
                  : {}
              }
              onClick={() => {
                setDirection(i > current ? "next" : "prev");
                setAnimating(true);
                setTimeout(() => {
                  setCurrent(i);
                  setAnimating(false);
                }, 300);
              }}
            />
          ))}
        </div>
        <Link
          href={`/notes#slide-${slide.id}`}
          className={styles.notesLink}
          target="_blank"
        >
          Notes ↗
        </Link>
      </div>

      {/* Slide */}
      <div
        className={`${styles.slide} ${animating ? (direction === "next" ? styles.exitLeft : styles.exitRight) : styles.enter}`}
        style={
          {
            "--accent": slide.accentColor,
          } as React.CSSProperties
        }
      >
        {/* Background accent */}
        <div
          className={styles.bgAccent}
          style={{ background: slide.accentColor }}
        />

        {/* Tag + Slide number */}
        <div className={styles.meta}>
          <span className={styles.tag}>{slide.tag}</span>
          <span className={styles.num}>
            {String(slide.id).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>

        {/* Main icon */}
        <div className={styles.icon} style={{ color: slide.accentColor }}>
          {slide.icon}
        </div>

        {/* Title */}
        <h1 className={styles.title}>{slide.title}</h1>

        {/* Subtitle */}
        {slide.subtitle && (
          <p className={styles.subtitle}>{slide.subtitle}</p>
        )}

        {/* Bullets */}
        {slide.bullets && (
          <ul className={styles.bullets}>
            {slide.bullets.map((b, i) => (
              <li
                key={i}
                className={styles.bullet}
                style={{ animationDelay: `${200 + i * 80}ms` }}
              >
                <span
                  className={styles.bulletLine}
                  style={{ background: slide.accentColor }}
                />
                {b}
              </li>
            ))}
          </ul>
        )}

        {/* Highlight */}
        {slide.highlight && (
          <blockquote
            className={styles.highlight}
            style={{ borderColor: slide.accentColor }}
          >
            <span
              className={styles.highlightBar}
              style={{ background: slide.accentColor }}
            />
            {slide.highlight}
          </blockquote>
        )}
      </div>

      {/* Nav */}
      <div className={styles.nav}>
        <button
          className={styles.navBtn}
          onClick={() => go("prev")}
          disabled={current === 0}
        >
          ←
        </button>
        <span className={styles.navLabel}>
          {current + 1} of {slides.length}
        </span>
        <button
          className={styles.navBtn}
          onClick={() => go("next")}
          disabled={current === slides.length - 1}
        >
          →
        </button>
      </div>
    </div>
  );
}
