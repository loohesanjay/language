import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css'; // <-- Import CSS

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    if (lng === 'ar') {
      document.body.dir = 'rtl';
    } else {
      document.body.dir = 'ltr';
    }
  };

  return (
    <div className="app-container">
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>

      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ar')}>عربي</button>
    </div>
  );
}

export default App;
