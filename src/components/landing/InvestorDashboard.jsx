import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Radar, MapPin, FileText } from "lucide-react";
import GradientButton from "../ui/GradientButton";

export default function InvestorDashboard() {
  const features = [
    {
      icon: Radar,
      title: "Policy change radar",
      description: "Watch lists and alerts on thresholds, processing, and routes"
    },
    {
      icon: MapPin,
      title: "City suitability",
      description: "Rent and commute trends for target teams"
    },
    {
      icon: FileText,
      title: "Onboarding friction",
      description: "GP registration and council setup wait indicators"
    },
    {
      icon: FileText,
      title: "Evidence-ready briefs",
      description: "Snapshots with citations for leadership decks"
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#356AE6] to-[#D79442] mb-6">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-4 text-white/95">
            Investor Dashboard
          </h2>
          <p className="text-xl text-white/80 mb-2">For employers & funds</p>
          <p className="text-lg text-white/70 leading-relaxed">
            Relocation signals that affect hiring and expansion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#356AE6] to-[#D79442] rounded-2xl blur-xl opacity-0 group-hover:opacity-15 transition-opacity" />
              <div className="relative rounded-2xl border border-white/10 bg-[#131826]/50 backdrop-blur-xl p-6 hover:border-white/20 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#356AE6]/20 to-[#D79442]/20 border border-[#356AE6]/30 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-[#356AE6]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white/95">{feature.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <GradientButton size="lg">
            View investor insights
          </GradientButton>
          <p className="text-sm text-white/60 mt-4">See the dashboard</p>
        </motion.div>
      </div>
    </section>
  );
}