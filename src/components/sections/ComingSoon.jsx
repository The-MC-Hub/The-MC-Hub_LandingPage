import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './ComingSoon.css';

const ComingSoon = () => {
    const { t } = useTranslation();
    const formUrl = import.meta.env.VITE_GOOGLE_FORM_URL;

    return (
        <section className="coming-soon-section" id="coming-soon">
            <div className="container">
                <motion.div
                    className="coming-soon-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">{t('coming_soon')}</h2>
                    <p className="section-subtitle">
                        {t('we_building_platform')} <br />
                        <span className="highlight">{t('your_voice_matters')}</span> {t('help_us_shape')}
                    </p>
                </motion.div>

                <motion.div
                    className="coming-soon-content"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >

                    <div className="survey-container">
                        <div className="survey-description">
                            <h3>{t('join_revolution')}</h3>
                            <p>
                                {t('first_to_experience')}
                            </p>
                        </div>

                        <div className="form-wrapper">
                            {formUrl && formUrl.includes('http') ? (
                                <>
                                    <iframe
                                        src={formUrl}
                                        width="100%"
                                        height="640"
                                        frameBorder="0"
                                        marginHeight="0"
                                        marginWidth="0"
                                        title="User Survey"
                                        className="google-form-iframe"
                                    >
                                        Loading…
                                    </iframe>
                                    <div className="form-fallback">
                                        <p>{t('cant_see_form')}</p>
                                        <a href={formUrl} target="_blank" rel="noopener noreferrer" className="btn-text">
                                            {t('open_survey')} &rarr;
                                        </a>
                                    </div>
                                </>
                            ) : (
                                <div className="form-placeholder">
                                    <p>Please configure VITE_GOOGLE_FORM_URL in your .env file</p>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ComingSoon;
