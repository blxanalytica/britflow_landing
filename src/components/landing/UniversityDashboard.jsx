
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, CheckSquare, Users, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";
import GradientButton from "../ui/GradientButton";

export default function UniversityDashboard({ onOpenSignup }) {
  const features = [
    {
      icon: CheckSquare,
      title: "Pre-arrival checklists",
      description: "Visa, CAS timing, TB test, accommodation tasks—linked to sources"
    },
    {
      icon: FileCheck,
      title: "Term-time work rules",
      description: "Personalized by visa type with citations"
    },
    {
      icon: Users,
      title: "Bulk support",
      description: "Upload cohorts to generate per-student checklists"
    },
    {
      icon: FileCheck,
      title: "Compliance view",
      description: "Evidence trails, time-stamped sources, exportable reports"
    }
  ];

  return (
    <section id="products" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E14] via-[#131826] to-[#0B0E14]" />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#356AE6] to-[#9AA4FF] mb-6">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-4 text-white/95">
            University Dashboard
          </h2>
          <p className="text-xl text-white/80 mb-2">For international offices</p>
          <p className="text-lg text-white/70 leading-relaxed">
            Give students clarity from acceptance to arrival
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#356AE6] to-[#9AA4FF] rounded-2xl blur-xl opacity-0 group-hover:opacity-15 transition-opacity" />
              <div className="relative rounded-2xl border border-white/10 bg-[#0E121B]/80 backdrop-blur-xl p-6 hover:border-white/20 transition-colors">
                <div className="flex items-start gap-4">
                  <feature.icon className="w-6 h-6 text-[#356AE6] flex-shrink-0 mt-1" />
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
          <GradientButton size="lg" onClick={onOpenSignup}>
            See the University Dashboard
          </GradientButton>
          <p className="text-sm text-white/60 mt-4">Book a demo for your international office</p>
        </motion.div>
      </div>
    </section>
  );
}
