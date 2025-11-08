import React from "react";
import { motion } from "framer-motion";
import { Code2, FileJson, Shield, Zap } from "lucide-react";
import GradientButton from "../ui/GradientButton";

export default function LLMService() {
  const features = [
    {
      icon: FileJson,
      title: "Cited JSON responses",
      description: "Content + footnotes + provenance"
    },
    {
      icon: Shield,
      title: "Policy-aware routing",
      description: "UK allow-list by default; you control domains"
    },
    {
      icon: Shield,
      title: "Guardrails",
      description: "Auto 'no-answer' on weak evidence"
    },
    {
      icon: Zap,
      title: "Latency budget",
      description: "Answers in ~2 seconds for typical queries"
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D79442] to-[#E8A058] mb-6">
              <Code2 className="w-7 h-7 text-white" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-4 text-white/95">
              LLM Service
            </h2>
            <p className="text-xl text-white/80 mb-6">For developers & partners</p>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Use BritFlow's policy-aware answering as an API.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D79442]/20 to-[#E8A058]/20 border border-[#D79442]/30 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-[#D79442]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white/95 mb-1">{feature.title}</h3>
                    <p className="text-sm text-white/70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <GradientButton>Explore the API</GradientButton>
            <p className="text-sm text-white/60 mt-4">Get API access</p>
          </motion.div>

          {/* Right: Code Example */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#D79442] to-[#356AE6] rounded-3xl blur-3xl opacity-15" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0B0E14] shadow-soft">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#D79442]/50" />
                  <div className="w-3 h-3 rounded-full bg-[#7CF59F]/50" />
                  <div className="w-3 h-3 rounded-full bg-[#356AE6]/50" />
                </div>
                <span className="text-xs text-white/70 ml-2">api-example.json</span>
              </div>

              <div className="p-6 font-mono text-sm space-y-2 overflow-x-auto">
                <div className="text-white/70">{'{'}</div>
                <div className="text-white/70 pl-4">
                  <span className="text-[#D79442]">"query"</span>: 
                  <span className="text-[#7CF59F]"> "Skilled Worker visa salary threshold?"</span>,
                </div>
                <div className="text-white/70 pl-4">
                  <span className="text-[#D79442]">"answer"</span>: 
                  <span className="text-[#7CF59F]"> "£38,700 or role-specific..."</span>,
                </div>
                <div className="text-white/70 pl-4">
                  <span className="text-[#D79442]">"citations"</span>: [
                </div>
                <div className="text-white/70 pl-8">{'{'}</div>
                <div className="text-white/70 pl-12">
                  <span className="text-[#D79442]">"source"</span>: 
                  <span className="text-[#7CF59F]"> "GOV.UK"</span>,
                </div>
                <div className="text-white/70 pl-12">
                  <span className="text-[#D79442]">"url"</span>: 
                  <span className="text-[#356AE6]"> "https://..."</span>,
                </div>
                <div className="text-white/70 pl-12">
                  <span className="text-[#D79442]">"timestamp"</span>: 
                  <span className="text-[#7CF59F]"> "2025-01-15"</span>
                </div>
                <div className="text-white/70 pl-8">{'}'}</div>
                <div className="text-white/70 pl-4">{']'}</div>
                <div className="text-white/70">{'}'}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}