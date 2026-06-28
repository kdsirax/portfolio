"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon, CodolioIcon } from "./ui/Icons";
import FadeIn from "./ui/FadeIn";

const typewriterStrings = [
  "Building AI/ML pipelines",
  "Designing real-time systems",
  "Crafting full-stack products",
  "Wiring Kafka & vector databases",
  "Solving hard problems",
];

export default function Hero() {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const animateTypewriter = useCallback(() => {
    const fullText = typewriterStrings[currentStringIndex];

    if (!isDeleting) {
      if (currentText.length < fullText.length) {
        return setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        }, 60);
      } else {
        return setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (currentText.length > 0) {
        return setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        }, 30);
      } else {
        setIsDeleting(false);
        setCurrentStringIndex(
          (prev) => (prev + 1) % typewriterStrings.length
        );
        return undefined;
      }
    }
  }, [currentText, isDeleting, currentStringIndex]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setCurrentText(typewriterStrings[currentStringIndex]);
      const interval = setInterval(() => {
        setCurrentStringIndex(
          (prev) => (prev + 1) % typewriterStrings.length
        );
      }, 3000);
      return () => clearInterval(interval);
    }

    const timeout = animateTypewriter();
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [animateTypewriter, prefersReducedMotion, currentStringIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = prefersReducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" as const },
        },
      };

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center dot-grid"
    >
      <div className="max-w-6xl mx-auto px-6 py-32 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left: Introduction */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center">
            <motion.p
              variants={itemVariants}
              className="text-xs tracking-widest uppercase text-accent mb-6 font-medium"
            >
              Full-Stack Developer &amp; AI Builder
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-semibold text-text-primary mb-6 font-[family-name:var(--font-display)]"
              style={{ letterSpacing: "-0.03em" }}
            >
              Khushal Sirvi
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-xl md:text-2xl text-text-secondary mb-8 min-h-[3rem] sm:min-h-0 md:h-9"
            >
              <span>{currentText}</span>
              <span className="typewriter-cursor" />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-text-secondary leading-relaxed mb-10 max-w-xl"
              style={{ lineHeight: 1.75 }}
            >
              B.Tech. Information Technology student at IIIT Una. I build
              intelligent, production-ready systems — from RAG pipelines and
              Kafka data infrastructure to polished Next.js products.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-10"
            >
              <button
                onClick={() => handleScroll("#projects")}
                className="px-7 py-3 bg-accent text-background text-sm font-medium rounded-lg hover:bg-accent-hover transition-colors duration-200"
              >
                View Projects
              </button>
              <button
                onClick={() => handleScroll("#contact")}
                className="px-7 py-3 border border-border text-text-primary text-sm font-medium rounded-lg hover:border-accent/40 transition-colors duration-200"
              >
                Contact Me
              </button>
              <a
                href="https://drive.google.com/file/d/1VaBleYnexHkrXAtmbOFIpOF2x_b1CIEl/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 border border-border text-text-primary text-sm font-medium rounded-lg hover:border-accent/40 transition-colors duration-200"
              >
                <Download size={16} />
                Resume
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-5"
            >
              <a
                href="https://github.com/kdsirax"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors duration-200"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://linkedin.com/in/khushalsirvi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="https://codolio.com/profile/khushal_sirvi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors duration-200"
                aria-label="Codolio"
              >
                <CodolioIcon size={20} />
              </a>
              <a
                href="mailto:khushalsirvi.work@gmail.com"
                className="text-text-secondary hover:text-accent transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </div>

          {/* Right: Circular Profile Image */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              variants={itemVariants}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-border p-2 bg-surface hover:border-accent/40 transition-all duration-300 shadow-xl"
            >
              <img
                src="/profile.jpeg"
                alt="Khushal Sirvi"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
