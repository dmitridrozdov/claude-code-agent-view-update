"use client";

import { Slide } from "@/data/slides";
import Link from "next/link";
import styles from "./SlideCard.module.css";

interface SlideCardProps {
  slide: Slide;
  index: number;
}

export function SlideCard({ slide, index }: SlideCardProps) {
  return (
    <div
      className={styles.card}
      style={
        {
          "--accent": slide.accentColor,
          animationDelay: `${index * 60}ms`,
        } as React.CSSProperties
      }
    >
      {/* Tag */}
      <div className={styles.tag}>{slide.tag}</div>

      {/* Icon */}
      <div className={styles.icon} style={{ color: slide.accentColor }}>
        {slide.icon}
      </div>

      {/* Slide number */}
      <div className={styles.slideNum}>
        {String(slide.id).padStart(2, "0")}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h2 className={styles.title}>{slide.title}</h2>
        {slide.subtitle && (
          <p className={styles.subtitle}>{slide.subtitle}</p>
        )}

        {slide.bullets && slide.bullets.length > 0 && (
          <ul className={styles.bullets}>
            {slide.bullets.slice(0, 3).map((b, i) => (
              <li key={i} className={styles.bullet}>
                <span
                  className={styles.bulletDot}
                  style={{ background: slide.accentColor }}
                />
                {b}
              </li>
            ))}
            {slide.bullets.length > 3 && (
              <li className={styles.moreBullets}>
                +{slide.bullets.length - 3} more
              </li>
            )}
          </ul>
        )}

        {slide.highlight && !slide.bullets && (
          <blockquote
            className={styles.highlight}
            style={{ borderColor: slide.accentColor }}
          >
            {slide.highlight}
          </blockquote>
        )}
      </div>

      {/* Notes link */}
      <Link
        href={`/notes#slide-${slide.id}`}
        className={styles.notesLink}
        style={
          {
            "--accent": slide.accentColor,
          } as React.CSSProperties
        }
      >
        Speaker notes →
      </Link>

      {/* Glow */}
      <div
        className={styles.glow}
        style={{ background: slide.accentColor }}
      />
    </div>
  );
}
