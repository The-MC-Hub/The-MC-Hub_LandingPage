import React, { useContext, createContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobeAsia } from 'react-icons/fa';
import './LanguageSwitch.css';

const LanguageSwitch = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    const currentLang = i18n.language || 'vi';

    return (
        <div className="language-switch-container">
            <button
                className="lang-btn"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Change Language"
            >
                <FaGlobeAsia />
                <span className="lang-code">{currentLang === 'vi' ? 'VN' : 'EN'}</span>
            </button>

            {isOpen && (
                <div className="lang-dropdown">
                    <button
                        className={`lang-option ${currentLang === 'vi' ? 'active' : ''}`}
                        onClick={() => changeLanguage('vi')}
                    >
                        Tiếng Việt
                    </button>
                    <button
                        className={`lang-option ${currentLang.startsWith('en') ? 'active' : ''}`}
                        onClick={() => changeLanguage('en')}
                    >
                        English
                    </button>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitch;
