import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import './VideoIntro.css';

const VideoIntro = () => {
    return (
        <section className="section video-intro-section">
            <div className="container">
                <motion.div
                    className="video-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="badge">Discover Platform</span>
                    <h2>See The MC Hub in Action</h2>
                    <p>Experience how we're revolutionizing the MC industry with AI and smart booking.</p>
                </motion.div>

                <motion.div
                    className="video-wrapper"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="video-frame">
                        {/* 
                    REPLACE "src" below with your actual YouTube/Vimeo Embed URL.
                    Example: https://www.youtube.com/embed/your_video_id
                */}
                        <iframe
                            className="video-player"
                            src="https://www.youtube.com/embed/ScMzIvxBSi4?controls=0&rel=0"
                            title="The MC Hub Intro"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>

                        {/* Decorative Overlay Elements */}
                        <div className="glow-effect"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoIntro;
