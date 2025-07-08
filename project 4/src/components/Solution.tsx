import React from 'react';
import { useTranslation } from 'react-i18next';
import { Bot, Clock, Shield, Target, Sparkles, Zap } from 'lucide-react';

const Solution = () => {
  const { t } = useTranslation();
  const [activeFeature, setActiveFeature] = React.useState(0);

  const benefits = [
    {
      icon: Clock,
      title: t('solution.benefits.time.title'),
      description: t('solution.benefits.time.description'),
      color: "bg-primary/10 text-primary",
      gradient: "from-primary to-primary/80",
      demo: t('solution.benefits.time.demo')
    },
    {
      icon: Shield,
      title: t('solution.benefits.margins.title'),
      description: t('solution.benefits.margins.description'),
      color: "bg-primary/10 text-primary",
      gradient: "from-primary to-primary/80",
      demo: t('solution.benefits.margins.demo')
    },
    {
      icon: Target,
      title: t('solution.benefits.decisions.title'),
      description: t('solution.benefits.decisions.description'),
      color: "bg-accent/10 text-accent",
      gradient: "from-accent to-accent/80",
      demo: t('solution.benefits.decisions.demo')
    }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % benefits.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [benefits.length]);

  return (
    <section id="solucion" className="py-20 bg-gradient-to-br from-primary/5 via-neutral-light to-primary/5 dark:from-dark-bg dark:via-dark-bg/90 dark:to-dark-bg transition-colors relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 dark:bg-primary/50 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 dark:bg-accent/50 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
      <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-primary/20 dark:bg-primary/50 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-full p-6 shadow-2xl">
                <Bot className="h-12 w-12" />
              </div>
              <div className="absolute -top-2 -right-2 bg-accent text-white rounded-full p-1">
                <Sparkles className="h-4 w-4" />
              </div>
            </div>
          </div>
          <div className="inline-flex items-center bg-gradient-to-r from-primary/10 to-primary/20 dark:from-primary/30 dark:to-primary/30 text-primary dark:text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4 mr-2" />
            SOLUCIÓN REVOLUCIONARIA
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-neutral-dark dark:text-dark-text mb-6">
            {t('solution.title')}
          </h2>
          <p className="text-xl md:text-2xl text-neutral-dark/70 dark:text-dark-text/70 max-w-4xl mx-auto">
            {t('solution.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`relative bg-neutral-light dark:bg-dark-bg rounded-2xl shadow-xl p-8 transition-all duration-500 cursor-pointer ${
                activeFeature === index
                  ? 'scale-105 shadow-2xl ring-4 ring-primary/50 dark:ring-primary/80'
                  : 'hover:shadow-2xl hover:scale-102'
              }`}
              onClick={() => setActiveFeature(index)}
            >
              {activeFeature === index && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-accent text-white px-3 py-1 rounded-full text-xs font-medium">
                    ✨ {t('solution.benefits.active')}
                  </div>
                </div>
              )}
              <div className={`bg-gradient-to-r ${benefit.gradient} text-white rounded-xl p-4 w-fit mb-6 shadow-lg`}>
                <benefit.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-dark dark:text-dark-text mb-4">
                {benefit.title}
              </h3>
              <p className="text-neutral-dark/70 dark:text-dark-text/70 leading-relaxed">
                {benefit.description}
              </p>
              <div className="bg-neutral-light dark:bg-dark-bg/70 rounded-lg p-3 text-sm font-mono text-neutral-dark dark:text-dark-text">
                {benefit.demo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
