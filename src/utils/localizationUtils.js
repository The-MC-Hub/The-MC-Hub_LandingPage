
// src/utils/translate.js
// A simple utility to simulate auto-translation if manual translation is missing.
// In a real production app, this would connect to a Google Translate API or similar.
// For this demo/MVP, we will use a dictionary-based fallback or return the English text with a visual indicator 
// (or just return English if we can't translate, as per user request to "use library").
// However, client-side auto-translation APIs usually require keys/paid services.
// To keep it simple and free for the user without complex API setups, 
// I will implement a helper that checks for `_vi` properties in the data objects.
// If missing, for now, we will return the English text (mocking "auto-translate" as just passthrough 
// or maybe a very basic mapping for common UI words).

// IMPORTANT: Real auto-translation (Google/DeepL) requires an API key and backend or paid frontend SDK.
// Since the user asked for a library to "run for health" (run automatically), 
// but didn't provide an API key, I will set up the ARCHITECTURE to support this.
// I will create a `getLanguageText(obj, key, language)` helper.

export const getLocalizedValue = (obj, key, language) => {
    if (language === 'en') return obj[key];
    
    // If language is 'vi'
    const viKey = `${key}_vi`;
    
    // 1. Check if specific Vietnamese override exists in data
    if (obj[viKey]) return obj[viKey];
    
    // 2. If no override, return English (fallback) 
    // real-time auto-translation without API key is tough. 
    // We will leave the English text as the fallback.
    return obj[key];
};

// We will also use i18next for static UI labels (Navbar, Buttons, etc.)
