import React from 'react';
import { motion } from 'framer-motion';
import { featuresData } from '../../data/featuresData';
import { Link } from 'react-router-dom';
import './Features.css'; // Re-using features CSS
import { useTranslation } from 'react-i18next';
import { getLocalizedValue } from '../../utils/localizationUtils';

const FeaturesPreview = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;

    return (
        <section id="features-preview" className="section features-section">
            <div className="container">
                <div className="text-center" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {t('why_choose')} <span className="text-gradient">The MC Hub</span>?
                    </motion.h2>
                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        {t('features_preview_subtitle')}
                    </motion.p>
                </div>

                <div className="features-preview-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {featuresData.map((category, idx) => (
                        <motion.div
                            key={idx}
                            className="feature-preview-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            style={{
                                background: 'var(--color-surface)',
                                borderRadius: 'var(--border-radius)',
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.05)',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <div
                                className="preview-image-container"
                                style={{
                                    height: '200px',
                                    overflow: 'hidden',
                                    position: 'relative'
                                }}
                            >
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                />
                                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))' }}></div>
                            </div>

                            <div className="preview-content" style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
                                    {getLocalizedValue(category, 'title', lang)}
                                </h3>
                                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', flex: 1 }}>
                                    {getLocalizedValue(category, 'description', lang)}
                                </p>

                                <Link to="/features" className="btn-text" style={{ alignSelf: 'flex-start', color: 'var(--color-secondary)' }}>
                                    {t('explore_features')} &rarr;
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <Link to="/features" className="btn btn-primary">{t('view_all_features')}</Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturesPreview;
