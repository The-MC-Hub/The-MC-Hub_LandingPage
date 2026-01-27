import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  // Unsplash Image: Microphone on Stage
  const heroBgImage = "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?q=80&w=1920&auto=format&fit=crop";

  return (
    <section className="hero">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${heroBgImage})` }}
      >
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Elevate Your Voice <br />
          <span className="text-gradient">Expand Your Career</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          The first AI-powered Booking & Career Development platform dedicated to MCs.
          Connect, improve, and shine on every stage.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <button className="btn btn-primary" onClick={() => document.getElementById('subscribe').scrollIntoView({ behavior: 'smooth' })}>
            Get Early Access
          </button>
          <a href="#features" className="learn-more">
            Learn more ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
