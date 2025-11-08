import React from "react";
import { motion } from "framer-motion";

export default function Badge({ children, icon: Icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/15 text-[13px] font-medium text-white/80 hover:border-white/25 transition-colors"
    >
      {Icon && <Icon className="w-4 h-4 text-[#356AE6]" />}
      {children}
    </motion.div>
  );
}