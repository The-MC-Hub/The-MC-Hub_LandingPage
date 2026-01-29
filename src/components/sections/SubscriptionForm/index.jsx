import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import './SubscriptionForm.css';

const SubscriptionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'MC',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Environment variables
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      console.error("EmailJS environment variables are missing.");
      setStatus('error_config');
      return;
    }

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        setFormData({ name: '', email: '', role: 'MC', message: '' });
      }, (err) => {
        console.log('FAILED...', err);
        setStatus('error');
      });
  };

  const { t } = useTranslation();

  return (
    <section id="subscribe" className="section subscribe-section">
      <div className="container subscribe-container">
        <div className="subscribe-content">
          <h2>{t('join_revolution')}</h2>
          <p>
            {t('be_first_know')} <br />
            {t('sign_up_perks')}
          </p>
        </div>

        <form className="subscribe-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder={t('your_name')}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder={t('email_address')}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="MC">{t('i_am_mc')}</option>
              <option value="Client">{t('i_hire_mcs')}</option>
              <option value="Partner">{t('i_am_partner')}</option>
            </select>
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder={t('tell_us_optional')}
              value={formData.message}
              onChange={handleChange}
              rows="3"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary btn-submit" disabled={status === 'sending'}>
            {status === 'sending' ? t('sending') : t('notify_me')}
          </button>

          {status === 'success' && <p className="status-msg success">{t('success_msg')}</p>}
          {status === 'error' && <p className="status-msg error">{t('error_msg')}</p>}
          {status === 'error_config' && <p className="status-msg error">EmailJS unconfigured</p>}
        </form>
      </div>
    </section>
  );
};

export default SubscriptionForm;
