import SectionHeading from "./ui/SectionHeading";
import FadeIn from "./ui/FadeIn";

const stats = [
  { value: "8.3", label: "CGPA at IIIT Una" },
  { value: "2", label: "Hackathon Competed" },
  { value: "3", label: "Production projects shipped" },
  { value: "400+", label: "LeetCode Problems Solved" },

];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 section-alt">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="About" title="Me, Myself and I" className="mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Bio — 60% */}
          <FadeIn className="lg:col-span-3" delay={0.1}>
            <div className="space-y-6 text-text-secondary" style={{ lineHeight: 1.75 }}>
              <p>
                I&apos;m a full-stack developer passionate about building intelligent,
                scalable systems. I got started tinkering with web projects during
                school, and that curiosity turned into a serious commitment to
                software engineering at IIIT Una, where I&apos;m pursuing my B.Tech. in
                Information Technology.
              </p>
              <p>
                I&apos;ve shipped production systems at Huemanx — Kafka-based ingestion
                pipelines, Qdrant vector database integrations, and automated
                scraping tools used in live sales workflows. I&apos;m open to
                full-stack, backend, or AI-adjacent roles. Feel free to reach out.
              </p>
            </div>
          </FadeIn>

          {/* Stats — 40% */}
          <FadeIn className="lg:col-span-2" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-background rounded-xl p-5 border border-border hover:border-accent/30 transition-colors duration-200"
                >
                  <div className="text-2xl font-semibold text-accent mb-1 font-[family-name:var(--font-display)]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
