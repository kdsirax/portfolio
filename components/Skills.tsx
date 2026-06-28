import { Code2, Layers, Terminal, Database, Settings, Sparkles } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import FadeIn from "./ui/FadeIn";
import { skillGroups } from "@/data/skills";

const categoryMeta: Record<string, { icon: React.ComponentType<any>; colorClass: string; bgClass: string }> = {
  "Languages": { icon: Code2, colorClass: "text-sky-400", bgClass: "bg-sky-400/10" },
  "Frontend": { icon: Layers, colorClass: "text-indigo-400", bgClass: "bg-indigo-400/10" },
  "Backend": { icon: Terminal, colorClass: "text-emerald-400", bgClass: "bg-emerald-400/10" },
  "Databases": { icon: Database, colorClass: "text-rose-400", bgClass: "bg-rose-400/10" },
  "DevOps & Tools": { icon: Settings, colorClass: "text-amber-400", bgClass: "bg-amber-400/10" },
  "Gen AI": { icon: Sparkles, colorClass: "text-purple-400", bgClass: "bg-purple-400/10" }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Skills"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIndex) => {
            const meta = categoryMeta[group.label] || { icon: Code2, colorClass: "text-accent", bgClass: "bg-accent/10" };
            const Icon = meta.icon;

            return (
              <FadeIn key={group.label} delay={groupIndex * 0.08}>
                <div className="bg-surface rounded-xl p-6 border border-border hover:border-accent/30 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 rounded-lg ${meta.bgClass} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-5 h-5 ${meta.colorClass}`} />
                    </div>
                    <h3 className="text-base font-semibold text-text-primary font-[family-name:var(--font-display)]">
                      {group.label}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-code text-tag-text text-xs px-3 py-1.5 rounded-full border border-border hover:border-accent/40 transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
