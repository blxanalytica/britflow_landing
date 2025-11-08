import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import GradientButton from "../ui/GradientButton";

export default function Navbar({ onOpenLogin, onOpenSignup }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Products", href: "#products" },
    { label: "Why Trust Us", href: "#why-trust" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-[#0B0E14]/30 backdrop-blur-xl supports-[backdrop-filter]:bg-[#0B0E14]/30"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")} className="flex items-center">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690f83d3fd9affc7ac786269/2a9c29294_britflow_logo.png"
              alt="BritFlow"
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white/70 hover:text-white/95 transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={onOpenLogin}
              className="text-white/70 hover:text-white/95 transition-colors text-sm font-medium"
            >
              Sign in
            </button>
            <GradientButton onClick={onOpenSignup}>Start free</GradientButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white/95 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/10 py-4"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-white/70 hover:text-white/95 transition-colors text-sm font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLogin();
                  }}
                  className="text-white/70 hover:text-white/95 transition-colors text-sm font-medium text-left"
                >
                  Sign in
                </button>
                <GradientButton 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSignup();
                  }}
                  className="w-full"
                >
                  Start free
                </GradientButton>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}