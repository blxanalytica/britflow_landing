
import React from "react";
import { motion } from "framer-motion";
import { Search, ShieldCheck, Cpu, FileText, Rocket } from "lucide-react";
import { Link } from "react-router-dom"; // This import is no longer strictly needed but kept as it was in original
import GradientButton from "../ui/GradientButton";

export default function HowItWorks({ onOpenSignup }) {
  const steps = [
    {
      icon: Search,
      number: "1",
      title: "Understand",
      description: "We classify your question (policy, city fit, onboarding, cost)."
    },
    {
      icon: ShieldCheck,
      number: "2",
      title: "Verify",
      description: "The agent retrieves passages from official sources and timestamps them."
    },
    {
      icon: Cpu,
      number: "3",
      title: "Process",
      description: "Built-in tools compute what matters (salary thresholds, timelines, local steps)."
    },
    {
      icon: FileText,
      number: "4",
      title: "Generate",
      description: "The LLM composes a short answer with footnotes and a checklist."
    },
    {
      icon: Rocket,
      number: "5",
      title: "Act",
      description: "Save your plan, open links, or hand off to your team or counselor."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-4 text-white/95">
            How BritFlow Works
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            Agent workflow in five steps
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-[#356AE6] to-transparent opacity-30" />
              )}

              <div className="flex gap-6 mb-8 relative">
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#356AE6] to-[#9AA4FF] rounded-2xl blur-lg opacity-50" />
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#356AE6] to-[#9AA4FF] flex items-center justify-center shadow-soft">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-[#D79442] flex items-center justify-center text-xs font-bold text-white shadow-soft">
                    {step.number}
                  </div>
                </div>

                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-semibold mb-2 text-white/95">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <GradientButton size="lg" onClick={onOpenSignup}>
            Try the agent with a sample query
          </GradientButton>
        </motion.div>
      </div>
    </section>
  );
}
