import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import newbieImg from '../../../assets/images/newbie.jpg';
import proImg from '../../../assets/images/pro.jpg';
import './Features.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 220, damping: 22 },
  },
};

const ACCENTS = ['#0891b2', '#06b6d4', '#0e7490'];

const Features = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = React.useState('newbie');
  const isNewbie = activeTab === 'newbie';

  const newbieFeatures = [
    {
      icon: '🤖',
      title: t('feat_n1_title'),
      subtitle: t('feat_n1_sub'),
      description: t('feat_n1_desc'),
    },
    {
      icon: '📝',
      title: t('feat_n2_title'),
      subtitle: t('feat_n2_sub'),
      description: t('feat_n2_desc'),
    },
    {
      icon: '🏟️',
      title: t('feat_n3_title'),
      subtitle: t('feat_n3_sub'),
      description: t('feat_n3_desc'),
    },
  ];

  const proFeatures = [
    {
      icon: '📊',
      title: t('feat_p1_title'),
      subtitle: t('feat_p1_sub'),
      description: (
        <>
          {t('feat_p1_desc_before')}
          <strong>{t('feat_p1_emotion')}</strong>,{' '}
          <strong>{t('feat_p1_intonation')}</strong> và{' '}
          <strong>{t('feat_p1_persuasion')}</strong>
          {t('feat_p1_desc_after')}
        </>
      ),
    },
    {
      icon: '💼',
      title: t('feat_p2_title'),
      subtitle: t('feat_p2_sub'),
      description: t('feat_p2_desc'),
    },
    {
      icon: '🌍',
      title: t('feat_p3_title'),
      subtitle: t('feat_p3_sub'),
      description: t('feat_p3_desc'),
    },
  ];

  const features = isNewbie ? newbieFeatures : proFeatures;

  return (
    <section id="features" className="features-section">
      {/* Ambient background blobs */}
      <div className="feat-blob feat-blob--1" aria-hidden="true" />
      <div className="feat-blob feat-blob--2" aria-hidden="true" />
      <div className="feat-blob feat-blob--3" aria-hidden="true" />

      <div className="features-container">
        {/* ── Header ── */}
        <div className="features-header">
          <motion.div
            className="features-label"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="features-label__dot" />
            {t('feat_label')}
          </motion.div>

          <motion.h1
            className="features-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t('feat_title_line1')}
            <br />
            <span className="features-title--gradient">{t('feat_title_line2')}</span>
          </motion.h1>

          <motion.p
            className="features-subtitle"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            dangerouslySetInnerHTML={{ __html: t('feat_subtitle') }}
          />
        </div>

        {/* ── Toggle ── */}
        <motion.div
          className="feat-toggle-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
        >
          <button
            type="button"
            className="feat-toggle"
            onClick={() => setActiveTab(isNewbie ? 'pro' : 'newbie')}
            aria-label="Chuyển đổi giữa người mới và MC chuyên nghiệp"
          >
            <motion.span
              className="feat-toggle__thumb"
              layout
              transition={{ type: 'spring', stiffness: 280, damping: 26 }}
              style={{ left: isNewbie ? '5px' : 'calc(50% + 4px)' }}
            />
            <span className={`feat-toggle__option ${isNewbie ? 'feat-toggle__option--active' : ''}`}>
              {t('feat_tab_newbie')}
            </span>
            <span className={`feat-toggle__option ${!isNewbie ? 'feat-toggle__option--active' : ''}`}>
              {t('feat_tab_pro')}
            </span>
          </button>
        </motion.div>

        {/* ── Tab Content ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="feat-tab-content"
          >
            {/* Tagline */}
            <p className="feat-tagline">
              {isNewbie ? t('feat_tagline_newbie') : t('feat_tagline_pro')}
            </p>

            {/* Main content: image + cards */}
            <div className={`feat-layout ${!isNewbie ? 'feat-layout--reversed' : ''}`}>
              {/* Image panel */}
              <motion.div
                className="feat-image-panel"
                initial={{ opacity: 0, x: isNewbie ? -40 : 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="feat-image-glow" />
                <div className="feat-image-wrapper">
                  <img
                    src={isNewbie ? newbieImg : proImg}
                    alt={isNewbie ? t('feat_img_alt_newbie') : t('feat_img_alt_pro')}
                    className="feat-image"
                    loading="lazy"
                  />
                  <div className="feat-image-overlay" />
                  <div className="feat-image-badge">
                    <span className="feat-image-badge__dot" />
                    {isNewbie ? t('feat_badge_newbie') : t('feat_badge_pro')}
                  </div>
                </div>
              </motion.div>

              {/* Feature cards */}
              <motion.div
                className="feat-cards"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {features.map((f, i) => (
                  <motion.div
                    key={i}
                    className="feat-card"
                    variants={cardVariants}
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <div className="feat-card__accent" style={{ background: ACCENTS[i] }} />
                    <div className="feat-card__inner">
                      <div className="feat-card__icon-wrap">
                        <span className="feat-card__icon">{f.icon}</span>
                      </div>
                      <div className="feat-card__body">
                        <h3 className="feat-card__title">{f.title}</h3>
                        <p className="feat-card__subtitle">{f.subtitle}</p>
                        <p className="feat-card__desc">{f.description}</p>
                      </div>
                    </div>
                    <div className="feat-card__shine" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Coming Soon Bridge ── */}
        <motion.div
          className="feat-bridge"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="feat-bridge__glow" />
          <div className="feat-bridge__content">
            <span className="feat-bridge__badge">
              <span className="feat-bridge__badge-pulse" />
              {t('feat_bridge_badge')}
            </span>
            <h2 className="feat-bridge__title">{t('feat_bridge_title')}</h2>
            <p className="feat-bridge__desc">
              {t('feat_bridge_desc_pre')}
              <strong>{t('feat_bridge_badge_name')}</strong>
              {t('feat_bridge_desc_mid')}
              <strong>{t('feat_bridge_priority')}</strong>
              {t('feat_bridge_desc_post')}
            </p>
            <div className="feat-bridge__stats">
              <div className="feat-bridge__stat">
                <span className="feat-bridge__stat-num">80+</span>
                <span className="feat-bridge__stat-label">{t('feat_stat_score')}</span>
              </div>
              <div className="feat-bridge__stat-divider" />
              <div className="feat-bridge__stat">
                <span className="feat-bridge__stat-num">1000+</span>
                <span className="feat-bridge__stat-label">{t('feat_stat_clients')}</span>
              </div>
              <div className="feat-bridge__stat-divider" />
              <div className="feat-bridge__stat">
                <span className="feat-bridge__stat-num">∞</span>
                <span className="feat-bridge__stat-label">{t('feat_stat_opps')}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
