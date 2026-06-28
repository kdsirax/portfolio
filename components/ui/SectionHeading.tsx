import FadeIn from "./FadeIn";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  className = "",
}: SectionHeadingProps) {
  return (
    <FadeIn className={className}>
      <p className="text-xs tracking-widest uppercase text-accent mb-4 font-medium">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-text-primary font-[family-name:var(--font-display)]" style={{ letterSpacing: "-0.03em" }}>
        {title}
      </h2>
    </FadeIn>
  );
}
