import React from "react";
import { motion } from "framer-motion";
import { Zap, Database, Globe, Cpu } from "lucide-react";

export default function PulseDiagram() {
  const nodes = [
    { icon: Database, label: "Data", angle: 0, color: "#356AE6" },
    { icon: Globe, label: "APIs", angle: 90, color: "#5B8BFF" },
    { icon: Cpu, label: "AI", angle: 180, color: "#D79442" },
    { icon: Zap, label: "Actions", angle: 270, color: "#7CF59F" },
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#356AE6] rounded-full blur-[200px] opacity-8" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-4 text-white/95">
            Run. Tweak.{" "}
            <span className="bg-gradient-to-r from-[#356AE6] via-[#9AA4FF] to-[#D79442] bg-clip-text text-transparent">
              Repeat.
            </span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            Connect everything. Build workflows that adapt and scale with your needs.
          </p>
        </motion.div>

        {/* Diagram */}
        <div className="relative max-w-2xl mx-auto aspect-square">
          {/* Center Node */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#356AE6] via-[#9AA4FF] to-[#D79442] blur-2xl"
              />
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#356AE6] to-[#9AA4FF] border-4 border-[#0C0F16] flex items-center justify-center shadow-soft">
                <Zap className="w-12 h-12 text-white" fill="white" />
              </div>
            </div>
          </motion.div>

          {/* Outer Nodes */}
          {nodes.map((node, index) => {
            const radius = 200;
            const angleRad = (node.angle * Math.PI) / 180;
            const x = Math.cos(angleRad) * radius;
            const y = Math.sin(angleRad) * radius;

            return (
              <motion.div
                key={node.label}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                {/* Connection Line */}
                <motion.svg
                  className="absolute top-1/2 left-1/2 -z-10"
                  style={{
                    width: `${Math.abs(x * 2)}px`,
                    height: `${Math.abs(y * 2)}px`,
                    transform: `translate(-50%, -50%) rotate(${node.angle}deg)`,
                  }}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                >
                  <motion.line
                    x1="50%"
                    y1="50%"
                    x2={x > 0 ? "100%" : "0%"}
                    y2={y > 0 ? "100%" : "0%"}
                    stroke={node.color}
                    strokeWidth="2"
                    strokeOpacity="0.3"
                    strokeDasharray="5,5"
                  />
                </motion.svg>

                <div className="relative group">
                  <div
                    className="absolute inset-0 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity"
                    style={{ backgroundColor: node.color }}
                  />
                  <div className="relative w-20 h-20 rounded-2xl bg-[#131826] border border-white/10 flex flex-col items-center justify-center gap-1 group-hover:border-white/20 transition-colors">
                    <node.icon className="w-8 h-8" style={{ color: node.color }} />
                    <span className="text-xs font-medium text-white/70">{node.label}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}