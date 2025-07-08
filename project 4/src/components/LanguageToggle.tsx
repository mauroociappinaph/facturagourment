import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-600 hover:text-teal-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-teal-400 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle language"
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium uppercase">
        {i18n.language === 'es' ? 'EN' : 'ES'}
      </span>
    </button>
  );
};

export default LanguageToggle;