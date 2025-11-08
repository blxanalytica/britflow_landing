import React, { useState } from "react";
import GradientBackdrop from "../components/ui/GradientBackdrop";
import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Problem from "../components/landing/Problem";
import HowItWorks from "../components/landing/HowItWorks";
import UseCases from "../components/landing/UseCases";
import UniversityDashboard from "../components/landing/UniversityDashboard";
import LLMService from "../components/landing/LLMService";
import InvestorDashboard from "../components/landing/InvestorDashboard";
import WhyTrust from "../components/landing/WhyTrust";
import Testimonials from "../components/landing/Testimonials";
import FinalCTA from "../components/landing/FinalCTA";
import Footer from "../components/landing/Footer";
import LoginModal from "../components/auth/LoginModal";
import SignupModal from "../components/auth/SignupModal";

export default function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const openLogin = () => {
    setIsSignupOpen(false);
    setIsLoginOpen(true);
  };

  const openSignup = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(true);
  };

  const closeModals = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0B0E14] text-[#F6F4F0] overflow-hidden antialiased scroll-smooth">
      <GradientBackdrop />
      <Navbar onOpenLogin={openLogin} onOpenSignup={openSignup} />
      <main>
        <Hero onOpenSignup={openSignup} />
        <Problem />
        <HowItWorks onOpenSignup={openSignup} />
        <UseCases />
        <UniversityDashboard onOpenSignup={openSignup} />
        <LLMService />
        <InvestorDashboard />
        <WhyTrust />
        <Testimonials />
        <FinalCTA onOpenSignup={openSignup} />
      </main>
      <Footer />

      {/* Auth Modals */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={closeModals} 
        onSwitchToSignup={openSignup}
      />
      <SignupModal 
        isOpen={isSignupOpen} 
        onClose={closeModals} 
        onSwitchToLogin={openLogin}
      />
      
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(20px, -10px) scale(1.05); }
          66% { transform: translate(-10px, 10px) scale(0.98); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @supports (font-variation-settings: normal) {
          body { font-synthesis-weight: none; }
        }
      `}</style>
    </div>
  );
}