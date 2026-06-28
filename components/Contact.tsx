import { Mail, Phone, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./ui/Icons";
import SectionHeading from "./ui/SectionHeading";
import FadeIn from "./ui/FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 section-alt">
      <div className="max-w-xl mx-auto px-6 text-center">
        <SectionHeading
          eyebrow="Get in touch"
          title="Say Hello"
          className="mb-8"
        />

        <FadeIn delay={0.1}>
          <p className="text-text-secondary mb-10 leading-relaxed" style={{ lineHeight: 1.75 }}>
            Whether you have a role, a project, or just want to connect — my
            inbox is always open.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="space-y-4 mb-10">
            <a
              href="mailto:khushalsirvi.work@gmail.com"
              className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl border border-border bg-background hover:border-accent/30 transition-colors duration-200 text-text-primary"
            >
              <Mail size={18} className="text-accent" />
              <span className="text-sm">khushalsirvi.work@gmail.com</span>
            </a>
            <a
              href="tel:+917878003773"
              className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl border border-border bg-background hover:border-accent/30 transition-colors duration-200 text-text-primary"
            >
              <Phone size={18} className="text-accent" />
              <span className="text-sm">+91 7878003773</span>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex items-center justify-center gap-5 mb-10">
            <a
              href="https://github.com/kdsirax"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/40 transition-colors duration-200"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://linkedin.com/in/khushalsirvi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/40 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="https://instagram.com/khushal.rathore__"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/40 transition-colors duration-200"
              aria-label="Instagram"
            >
              <InstagramIcon size={18} />
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <a
            href="mailto:khushalsirvi.work@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-background text-sm font-medium rounded-lg hover:bg-accent-hover transition-colors duration-200"
          >
            Send a message
            <ArrowRight size={16} />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
