import React, { useState } from 'react';
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

  return (
    <section id="subscribe" className="section subscribe-section">
      <div className="container subscribe-container">
        <div className="subscribe-content">
          <h2>Join the Revolution</h2>
          <p>
            Be the first to know when we launch. <br />
            Sign up now for early access and exclusive perks.
          </p>
        </div>

        <form className="subscribe-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="MC">I am an MC</option>
              <option value="Client">I hire MCs</option>
              <option value="Partner">I am a Partner/Sponsor</option>
            </select>
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Anything you'd like to tell us? (Optional)"
              value={formData.message}
              onChange={handleChange}
              rows="3"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary btn-submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Notify Me'}
          </button>

          {status === 'success' && <p className="status-msg success">Thank you! We'll be in touch.</p>}
          {status === 'error' && <p className="status-msg error">Something went wrong. Please try again.</p>}
          {status === 'error_config' && <p className="status-msg error">EmailJS not configured. Please check console.</p>}
        </form>
      </div>
    </section>
  );
};

export default SubscriptionForm;
