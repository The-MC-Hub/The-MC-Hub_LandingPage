import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      {/* Background */}
      <div className="hero-bg">
        <div className="hero-overlay" />
      </div>

      {/* Floating orbs */}
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />
      <div className="hero-orb hero-orb-3" aria-hidden="true" />

      {/* Content */}
      <div className="container hero-content">
        {/* Eyebrow badge */}
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hero-badge-dot" />
          Nền tảng MC hàng đầu Việt Nam
        </motion.div>

        {/* Title */}
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        >
          {t('hero_title_1')} <br />
          <span className="text-gradient">{t('hero_title_2')}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.25 }}
        >
          {t('hero_subtitle')}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        >
          <Link to="/coming-soon" className="hero-btn-primary">
            {t('get_early_access')} →
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
