import React from "react";
import { motion } from "framer-motion";

export default function LogoChip({ name, color }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      className="group relative"
    >
      {/* Glow Effect */}
      <div
        className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity"
        style={{ backgroundColor: color }}
      />
      
      {/* Chip */}
      <div className="relative px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-colors">
        <div className="flex items-center gap-3">
          {/* Logo Circle */}
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-soft"
            style={{ backgroundColor: color }}
          >
            {name.slice(0, 2).toUpperCase()}
          </div>
          
          {/* Name */}
          <span className="text-sm font-medium text-white/95">{name}</span>
        </div>
      </div>
    </motion.div>
  );
}