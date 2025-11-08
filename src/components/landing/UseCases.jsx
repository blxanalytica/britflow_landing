
import React from "react";
import { motion } from "framer-motion";
import { FileText, MapPin, Clipboard, Users } from "lucide-react";

export default function UseCases() {
  const useCases = [
    {
      icon: FileText,
      title: "Visa & Policy",
      description: "See eligibility, documents, timelines—always cited.",
      color: "#356AE6"
    },
    {
      icon: MapPin,
      title: "City Fit",
      description: "Weigh rent, commute, and safety signals with clear trade-offs.",
      color: "#9AA4FF"
    },
    {
      icon: Clipboard,
      title: "Onboarding",
      description: "Register with a GP, set up council tax, and more—step by step.",
      color: "#D79442"
    },
    {
      icon: Users,
      title: "Family Move",
      description: "Admissions timing and catchments explained in plain language.",
      color: "#E9B77C"
    }
  ];

  return (
    <section id="use-cases" className="py-20 lg:py-32 relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-4 text-white/95">
            Use Cases
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            BritFlow covers every stage of your UK move
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div 
                className="absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity"
                style={{ background: `linear-gradient(135deg, ${useCase.color}, ${useCase.color}33)` }}
              />
              <div className="relative h-full rounded-3xl border border-white/10 bg-[#131826]/50 backdrop-blur-xl p-8 hover:border-white/20 transition-colors">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-soft"
                  style={{ background: `linear-gradient(135deg, ${useCase.color}, ${useCase.color}dd)` }}
                >
                  <useCase.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white/95">{useCase.title}</h3>
                <p className="text-white/70 leading-relaxed">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
