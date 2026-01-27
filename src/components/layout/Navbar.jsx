import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <Link to="/" className="logo">The MC Hub</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <span onClick={() => scrollToSection('features')} style={{ cursor: 'pointer' }}>Features</span>
          <Link to="/team">Our Team</Link>
          <button className="btn btn-primary" onClick={() => scrollToSection('subscribe')}>
            Join Waitlist
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
