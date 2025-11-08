
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle2, X } from "lucide-react";

export default function LoginModal({ isOpen, onClose, onSwitchToSignup }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login with:", formData);
    // Redirect to external application in new tab
    window.open("https://britlowmvpapplication.vercel.app/", "_blank");
    onClose();
  };

  const socialProviders = [
    { 
      name: "Google", 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      ),
    },
    { 
      name: "LinkedIn", 
      icon: (
        <svg className="w-5 h-5" fill="#0A66C2" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    { 
      name: "GitHub", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-md pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white/70 hover:text-white/95"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#356AE6]/20 via-[#9AA4FF]/20 to-[#D79442]/20 rounded-3xl blur-2xl" />
              
              {/* Card */}
              <div className="relative bg-[#131826]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                {/* Header */}
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-semibold tracking-tight text-white/95 mb-2">
                    Welcome Back
                  </h2>
                  <p className="text-white/60">Sign in to access your BritFlow account</p>
                </div>

                {/* Social Login */}
                <div className="space-y-3 mb-6">
                  {socialProviders.map((provider) => (
                    <motion.button
                      key={provider.name}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-white/[0.07] border border-white/10 hover:border-white/20 hover:bg-white/[0.1] transition-all text-white/90 font-medium"
                    >
                      <span className="opacity-90">{provider.icon}</span>
                      <span>Continue with {provider.name}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Divider */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-[#131826] text-white/50 font-medium">Or continue with email</span>
                  </div>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-white/80 mb-2">
                      Email address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full pl-12 pr-4 py-3 bg-white/[0.05] border border-white/10 rounded-xl text-white/95 placeholder:text-white/30 focus:outline-none focus:border-[#356AE6]/50 focus:bg-white/[0.08] transition-all text-[15px]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white/80 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                      <input
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        placeholder="Enter your password"
                        className="w-full pl-12 pr-12 py-3 bg-white/[0.05] border border-white/10 rounded-xl text-white/95 placeholder:text-white/30 focus:outline-none focus:border-[#356AE6]/50 focus:bg-white/[0.08] transition-all text-[15px]"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 text-white/70 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.rememberMe}
                        onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                        className="w-4 h-4 rounded border-white/20 bg-white/5 text-[#356AE6] focus:ring-2 focus:ring-[#356AE6]/30 focus:ring-offset-0"
                      />
                      <span className="group-hover:text-white/90 transition-colors">Remember me</span>
                    </label>
                    <a href="#" className="text-[#356AE6] hover:text-[#9AA4FF] transition-colors font-medium">
                      Forgot password?
                    </a>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full relative group overflow-hidden rounded-xl py-3 font-semibold text-white transition-all mt-4"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#356AE6] to-[#9AA4FF]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#356AE6] to-[#D79442] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center justify-center gap-2 text-[15px]">
                      Sign in
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </form>

                {/* Sign Up Link */}
                <div className="mt-6 text-center">
                  <p className="text-white/60 text-sm">
                    Don't have an account?{" "}
                    <button 
                      onClick={onSwitchToSignup}
                      className="text-[#356AE6] hover:text-[#9AA4FF] transition-colors font-semibold"
                    >
                      Sign up for free
                    </button>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
