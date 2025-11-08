import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import GradientButton from "../ui/GradientButton";

export default function CodeVsUI() {
  const benefits = [
    "Full TypeScript support with autocomplete",
    "Version control with Git",
    "Reusable components and functions",
    "Test locally before deploying",
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background panel */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-6 text-white/95">
              Code when you{" "}
              <span className="bg-gradient-to-r from-[#356AE6] to-[#5B8BFF] bg-clip-text text-transparent">
                need power
              </span>
              .<br />
              UI when you want{" "}
              <span className="bg-gradient-to-r from-[#D79442] to-[#E8A058] bg-clip-text text-transparent">
                speed
              </span>
              .
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Switch seamlessly between code and visual editing. Use what works best for each
              part of your workflow.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#356AE6] to-[#5B8BFF] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/95">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <GradientButton>Explore the editor</GradientButton>
          </motion.div>

          {/* Right: Code Editor Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#356AE6] to-[#D79442] rounded-3xl blur-3xl opacity-15" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0B0E14] shadow-soft">
              {/* Editor Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#D79442]/50" />
                  <div className="w-3 h-3 rounded-full bg-[#7CF59F]/50" />
                  <div className="w-3 h-3 rounded-full bg-[#356AE6]/50" />
                </div>
                <span className="text-xs text-white/70 ml-2">workflow.ts</span>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm space-y-2">
                <div className="text-white/70">
                  <span className="text-[#D79442]">import</span>{" "}
                  <span className="text-[#7CF59F]">{'{ workflow }'}</span>{" "}
                  <span className="text-[#D79442]">from</span>{" "}
                  <span className="text-[#356AE6]">'@britflow/core'</span>;
                </div>
                <div className="h-4" />
                <div className="text-white/70">
                  <span className="text-[#356AE6]">workflow</span>
                  .on(<span className="text-[#356AE6]">'webhook'</span>, 
                  <span className="text-[#D79442]"> async </span>
                  (data) {'=>'} {'{'})
                </div>
                <div className="text-white/70 pl-4">
                  <span className="text-[#D79442]">const</span> result = 
                  <span className="text-[#D79442]"> await</span> ai
                  <span className="text-[#356AE6]">.analyze</span>(data);
                </div>
                <div className="text-white/70 pl-4">
                  <span className="text-[#D79442]">await</span> slack
                  <span className="text-[#356AE6]">.send</span>(result);
                </div>
                <div className="text-white/70">{'});'}</div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0E14] to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}