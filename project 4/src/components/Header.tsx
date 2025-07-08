import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChefHat, TrendingUp } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-neutral-light dark:bg-dark-bg shadow-sm border-b border-neutral-light dark:border-dark-text sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <ChefHat className="h-8 w-8 text-primary" />
              <TrendingUp className="h-4 w-4 text-accent absolute -top-1 -right-1" />
            </div>
            <span className="text-xl font-bold text-neutral-dark dark:text-dark-text">FacturaGourmet</span>
          </div>
          
          <nav className="hidden lg:flex space-x-8">
            <a href="#problema" className="text-neutral-dark dark:text-dark-text hover:text-primary dark:hover:text-primary transition-colors">
              {t('nav.problem')}
            </a>
            <a href="#solucion" className="text-neutral-dark dark:text-dark-text hover:text-primary dark:hover:text-primary transition-colors">
              {t('nav.solution')}
            </a>
            <a href="#como-funciona" className="text-neutral-dark dark:text-dark-text hover:text-primary dark:hover:text-primary transition-colors">
              {t('nav.howItWorks')}
            </a>
          </nav>
          
          <div className="flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition-colors">
              {t('nav.priorityAccess')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;