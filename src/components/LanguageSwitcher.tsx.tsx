// src/components/LanguageSwitcher.tsx
import { useLanguage } from '../context/LanguageProvider';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <button onClick={toggleLanguage}>
      {t('changeLanguage')}
    </button>
  );
};

export default LanguageSwitcher;
