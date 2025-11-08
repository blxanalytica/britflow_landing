import React from "react";
import { motion } from "framer-motion";

export default function GradientButton({ 
  children, 
  variant = "primary", 
  size = "default",
  icon: Icon,
  className = "",
  ...props 
}) {
  const sizeClasses = {
    default: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  if (variant === "ghost") {
    return (
      <button
        className={`rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all text-white/95 font-medium ${sizeClasses[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative group ${sizeClasses[size]} font-medium rounded-2xl overflow-hidden ${className}`}
      {...props}
    >
      {/* Gradient Background - blue to amber */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#356AE6] via-[#9AA4FF] to-[#D79442] opacity-100 group-hover:opacity-90 transition-opacity" />
      
      {/* Glow Effect */}
      <div 
        className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity"
        style={{
          background: 'radial-gradient(circle at center, rgba(53,106,230,0.4), rgba(217,148,66,0.3))'
        }}
      />
      
      {/* Content */}
      <span className="relative flex items-center justify-center gap-2 text-white font-medium">
        {children}
        {Icon && <Icon className="w-4 h-4" />}
      </span>
    </motion.button>
  );
}