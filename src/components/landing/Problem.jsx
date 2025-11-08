
import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, Shield, Link as LinkIcon } from "lucide-react";

export default function Problem() {
  const valuePillars = [
    {
      icon: Shield,
      title: "UK-first data only",
      description: "Allow-listed GOV.UK, ONS, NHS, local authorities"
    },
    {
      icon: CheckCircle,
      title: "Agent workflow",
      description: "Verifies before it answers"
    },
    {
      icon: LinkIcon,
      title: "Citations required",
      description: "Every claim carries a footnote"
    },
    {
      icon: AlertCircle,
      title: "No-answer when unsure",
      description: "Transparency over speculation"
    }
  ];

  return (
    <section id="problem" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Problem Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-6 text-white/95">
            Moving to the UK shouldn't require{" "}
            <span className="text-white/60">ten tabs and guesswork</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8">
            Rules change, data fragments, and forums contradict.
          </p>
          <div className="inline-block px-6 py-3 rounded-2xl bg-gradient-to-r from-[#356AE6]/10 to-[#D79442]/10 border border-white/10 backdrop-blur-xl">
            <p className="text-xl font-medium text-white/95">
              <span className="bg-gradient-to-r from-[#356AE6] to-[#D79442] bg-clip-text text-transparent">
                BritFlow is the turning point:
              </span>{" "}
              our LLM-guided agent does the heavy lifting—retrieving, verifying, and explaining from official sources—then shows the steps and links to act.
            </p>
          </div>
        </motion.div>

        {/* Value Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="text-2xl font-medium text-center mb-8 text-white/90">Value pillars</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuePillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#356AE6] to-[#D79442] rounded-2xl blur-xl opacity-0 group-hover:opacity-15 transition-opacity" />
                <div className="relative rounded-2xl border border-white/10 bg-[#131826]/50 backdrop-blur-xl p-6 hover:border-white/20 transition-colors h-full">
                  <pillar.icon className="w-10 h-10 text-[#356AE6] mb-4" />
                  <h4 className="text-lg font-semibold mb-2 text-white/95">{pillar.title}</h4>
                  <p className="text-sm text-white/70 leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
