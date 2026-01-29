import React from 'react';
import { motion } from 'framer-motion';
import { featuresData } from '../../../data/featuresData';
import './Features.css';
import { useTranslation } from 'react-i18next';
import { getLocalizedValue } from '../../../utils/localizationUtils';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Features = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <section id="features" className="section features-section">
      <div className="container">
        <div className="features-header-wrapper" style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            {t('platform_features')}
          </motion.h1>
          <p className="section-subtitle">Discover powerful tools designed for professional MCs.</p>
        </div>

        {featuresData.map((category, idx) => (
          <motion.div
            key={idx}
            className="feature-category"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="category-title">
              {getLocalizedValue(category, 'title', lang)}
            </motion.h2>
            <motion.p variants={itemVariants} className="category-description-text" style={{ marginBottom: '2rem', color: 'var(--color-text-muted)' }}>
              {getLocalizedValue(category, 'description', lang)}
            </motion.p>

            <div className="category-content-wrapper">
              <motion.div variants={itemVariants} className="category-image-wrapper">
                <img src={category.image} alt={category.title} className="category-image" loading="lazy" />
                <div className="image-overlay"></div>
              </motion.div>

              <div className="features-grid">
                {category.items.map((item, index) => (
                  <motion.div key={index} variants={itemVariants} className="feature-card">
                    <div className="feature-icon">{item.icon}</div>
                    <h3>{getLocalizedValue(item, 'title', lang)}</h3>
                    <p>{getLocalizedValue(item, 'desc', lang)}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
