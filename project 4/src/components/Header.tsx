import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChefHat, TrendingUp, Menu, X } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import { scrollToElement } from '../utils/scrollUtils'; // Import the utility function

const Header = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleScrollAndCloseMenu = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    scrollToElement('email-form-section');
    setMenuOpen(false); // Close mobile menu after clicking
  };

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

          {/* Desktop nav */}
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

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
            <a href="#email-form-section" onClick={handleScrollAndCloseMenu} className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition-colors max-w-[200px] w-full truncate text-sm sm:max-w-xs shadow-md">
              {t('dashboardPreview.cta.button', 'Unirse a la lista de espera')}
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Abrir menú" onClick={() => setMenuOpen(true)}>
            <Menu className="h-6 w-6 text-primary" />
          </button>
        </div>
      </div>
      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex" role="dialog" aria-modal="true">
          <div className="bg-neutral-light dark:bg-dark-bg w-72 h-full p-6 flex flex-col space-y-6 shadow-2xl animate-slide-in relative">
            <button className="absolute top-4 right-4 text-3xl p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors" aria-label="Cerrar menú" onClick={() => setMenuOpen(false)}>
              <X className="h-7 w-7" />
            </button>
            <nav className="flex flex-col space-y-4 mt-8">
              <a href="#problema" className="text-lg font-medium text-neutral-dark dark:text-dark-text hover:text-primary dark:hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>
                {t('nav.problem', 'El Problema')}
              </a>
              <hr className="border-neutral-200 dark:border-neutral-700" />
              <a href="#solucion" className="text-lg font-medium text-neutral-dark dark:text-dark-text hover:text-primary dark:hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>
                {t('nav.solution', 'Solución')}
              </a>
              <hr className="border-neutral-200 dark:border-neutral-700" />
              <a href="#como-funciona" className="text-lg font-medium text-neutral-dark dark:text-dark-text hover:text-primary dark:hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>
                {t('nav.howItWorks', 'Cómo Funciona')}
              </a>
            </nav>
            <div className="flex flex-row items-center justify-center gap-4 mt-4">
              <LanguageToggle />
              <ThemeToggle />
            </div>
            <a href="#email-form-section" onClick={handleScrollAndCloseMenu} className="bg-primary text-white px-4 py-3 rounded-xl hover:bg-primary/80 transition-colors w-full mt-6 text-base font-semibold shadow-lg" style={{marginTop: 'auto'}}>
              {t('dashboardPreview.cta.button', 'Unirse a la lista de espera')}
            </a>
          </div>
          <div className="flex-1" onClick={() => setMenuOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;
