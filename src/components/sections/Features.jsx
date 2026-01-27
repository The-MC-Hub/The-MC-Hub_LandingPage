import React from 'react';
import { motion } from 'framer-motion';
import {
  FaChartLine, FaIdCard, FaCalendarAlt, FaFileContract,
  FaMicrophoneAlt, FaHeadphones, FaUserFriends,
  FaEdit, FaTshirt, FaGamepad
} from 'react-icons/fa';
import './Features.css';

const featuresData = [
  {
    title: "Core Booking & Management",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    items: [
      { icon: <FaChartLine />, title: "Smart Ranking", desc: "Transparent ranking based on quality and response rate." },
      { icon: <FaIdCard />, title: "Dynamic Portfolio", desc: "High-quality showreels and verified badges to build trust." },
      { icon: <FaCalendarAlt />, title: "Smart Calendar", desc: "2-way sync with Google/Apple Calendar." },
      { icon: <FaFileContract />, title: "Escrow & E-contract", desc: "Secure payments and auto-generated contracts." }
    ]
  },
  {
    title: "Advanced Tech & AI",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop",
    items: [
      { icon: <FaMicrophoneAlt />, title: "AI Voice Coach", desc: "Real-time analysis of recording speed and pronunciation." },
      { icon: <FaHeadphones />, title: "Virtual Casting Room", desc: "Record and submit script samples directly in-app." },
      { icon: <FaUserFriends />, title: "MC Duo Matching", desc: "Find your perfect co-host with style-based matching." }
    ]
  },
  {
    title: "Ecosystem & Tools",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    items: [
      { icon: <FaEdit />, title: "Script Collaboration", desc: "Real-time editing with clients. No more file ping-pong." },
      { icon: <FaTshirt />, title: "Wardrobe & AI Stylist", desc: "Get outfit suggestions and rent costumes effortlessly." },
      { icon: <FaGamepad />, title: "Interactive Stage Kit", desc: "Lucky draws and live voting tools for events." }
    ]
  }
];

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
  return (
    <section id="features" className="section features-section">
      <div className="container">
        {featuresData.map((category, idx) => (
          <motion.div
            key={idx}
            className="feature-category"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="category-title">{category.title}</motion.h2>

            <div className="category-content-wrapper">
              <motion.div variants={itemVariants} className="category-image-wrapper">
                <img src={category.image} alt={category.title} className="category-image" loading="lazy" />
                <div className="image-overlay"></div>
              </motion.div>

              <div className="features-grid">
                {category.items.map((item, index) => (
                  <motion.div key={index} variants={itemVariants} className="feature-card">
                    <div className="feature-icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
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
