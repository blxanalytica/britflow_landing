
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import GradientButton from "../ui/GradientButton";
import Badge from "../ui/Badge";
import ScrollHint from "../ui/ScrollHint";

export default function Hero({ onOpenSignup }) {
  const [showVideo, setShowVideo] = useState(false);

  const officialSources = [
    "GOV.UK", "ONS", "NHS", "Home Office"
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            {...fadeUp}
            className="flex justify-center mb-6"
          >
            <Badge icon={Sparkles}>
              UK-first relocation intelligence
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp}
            transition={{ delay: 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.5rem,6vw,5rem)] font-medium tracking-tight leading-[1.1] mb-6 text-white/95"
          >
            UK-first relocation intelligence.{" "}
            <span className="bg-gradient-to-r from-[#356AE6] via-[#9AA4FF] to-[#D79442] bg-clip-text text-transparent">
              Answers with citations.
            </span>{" "}
            Action in minutes.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl mx-auto"
          >
            BritFlow's agent workflow reads official UK sources, reasons over them, and delivers clear, 
            cited guidance for visas, cities, and onboarding. Your plan—ready to act.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <GradientButton size="lg" icon={ArrowRight} onClick={onOpenSignup}>
              Get started
            </GradientButton>
            <button
              onClick={() => setShowVideo(true)}
              className="group flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all text-white/95 font-medium"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#356AE6] to-[#9AA4FF] flex items-center justify-center group-hover:shadow-glowSubtle transition-shadow">
                <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
              </div>
              See a sample answer
            </button>
          </motion.div>

          {/* Trust Strip */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap justify-center items-center gap-3 mb-16"
          >
            <span className="text-sm text-white/60">All sources cited in-product:</span>
            {officialSources.map((source, i) => (
              <motion.div
                key={source}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                className="px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-xs font-medium text-white/80"
              >
                {source}
              </motion.div>
            ))}
          </motion.div>

          {/* App Screenshot - Enhanced Quality */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative group cursor-pointer"
            onClick={() => setShowVideo(true)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#356AE6] via-[#9AA4FF] to-[#D79442] rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="relative bg-[#0B0E14]">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690f83d3fd9affc7ac786269/148efd9cf_Screenshot2025-11-08at203013.png"
                  alt="BritFlow Application Interface"
                  className="w-full h-auto"
                  loading="eager"
                  decoding="async"
                  style={{
                    imageRendering: '-webkit-optimize-contrast',
                    backfaceVisibility: 'hidden',
                    transform: 'translateZ(0)',
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ScrollHint />

      {/* Video Modal */}
      {showVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-5xl w-full aspect-video rounded-3xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0E121B] to-[#0B0E14] flex items-center justify-center">
              <p className="text-white/70">Sample answer demo would go here</p>
            </div>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <span className="text-white text-xl">×</span>
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
