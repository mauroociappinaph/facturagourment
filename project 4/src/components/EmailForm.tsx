import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, ArrowRight } from 'lucide-react';

interface EmailFormProps {
  placeholder?: string;
  buttonText?: string;
  onSubmit: (email: string) => void;
  onSuccess?: () => void; // New prop for success callback
}

const EmailForm: React.FC<EmailFormProps> = ({
  placeholder,
  buttonText,
  onSubmit,
  onSuccess
}) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const defaultPlaceholder = placeholder || t('emailForm.placeholder');
  const defaultButtonText = buttonText || t('emailForm.button');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('https://sheetdb.io/api/v1/bspksrzbyq58z', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: { email: email } }),
      });

      if (!response.ok) {
        throw new Error(`Error al enviar el email: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Email enviado con éxito:', result);

      onSubmit(email);
      if (onSuccess) {
        onSuccess();
      }
      setEmail('');
    } catch (error) {
      console.error('Error al enviar el email:', error);
      // Aquí podrías añadir un estado de error para mostrar un mensaje al usuario
    } finally {
      setIsLoading(false);
    }
  };

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