
import { useTranslation } from 'react-i18next';
import { Clock, TrendingDown } from 'lucide-react';
import { scrollToElement } from '../utils/scrollUtils';

const Hero = () => {
  const { t } = useTranslation();

  const handleScrollToForm = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    scrollToElement('email-form-section');
  };

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-neutral-light to-primary/5 dark:from-dark-bg dark:via-dark-bg/90 dark:to-dark-bg py-20 transition-colors overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 dark:bg-primary/50 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 dark:bg-accent/50 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 dark:bg-primary/50 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative z-10">


          <div className="flex justify-center space-x-4 mb-8">
            <div className="flex items-center bg-white/90 dark:bg-dark-bg/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/30">
              <Clock className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm font-medium text-neutral-dark dark:text-dark-text">{t('hero.badge1')}</span>
            </div>
            <div className="flex items-center bg-white/90 dark:bg-dark-bg/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/30">
              <TrendingDown className="h-5 w-5 text-accent mr-2" />
              <span className="text-sm font-medium text-neutral-dark dark:text-dark-text">{t('hero.badge2')}</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-neutral-dark dark:text-dark-text mb-6 leading-tight">
            <span dangerouslySetInnerHTML={{ __html: t('hero.title') }} />
          </h1>

          <p className="text-xl md:text-2xl text-neutral-dark dark:text-dark-text mb-12 max-w-4xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <button
            onClick={handleScrollToForm}
            className="bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary/80 transition-colors text-lg font-semibold shadow-lg transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50"
          >
            {t('hero.buttonText')}
          </button>

        </div>
      </div>
    </section>
  );
};

export default Hero;
