import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './SubscriptionForm.css';

const SubscriptionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'MC',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [totalUsers, setTotalUsers] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchTotalUsers = async () => {
      try {
        const response = await fetch('https://sheetdb.io/api/v1/wz2rtp798gsea');
        const data = await response.json();
        setTotalUsers(data.length);
      } catch (error) {
        console.error('Error fetching total users:', error);
      }
    };
    fetchTotalUsers();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('https://sheetdb.io/api/v1/wz2rtp798gsea', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: {
            name: formData.name,
            email: formData.email,
            role: formData.role,
            message: formData.message,
            created_at: new Date().toLocaleString()
          }
        })
      });
      const result = await response.json();
      if (result.created) {
        setStatus('success');
        setTotalUsers((prev) => prev + 1);
        setFormData({ name: '', email: '', role: 'MC', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('SheetDB error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="subscribe" className="sub-section">
      {/* Background orbs */}
      <div className="sub-orb sub-orb-1" aria-hidden="true" />
      <div className="sub-orb sub-orb-2" aria-hidden="true" />

      <div className="container sub-container">
        {/* Left: copy */}
        <motion.div
          className="sub-left"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="sub-eyebrow">✦ {t('join_revolution') || 'Join the Revolution'}</div>
          <h2 className="sub-title">
            {t('be_first_know') || 'Be the first to know'}
          </h2>
          <p className="sub-desc">
            {t('sign_up_perks') || 'Sign up to get exclusive perks and early access.'}
          </p>

          {/* Trust signals */}
          <div className="sub-trust">
            <div className="sub-trust-item">
              <span className="sub-trust-icon">🎯</span>
              <span>{t('i_am_mc') || 'MC'} & {t('i_hire_mcs') || 'Clients'}</span>
            </div>
            <div className="sub-trust-item">
              <span className="sub-trust-icon">🔒</span>
              <span>No spam, ever</span>
            </div>
            <div className="sub-trust-item">
              <span className="sub-trust-icon">⚡</span>
              <span>Early access perks</span>
            </div>
          </div>

          <div className="sub-counter">
            <span className="sub-counter-number gold-number">{totalUsers}</span>
            <span className="sub-counter-label">người đã đăng ký</span>
          </div>
        </motion.div>

        <motion.div
          className="sub-right"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <form className="sub-form" onSubmit={handleSubmit}>
            <div className="sub-form-group">
              <label className="sub-label">{t('your_name') || 'Your name'}</label>
              <input
                type="text"
                name="name"
                placeholder={t('your_name') || 'Your name'}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="sub-form-group">
              <label className="sub-label">{t('email_address') || 'Email address'}</label>
              <input
                type="email"
                name="email"
                placeholder={t('email_address') || 'Email address'}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="sub-form-group">
              <label className="sub-label">Vai trò</label>
              <select name="role" value={formData.role} onChange={handleChange}>
                <option value="MC">{t('i_am_mc') || 'I am an MC'}</option>
                <option value="Client">{t('i_hire_mcs') || 'I hire MCs'}</option>
                <option value="Partner">{t('i_am_partner') || 'I am a partner'}</option>
              </select>
            </div>

            <div className="sub-form-group">
              <label className="sub-label">{t('tell_us_optional') || 'Message (optional)'}</label>
              <textarea
                name="message"
                placeholder={t('tell_us_optional') || 'Tell us about yourself...'}
                value={formData.message}
                onChange={handleChange}
                rows="3"
              />
            </div>

            <button
              type="submit"
              className="sub-submit-btn"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <><span className="sub-spinner" /> {t('sending') || 'Sending...'}</>
              ) : (
                <>{t('notify_me') || 'Notify Me'} →</>
              )}
            </button>

            {status === 'success' && (
              <p className="sub-status success">✓ Submitted successfully!</p>
            )}
            {status === 'error' && (
              <p className="sub-status error">✕ Submit failed. Try again.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default SubscriptionForm;