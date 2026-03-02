import React from 'react';
import { motion } from 'framer-motion';
import { featuresData } from '../../../data/featuresData';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getLocalizedValue } from '../../../utils/localizationUtils';
import './FeaturesPreview.css';

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
};

const cardVariants = {
    hidden: { opacity: 0, y: 36 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
    }
};

const FeaturesPreview = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;

    return (
        <section id="features-preview" className="features-preview-section">
            <div className="container">
                {/* Header */}
                <motion.div
                    className="fp-header"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className="fp-title">
                        {t('why_choose')} <span className="text-gradient">The MC Hub</span>?
                    </h2>
                    <p className="fp-subtitle">{t('features_preview_subtitle')}</p>
                </motion.div>

                {/* Grid */}
                <motion.div
                    className="fp-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                >
                    {featuresData.map((category, idx) => (
                        <motion.div
                            key={idx}
                            className="fp-card"
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            {/* Number badge */}
                            <span className="fp-card-number">
                                {String(idx + 1).padStart(2, '0')}
                            </span>

                            {/* Image */}
                            <div className="fp-image-container">
                                <img
                                    src={category.image}
                                    alt={getLocalizedValue(category, 'title', lang)}
                                    loading="lazy"
                                />
                                <div className="fp-image-overlay" />
                            </div>

                            {/* Content */}
                            <div className="fp-content">
                                <h3>{getLocalizedValue(category, 'title', lang)}</h3>
                                <p>{getLocalizedValue(category, 'description', lang)}</p>
                                <Link to="/features" className="fp-link">
                                    {t('explore_features')} →
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Footer CTA */}
                <div className="fp-footer">
                    <Link to="/features" className="btn btn-primary">
                        {t('view_all_features')}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturesPreview;
