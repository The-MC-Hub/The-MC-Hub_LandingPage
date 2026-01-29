import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-left">
          <h3>The MC Hub</h3>
          <p>{t('copyright')}</p>
        </div>
        <div className="footer-socials">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
