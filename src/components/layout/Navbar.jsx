import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitch from '../common/LanguageSwitch';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <Link to="/" className="logo">The MC Hub</Link>
        <div className="nav-links">
          <Link to="/">{t('home')}</Link>
          <Link to="/features">{t('features')}</Link>
          <Link to="/team">{t('team')}</Link>
          <Link to="/coming-soon" className="btn btn-primary">
            {t('join_waitlist')}
          </Link>
          <LanguageSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
