import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import GradientButton from "../ui/GradientButton";

export default function BigCTA() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#356AE6] via-[#9AA4FF] to-[#D79442] rounded-[3rem] blur-3xl opacity-25" />
          
          {/* Card */}
          <div className="relative rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#131826] to-[#0B0E14] overflow-hidden">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />

            {/* Content */}
            <div className="relative px-8 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
              >
                <Sparkles className="w-4 h-4 text-[#7CF59F]" />
                <span className="text-sm font-medium text-white/80">No credit card required</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl sm:text-4xl lg:text-6xl font-medium tracking-tight mb-6 leading-tight text-white/95"
              >
                Start automating{" "}
                <span className="bg-gradient-to-r from-[#356AE6] via-[#9AA4FF] to-[#D79442] bg-clip-text text-transparent">
                  in minutes
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8 max-w-2xl mx-auto"
              >
                Join thousands of teams building powerful AI workflows.
                Free forever for your first 1,000 executions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <GradientButton size="lg">
                  Get started for free
                </GradientButton>
                <button className="px-6 py-3 rounded-2xl text-white/95 font-medium hover:bg-white/5 transition-colors">
                  Talk to sales
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}