
import { useTranslation } from 'react-i18next';
import {  TrendingDown, AlertCircle } from 'lucide-react';

const Problem = () => {
  const { t } = useTranslation();

  return (
    <section id="problema" className="py-20 bg-gradient-to-b from-accent/5 to-white dark:from-dark-bg/50 dark:to-dark-bg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-accent/10 dark:bg-accent/30 text-accent dark:text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <AlertCircle className="h-4 w-4 mr-2" />
            {t('problem.critical')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark dark:text-dark-text mb-6">
            {t('problem.title')}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-accent to-accent/80 text-white rounded-2xl p-8 shadow-2xl">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <TrendingDown className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {t('problem.summary.title')}
              </h3>
              <p className="text-white/90 text-lg mb-6">
                {t('problem.summary.description')}
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">€2,400</div>
                <div className="text-white/70 text-sm">{t('problem.summary.averageLoss')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
