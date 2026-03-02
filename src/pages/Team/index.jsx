import React from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '../../data/teamData';
import {
    FaLinkedinIn, FaGithub, FaFacebookF, FaTwitter, FaInstagram,
    FaUsers, FaStar, FaRocket
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';
import { useTranslation } from 'react-i18next';
import { getLocalizedValue } from '../../utils/localizationUtils';
import './Team.css';

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
    }
};

const Team = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;

    return (
        <section className="team-page">
            {/* Background decoration */}
            <div className="team-bg-decor" aria-hidden="true">
                <div className="team-orb team-orb-1" />
                <div className="team-orb team-orb-2" />
                <div className="team-orb team-orb-3" />
            </div>

            <div className="container">
                {/* Header */}
                <motion.div
                    className="team-header"
                    initial={{ opacity: 0, y: -24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h1 className="text-gradient">{t('meet_the_minds')}</h1>
                    <p>{t('team_subtitle')}</p>

                    <div className="header-divider">
                        <span className="header-divider-line" />
                        <span className="header-divider-dot" />
                        <span className="header-divider-line" />
                    </div>
                </motion.div>

                {/* Team Grid */}
                <motion.div
                    className="team-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            className="team-card"
                            variants={cardVariants}
                        >
                            {/* Index badge */}
                            <span className="card-number">
                                {String(index + 1).padStart(2, '0')}
                            </span>

                            {/* Image */}
                            <div className="member-image-wrapper">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="member-image"
                                    loading="lazy"
                                />

                                {/* Social overlay */}
                                <div className="member-overlay">
                                    <div className="social-links">
                                        {member.socials.linkedin && (
                                            <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                                <FaLinkedinIn />
                                            </a>
                                        )}
                                        {member.socials.github && (
                                            <a href={member.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                                <FaGithub />
                                            </a>
                                        )}
                                        {member.socials.facebook && (
                                            <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                                <FaFacebookF />
                                            </a>
                                        )}
                                        {member.socials.twitter && (
                                            <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                                <FaTwitter />
                                            </a>
                                        )}
                                        {member.socials.instagram && (
                                            <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                                <FaInstagram />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="member-info">
                                <h3 className="member-name">{member.name}</h3>
                                <p className="member-role">{getLocalizedValue(member, 'role', lang)}</p>
                                <span className="member-specialty">
                                    {getLocalizedValue(member, 'specialty', lang)}
                                </span>
                                <p className="member-bio">{getLocalizedValue(member, 'bio', lang)}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Team;
