
import { useTranslation } from 'react-i18next';
import { ChefHat, TrendingUp } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark-bg dark:bg-dark-bg text-white py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <ChefHat className="h-8 w-8 text-primary" />
                <TrendingUp className="h-4 w-4 text-accent absolute -top-1 -right-1" />
              </div>
              <span className="text-xl font-bold">FacturaGourmet</span>
            </div>
            <p className="text-dark-text/70 mb-4">
              {t('footer.description')}
            </p>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-dark-text/70 hover:text-white transition-colors">{t('footer.links.privacy')}</a></li>
              <li><a href="#" className="text-dark-text/70 hover:text-white transition-colors">{t('footer.links.terms')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-text/10 dark:border-dark-text/10 mt-8 pt-8 text-center">
          <p className="text-dark-text/70">
            © {new Date().getFullYear()} FacturaGourmet. {t('footer.copyright')}
            <span className="ml-2">{t('footer.madeWith')}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
