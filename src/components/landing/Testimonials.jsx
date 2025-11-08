import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Students stopped guessing. Our advisors gained hours back weekly.",
      author: "International Office",
      company: "UK University",
      avatar: "IO",
    },
    {
      quote: "Our hiring plans finally had hard numbers and links to the rules.",
      author: "People Ops Lead",
      company: "Tech Scale-up",
      avatar: "PO",
    },
  ];

  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-4 text-white/95">
            Trusted by teams moving{" "}
            <span className="bg-gradient-to-r from-[#356AE6] to-[#D79442] bg-clip-text text-transparent">
              to the UK
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#356AE6] to-[#D79442] rounded-3xl blur-2xl opacity-0 group-hover:opacity-15 transition-opacity" />
              <div className="relative rounded-3xl border border-white/10 bg-[#131826]/50 backdrop-blur-xl p-8 hover:border-white/20 transition-colors h-full flex flex-col">
                <Quote className="w-10 h-10 text-[#356AE6] mb-6" />
                
                <p className="text-lg text-white/95 leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#356AE6] to-[#9AA4FF] flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white/95">{testimonial.author}</div>
                    <div className="text-sm text-white/70">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}