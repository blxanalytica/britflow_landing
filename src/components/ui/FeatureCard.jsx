import React from "react";
import { motion } from "framer-motion";

export default function FeatureCard({ icon: Icon, title, description, code }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="relative group h-full"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#356AE6] to-[#D79442] rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity" />
      
      {/* Card */}
      <div className="relative h-full rounded-3xl border border-white/10 bg-[#0E121B]/50 backdrop-blur-xl p-8 hover:border-white/20 transition-colors flex flex-col">
        {/* Icon */}
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#356AE6] to-[#9AA4FF] flex items-center justify-center mb-6 shadow-soft">
          <Icon className="w-6 h-6 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-2xl font-semibold mb-3 text-white/95 tracking-tight">{title}</h3>
        <p className="text-white/70 leading-relaxed mb-6">{description}</p>

        {/* Code Preview */}
        {code && (
          <div className="rounded-xl border border-white/5 bg-[#0B0E14] p-4 mb-6 font-mono text-xs text-white/70 overflow-x-auto flex-grow">
            <pre className="whitespace-pre">{code}</pre>
          </div>
        )}

        {/* CTA */}
        <div className="mt-auto">
          <button className="text-sm font-medium text-[#356AE6] hover:text-white/95 transition-colors inline-flex items-center gap-2 group/btn">
            Learn more
            <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}