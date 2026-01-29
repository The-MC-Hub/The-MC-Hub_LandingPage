import React from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '../data/teamData';
import { FaLinkedinIn, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { getLocalizedValue } from '../utils/localizationUtils';
import './Team.css';

const Team = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;

    return (
        <section className="team-page">
            <div className="container">
                <motion.div
                    className="team-header"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-gradient">{t('meet_the_minds')}</h1>
                    <p>{t('team_subtitle')}</p>
                </motion.div>

                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            className="team-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="member-image-wrapper">
                                <img src={member.image} alt={member.name} className="member-image" loading="lazy" />
                                <div className="member-overlay">
                                    <div className="social-links">
                                        {member.socials.linkedin && <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>}
                                        {member.socials.github && <a href={member.socials.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
                                        {member.socials.facebook && <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>}
                                        {member.socials.twitter && <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>}
                                        {member.socials.instagram && <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>}
                                    </div>
                                </div>
                            </div>
                            <div className="member-info">
                                <h3 className="member-name">{member.name}</h3>
                                <p className="member-role">{getLocalizedValue(member, 'role', lang)}</p>
                                <span className="member-specialty">{getLocalizedValue(member, 'specialty', lang)}</span>
                                <p className="member-bio">{getLocalizedValue(member, 'bio', lang)}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
