import React from "react";
import { motion } from "framer-motion";

export default function ScrollHint() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white/70"
    >
      <p className="text-xs tracking-wider uppercase mb-2">Scroll to explore</p>
      <div className="h-6 w-10 rounded-full border border-white/20 mx-auto flex items-center justify-center">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-2 w-2 rounded-full bg-white/80"
        />
      </div>
    </motion.div>
  );
}