import { Briefcase, GraduationCap } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import FadeIn from "./ui/FadeIn";
import { journeyEntries } from "@/data/journey";

export default function Journey() {
  return (
    <section id="journey" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Experience & Education"
          title="My Journey"
          className="mb-16"
        />

        <div className="relative">
          {/* Center line — desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {journeyEntries.map((entry, index) => {
              const isLeft = index % 2 === 0;
              const Icon =
                entry.type === "work" ? Briefcase : GraduationCap;

              return (
                <FadeIn
                  key={`${entry.title}-${entry.org}`}
                  delay={index * 0.1}
                  className="relative"
                >
                  <div
                    className={`md:flex md:items-start ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Card */}
                    <div className="md:w-[calc(50%-2rem)] w-full">
                      <div className="bg-surface rounded-xl p-6 border border-border hover:border-accent/30 transition-colors duration-200">
                        <div className="flex items-center gap-3 mb-3">
                          {entry.logo ? (
                            <div className="w-9 h-9 rounded-lg bg-white overflow-hidden flex items-center justify-center p-1 flex-shrink-0 border border-border">
                              <img
                                src={entry.logo}
                                alt={`${entry.org} Logo`}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          ) : (
                            <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                              <Icon size={16} className="text-accent" />
                            </div>
                          )}
                          <span className="text-xs text-text-secondary">
                            {entry.period}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-text-primary mb-1 font-[family-name:var(--font-display)]">
                          {entry.title}
                        </h3>
                        <p className="text-sm text-accent mb-3">{entry.org}</p>

                        {entry.description && (
                          <p className="text-sm text-text-secondary leading-relaxed">
                            {entry.description}
                          </p>
                        )}

                        {entry.bullets && (
                          <ul className="space-y-2 mt-2">
                            {entry.bullets.map((bullet) => (
                              <li
                                key={bullet}
                                className="text-sm text-text-secondary leading-relaxed flex gap-2"
                              >
                                <span className="text-accent mt-1.5 flex-shrink-0">
                                  •
                                </span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>

                    {/* Center dot — desktop only */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent/20 border-2 border-accent items-center justify-center top-8">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
