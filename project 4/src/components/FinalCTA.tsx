
import { useTranslation } from 'react-i18next';
import { Rocket, Crown } from 'lucide-react';
import EmailForm from './EmailForm';

const FinalCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-br from-dark-bg via-dark-bg/90 to-dark-bg dark:from-dark-bg dark:via-dark-bg/90 dark:to-dark-bg text-white transition-colors relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="bg-gradient-to-r from-accent to-accent/80 text-white rounded-full p-6 shadow-2xl">
                <Rocket className="h-12 w-12" />
              </div>
              <div className="absolute -top-2 -right-2 bg-primary text-white rounded-full p-1">
                <Crown className="h-4 w-4" />
              </div>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('finalCta.title')}
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
            {t('finalCta.subtitle')}
          </p>
        </div>

        <div className="bg-neutral-light/95 dark:bg-dark-bg/95 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto shadow-2xl border border-neutral-light/20 relative">
          <h3 className="text-lg font-semibold text-neutral-dark dark:text-dark-text mb-4 text-center">
            {t('finalCta.formTitle')}
          </h3>
          <EmailForm
            placeholder={t('finalCta.placeholder')}
            buttonText={t('finalCta.buttonText')}
            onSubmit={(email) => {
              console.log('Email submitted:', email);
              // Aquí iría la lógica de envío
            }}
          />
          <div className="mt-4 text-center">
            <div className="bg-primary/10 dark:bg-primary/20 rounded-lg p-3">
              <p className="text-sm text-primary dark:text-primary font-medium">
                {t('finalCta.guarantees')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
