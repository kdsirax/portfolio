import { Layers, Database, Cpu } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import FadeIn from "./ui/FadeIn";

const expertiseCards = [
  {
    icon: Layers,
    title: "Full-Stack Development",
    description:
      "Building end-to-end products with Next.js, React, Node.js, and REST/GraphQL APIs — from auth flows to responsive frontends.",
  },
  {
    icon: Database,
    title: "Backend & Data Engineering",
    description:
      "Designing Kafka pipelines, vector database integrations (Qdrant), and scalable API architectures with JWT auth, rate limiting, and production-grade error handling.",
  },
  {
    icon: Cpu,
    title: "AI/ML Integration",
    description:
      "Implementing RAG pipelines, LLM-powered features, and prompt engineering workflows into real products with measurable outcomes.",
  },
];

export default function Expertise() {
  return (
    <section className="py-24 md:py-32 section-alt">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="What I Do"
          title="Where'm I Expert?"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {expertiseCards.map((card, index) => (
            <FadeIn key={card.title} delay={index * 0.1}>
              <div className="bg-background rounded-xl p-7 border border-border hover:border-accent/30 transition-colors duration-200 h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <card.icon size={22} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-3 font-[family-name:var(--font-display)]">
                  {card.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed" style={{ lineHeight: 1.75 }}>
                  {card.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
