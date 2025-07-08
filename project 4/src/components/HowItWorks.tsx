import React from 'react';
import { useTranslation } from 'react-i18next';
import { Camera, Zap, BarChart3, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      number: 1,
      icon: Camera,
      title: t('howItWorks.steps.capture.title'),
      description: t('howItWorks.steps.capture.description'),
      color: "bg-primary"
    },
    {
      number: 2,
      icon: Zap,
      title: t('howItWorks.steps.process.title'),
      description: t('howItWorks.steps.process.description'),
      color: "bg-primary"
    },
    {
      number: 3,
      icon: BarChart3,
      title: t('howItWorks.steps.control.title'),
      description: t('howItWorks.steps.control.description'),
      color: "bg-accent"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-neutral-light dark:bg-dark-bg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-dark dark:text-dark-text mb-6">
            {t('howItWorks.title')}
          </h2>
          <p className="text-xl text-neutral-dark/70 dark:text-dark-text/70 max-w-3xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className={`${step.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6`}>
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="bg-neutral-light text-neutral-dark rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark dark:text-dark-text mb-4">
                  {step.title}
                </h3>
                <p className="text-neutral-dark/70 dark:text-dark-text/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-8 text-neutral-dark/30 dark:text-dark-text/30">
                  <ArrowRight className="h-6 w-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;