import React from "react";
import { motion } from "framer-motion";
import LogoChip from "../ui/LogoChip";

export default function Integrations() {
  const integrations = [
    { name: "Slack", color: "#356AE6" },
    { name: "GitHub", color: "#9AA4FF" },
    { name: "Notion", color: "#D79442" },
    { name: "Stripe", color: "#E9B77C" },
    { name: "Shopify", color: "#356AE6" },
    { name: "Google", color: "#9AA4FF" },
    { name: "Airtable", color: "#D79442" },
    { name: "Salesforce", color: "#E9B77C" },
    { name: "Discord", color: "#356AE6" },
    { name: "HubSpot", color: "#9AA4FF" },
    { name: "Twilio", color: "#D79442" },
    { name: "AWS", color: "#E9B77C" },
  ];

  return (
    <section id="integrations" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-4 text-white/95">
            Plug AI into your own data &{" "}
            <span className="bg-gradient-to-r from-[#356AE6] to-[#D79442] bg-clip-text text-transparent">
              over 500 integrations
            </span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            Connect to the tools you already use. Build workflows that work across your entire stack.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-5xl mx-auto"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <LogoChip name={integration.name} color={integration.color} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white/95 transition-colors text-sm font-medium group"
          >
            View all integrations
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}