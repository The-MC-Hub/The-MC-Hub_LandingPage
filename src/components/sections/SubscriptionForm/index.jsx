import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
        const response = await fetch(
          'https://sheetdb.io/api/v1/wz2rtp798gsea'
        );
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
      const response = await fetch(
        'https://sheetdb.io/api/v1/wz2rtp798gsea',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            data: {
              name: formData.name,
              email: formData.email,
              role: formData.role,
              message: formData.message,
              created_at: new Date().toLocaleString()
            }
          })
        }
      );

      const result = await response.json();

      if (result.created) {
        setStatus('success');

        setTotalUsers((prev) => prev + 1);

        setFormData({
          name: '',
          email: '',
          role: 'MC',
          message: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('SheetDB error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="subscribe" className="section subscribe-section">
      <div className="container subscribe-container">
        <div className="subscribe-content">
  <h2>{t('join_revolution')}</h2>

  <p>
    {t('be_first_know')} <br />
    {t('sign_up_perks')}
  </p>
  <p className="total-users">
    Đã có <span className="gold-number">{totalUsers}</span> người đăng ký
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

          <button
            type="submit"
            className="btn btn-primary btn-submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? t('sending') : t('notify_me')}
          </button>

          {status === 'success' && (
            <p className="status-msg success">Submitted successfully!</p>
          )}
          {status === 'error' && (
            <p className="status-msg error">Submit failed. Try again.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default SubscriptionForm;