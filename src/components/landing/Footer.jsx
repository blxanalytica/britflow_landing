
import React from "react";
import { Twitter, Github, Linkedin } from "lucide-react";

export default function Footer() {
  const links = {
    Product: ["University Dashboard", "LLM Service", "Investor Dashboard", "Pricing"],
    Resources: ["Documentation", "Sample Answers", "API Reference", "Status"],
    Company: ["About", "Contact", "Careers"],
    Legal: ["Privacy", "Terms", "Security"],
  };

  const socials = [
    { icon: Twitter, href: "#" },
    { icon: Github, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-[#0B0E14]">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="mb-4">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690f83d3fd9affc7ac786269/2a9c29294_britflow_logo.png"
                alt="BritFlow"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xs">
              UK-first relocation intelligence. Answers with citations. Action in minutes.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 flex items-center justify-center transition-colors group"
                >
                  <social.icon className="w-4 h-4 text-white/70 group-hover:text-white/95 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white/95 font-semibold mb-4 text-sm tracking-tight">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white/95 transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            © 2025 BritFlow. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <span>Are you a law firm? No. We synthesize official guidance with citations.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
