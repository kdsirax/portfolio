import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./ui/Icons";
import SectionHeading from "./ui/SectionHeading";
import FadeIn from "./ui/FadeIn";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 section-alt">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Work"
          title="My Projects"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <div className="bg-background rounded-xl p-6 border border-border hover:border-accent/30 transition-colors duration-200 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-display)]">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="text-[10px] font-medium uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-accent">{project.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/40 transition-colors duration-200"
                      aria-label={`${project.title} GitHub`}
                    >
                      <GithubIcon size={16} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/40 transition-colors duration-200"
                        aria-label={`${project.title} Demo`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-grow" style={{ lineHeight: 1.75 }}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-code text-tag-text text-xs px-2.5 py-1 rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
