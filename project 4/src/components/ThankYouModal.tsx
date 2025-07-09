import React from 'react';
import { useTranslation } from 'react-i18next';

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ThankYouModal: React.FC<ThankYouModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-dark-bg p-8 rounded-lg shadow-xl text-center max-w-sm mx-4 relative">
        <h2 className="text-2xl font-bold text-neutral-dark dark:text-dark-text mb-4">
          {t('thankYouModal.title')}
        </h2>
        <p className="text-neutral-dark dark:text-dark-text mb-6">
          {t('thankYouModal.message')}
        </p>
        <button
          onClick={onClose}
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/80 transition-colors font-semibold shadow-md"
        >
          {t('thankYouModal.closeButton')}
        </button>
      </div>
    </div>
  );
};

export default ThankYouModal;
