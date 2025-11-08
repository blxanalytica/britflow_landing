
import React from "react";
import { motion } from "framer-motion";
import { Shield, CheckCircle, Link as LinkIcon, Lock } from "lucide-react";

export default function WhyTrust() {
  const features = [
    { 
      icon: Shield, 
      title: "UK-first, verified data",
      description: "Official sources only"
    },
    { 
      icon: CheckCircle, 
      title: "Agent workflow > black-box chat",
      description: "Verify → process → answer"
    },
    { 
      icon: LinkIcon, 
      title: "Citations you can click",
      description: "Every claim is footnoted"
    },
    { 
      icon: Lock, 
      title: "Privacy by design",
      description: "Opt-in history; no data resale"
    },
  ];

  const metrics = [
    { value: "100%", label: "Policy answers include citations" },
    { value: "~2s", label: "Typical answer time" },
    { value: "0", label: "Tolerance for hallucinations" }
  ];

  return (
    <section id="why-trust" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E14] via-[#0C0F16] to-[#0B0E14]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-4 text-white/95">
            Why Trust{" "}
            <span className="bg-gradient-to-r from-[#356AE6] to-[#D79442] bg-clip-text text-transparent">
              BritFlow
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#356AE6] to-[#D79442] rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity" />
              <div className="relative rounded-2xl border border-white/10 bg-[#131826]/50 backdrop-blur-xl p-6 text-center hover:border-white/20 transition-colors h-full">
                <feature.icon className="w-10 h-10 mx-auto mb-4 text-[#356AE6]" />
                <h3 className="font-semibold mb-2 text-white/95 text-sm">{feature.title}</h3>
                <p className="text-xs text-white/70">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-[#356AE6] to-[#D79442] bg-clip-text text-transparent mb-2">
                {metric.value}
              </div>
              <p className="text-sm text-white/70">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-white/60 text-sm italic">
            The agent refuses when evidence is thin
          </p>
        </motion.div>
      </div>
    </section>
  );
}
