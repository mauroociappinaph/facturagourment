import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, ArrowRight, Check } from 'lucide-react';

interface EmailFormProps {
  placeholder?: string;
  buttonText?: string;
  onSubmit: (email: string) => void;
}

const EmailForm: React.FC<EmailFormProps> = ({ 
  placeholder, 
  buttonText, 
  onSubmit 
}) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const defaultPlaceholder = placeholder || t('emailForm.placeholder');
  const defaultButtonText = buttonText || t('emailForm.button');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      return;
    }
    
    setIsLoading(true);
    
    // Simular envío
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      onSubmit(email);
      
      // Reset después de 3 segundos
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-4">
        <Check className="h-5 w-5 text-green-600 mr-2" />
        <span className="text-green-800 dark:text-green-400 font-medium">{t('emailForm.success')}</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={defaultPlaceholder}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          required
        />
      </div>
      
      <button
        type="submit"
        disabled={isLoading || !email}
        className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          <>
            {defaultButtonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </>
        )}
      </button>
    </form>
  );
};

export default EmailForm;