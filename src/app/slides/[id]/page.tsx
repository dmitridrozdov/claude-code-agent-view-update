import { slides } from "@/data/slides";
import { SlideViewer } from "@/components/SlideViewer";
import { notFound } from "next/navigation";

interface SlidePageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return slides.map((s) => ({ id: String(s.id) }));
}

export default function SlidePage({ params }: SlidePageProps) {
  const id = parseInt(params.id, 10);
  const slideIndex = slides.findIndex((s) => s.id === id);

  if (slideIndex === -1) notFound();

  return <SlideViewer slides={slides} initialSlide={slideIndex} />;
}
