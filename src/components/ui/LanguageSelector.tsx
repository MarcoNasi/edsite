import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { Languages } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
];

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLanguageChange = (languageCode: string) => {
    const currentPath = location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(en|it)/, '');
    const newPath = `/${languageCode}${pathWithoutLang}`;
    
    i18n.changeLanguage(languageCode);
    navigate(newPath);
  };

  return (
    <div className="relative inline-block">
      <select
        value={i18n.language}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="appearance-none bg-transparent border border-gray-300 dark:border-gray-600 rounded-md py-1 pl-8 pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
        <Languages className="h-4 w-4" />
      </div>
    </div>
  );
};

export default LanguageSelector;