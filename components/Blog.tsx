"use client";

import { PenLine } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import FadeIn from "./ui/FadeIn";

export default function Blog() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="blog" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Writing"
          title="Blog"
          className="mb-16"
        />

        <FadeIn>
          <div className="max-w-2xl mx-auto border border-dashed border-border rounded-xl p-12 text-center">
            <motion.div
              animate={
                prefersReducedMotion
                  ? {}
                  : { opacity: [0.4, 1, 0.4] }
              }
              transition={
                prefersReducedMotion
                  ? {}
                  : {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
              className="inline-flex mb-6"
            >
              <PenLine size={32} className="text-accent" />
            </motion.div>

            <h3 className="text-lg font-semibold text-text-primary mb-3 font-[family-name:var(--font-display)]">
              Under Construction
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed max-w-md mx-auto" style={{ lineHeight: 1.75 }}>
              I&apos;m putting my thoughts on paper — on building systems, AI,
              competitive programming, and engineering. Check back soon.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
