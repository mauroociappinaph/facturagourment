import  { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  BarChart3, TrendingUp, DollarSign, Clock, Camera,
  FileText, Zap, Bell, Settings, PieChart,
  TrendingDown, CheckCircle, ArrowRight, Search,
  Filter, Download, Upload, Eye, Edit, Trash2, Plus,
    Phone, Star, Award
} from 'lucide-react';

const DashboardPreview = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'invoices', label: t('dashboardPreview.tabs.invoices'), icon: FileText },
    { id: 'analytics', label: t('dashboardPreview.tabs.analytics'), icon: PieChart },

  ];

  return (
    <section className="py-20 bg-neutral-light dark:bg-dark-bg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-dark dark:text-dark-text mb-6">
            {t('dashboardPreview.title')}
          </h2>
          <p className="text-xl text-neutral-dark/70 dark:text-dark-text/70 max-w-3xl mx-auto">
            {t('dashboardPreview.subtitle')}
          </p>
        </div>

        {/* Mobile App Showcase */}
        <div className="grid lg:grid-cols-3 gap-8 items-start mb-20">
          {/* Mobile Features */}
          <div>
            <h3 className="text-2xl font-bold text-neutral-dark dark:text-dark-text mb-6">
              {t('dashboardPreview.mobile.title')}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 dark:bg-primary/30 p-2 rounded-lg">
                  <Camera className="h-5 w-5 text-primary" />
                </div>
                <span className="text-neutral-dark/70 dark:text-dark-text/70">{t('dashboardPreview.mobile.feature1')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-accent/10 dark:bg-accent/30 p-2 rounded-lg">
                  <Zap className="h-5 w-5 text-accent" />
                </div>
                <span className="text-neutral-dark/70 dark:text-dark-text/70">{t('dashboardPreview.mobile.feature2')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 dark:bg-primary/30 p-2 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <span className="text-neutral-dark/70 dark:text-dark-text/70">{t('dashboardPreview.mobile.feature3')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 dark:bg-primary/30 p-2 rounded-lg">
                  <Bell className="h-5 w-5 text-primary" />
                </div>
                <span className="text-neutral-dark/70 dark:text-dark-text/70">{t('dashboardPreview.mobile.feature4')}</span>
              </div>
            </div>
          </div>

          {/* Mobile Mockup 1 - Main Dashboard */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Marco visual solo en modo oscuro */}
              <div className="hidden dark:block absolute -inset-4 z-10 rounded-[2.7rem] border-4 border-white/10 shadow-[0_0_32px_8px_rgba(0,0,0,0.7)] pointer-events-none"></div>
              <div className="bg-dark-bg rounded-[2.5rem] p-2 shadow-2xl relative z-20">
                <div className="bg-neutral-light dark:bg-dark-bg/90 rounded-[2rem] w-80 h-[640px] overflow-hidden">
                  <div className="bg-neutral-light/80 dark:bg-dark-bg/80 h-8 flex items-center justify-center">
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-neutral-dark/50 rounded-full"></div>
                      <div className="w-1 h-1 bg-neutral-dark/50 rounded-full"></div>
                      <div className="w-1 h-1 bg-neutral-dark/50 rounded-full"></div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-bold text-neutral-dark dark:text-dark-text">{t('dashboardPreview.mobile.appName', 'FacturaGourmet')}</h4>
                      <div className="bg-primary text-white px-3 py-1 rounded-full text-sm flex items-center">
                        <Plus className="h-3 w-3 mr-1" />
                        <span>{t('dashboardPreview.mobile.invoiceButton')}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg">
                        <div className="text-primary text-sm font-medium">{t('dashboardPreview.mobile.stats.saved')}</div>
                        <div className="text-xl font-bold text-neutral-dark dark:text-dark-text">18h</div>
                        <div className="text-xs text-neutral-dark/70">{t('dashboardPreview.mobile.stats.thisMonth')}</div>
                      </div>
                      <div className="bg-accent/10 dark:bg-accent/20 p-3 rounded-lg">
                        <div className="text-accent text-sm font-medium">{t('dashboardPreview.mobile.stats.costs')}</div>
                        <div className="text-xl font-bold text-neutral-dark dark:text-dark-text">-32%</div>
                        <div className="text-xs text-neutral-dark/70">{t('dashboardPreview.mobile.stats.vsLastMonth')}</div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm opacity-90">{t('dashboardPreview.mobile.stats.total')}</div>
                          <div className="text-2xl font-bold">€2,340</div>
                        </div>
                        <Award className="h-8 w-8 opacity-80" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h5 className="font-semibold text-neutral-dark dark:text-dark-text">{t('dashboardPreview.mobile.recent')}</h5>
                        <button className="text-primary text-sm">{t('dashboardPreview.mobile.seeAll')}</button>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3 p-3 bg-neutral-light/50 dark:bg-dark-bg/70 rounded-lg">
                          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <CheckCircle className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-neutral-dark dark:text-dark-text">{t('dashboardPreview.mobile.provider1')}</div>
                            <div className="text-xs text-neutral-dark/70">€234.50 • {t('dashboardPreview.mobile.processed')} • 2 min</div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-neutral-dark/50" />
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-neutral-light/50 dark:bg-dark-bg/70 rounded-lg">
                          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <FileText className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-neutral-dark dark:text-dark-text">{t('dashboardPreview.mobile.provider2')}</div>
                            <div className="text-xs text-neutral-dark/70">€456.80 • {t('dashboardPreview.mobile.processed')} • 5 min</div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-neutral-dark/50" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Mockup 2 - Camera Capture */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Marco visual solo en modo oscuro */}
              <div className="hidden dark:block absolute -inset-4 z-10 rounded-[2.7rem] border-4 border-white/10 shadow-[0_0_32px_8px_rgba(0,0,0,0.7)] pointer-events-none"></div>
              <div className="bg-dark-bg rounded-[2.5rem] p-2 shadow-2xl relative z-20">
                <div className="bg-black rounded-[2rem] w-80 h-[640px] overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/50 to-transparent z-10"></div>

                  {/* Camera Interface */}
                  <div className="absolute top-4 left-4 right-4 z-20">
                    <div className="flex items-center justify-between text-white">
                      <button className="p-2">
                        <ArrowRight className="h-6 w-6 rotate-180" />
                      </button>
                      <div className="text-center">
                        <div className="text-sm font-medium">{t('dashboardPreview.mobile.captureInvoice')}</div>
                      </div>
                      <button className="p-2">
                        <Settings className="h-6 w-6" />
                      </button>
                    </div>
                  </div>

                  {/* Simulated Invoice in Camera */}
                  <div className="absolute inset-x-8 top-32 bottom-32 bg-neutral-light rounded-lg shadow-lg p-4 z-10">
                    <div className="text-xs text-neutral-dark space-y-1">
                      <div className="font-bold">{t('dashboardPreview.mobile.invoiceDemo')}</div>
                      <div>{t('dashboardPreview.mobile.supplierDemo')}</div>
                      <div className="border-t pt-2 mt-2">
                        <div className="flex justify-between">
                          <span>{t('dashboardPreview.mobile.item1')}</span>
                          <span>€12.50</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{t('dashboardPreview.mobile.item2')}</span>
                          <span>€8.30</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{t('dashboardPreview.mobile.item3')}</span>
                          <span>€4.20</span>
                        </div>
                        <div className="border-t pt-1 mt-2 font-bold flex justify-between">
                          <span>{t('dashboardPreview.mobile.total')}</span>
                          <span>€25.00</span>
                        </div>
                      </div>
                    </div>

                    {/* AI Detection Overlay */}
                    <div className="absolute inset-0 border-2 border-primary rounded-lg">
                      <div className="absolute -top-6 left-0 bg-primary text-white px-2 py-1 rounded text-xs">
                        {t('dashboardPreview.mobile.aiDetecting')}
                      </div>
                    </div>
                  </div>

                  {/* Camera Controls */}
                  <div className="absolute bottom-8 left-0 right-0 z-20">
                    <div className="flex items-center justify-center space-x-8">
                      <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Upload className="h-6 w-6 text-white" />
                      </button>
                      <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <Camera className="h-6 w-6 text-white" />
                        </div>
                      </button>
                      <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Eye className="h-6 w-6 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Dashboard with Tabs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t('dashboardPreview.desktop.title')}
          </h3>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-neutral-light dark:bg-dark-bg rounded-lg p-1 shadow-lg">
              <div className="flex space-x-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                      activeTab === tab.id
                        ? 'bg-primary text-white'
                        : 'text-neutral-dark/70 dark:text-dark-text/70 hover:bg-neutral-light/50 dark:hover:bg-dark-bg/70'
                    }`}
                  >
                    <tab.icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Mockup */}
          <div className="relative">
            {/* Marco visual solo en modo oscuro para desktop */}
            <div className="hidden dark:block absolute -inset-4 z-10 rounded-2xl border-4 border-white/10 shadow-[0_0_48px_12px_rgba(0,0,0,0.7)] pointer-events-none"></div>
            <div className="bg-dark-bg rounded-lg p-4 shadow-2xl relative z-20">
              <div className="bg-neutral-light dark:bg-dark-bg/90 rounded-lg overflow-hidden">
                {/* Browser Bar */}
                <div className="bg-neutral-light/80 dark:bg-dark-bg/80 h-10 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div className="w-3 h-3 bg-primary/50 rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="bg-neutral-light dark:bg-dark-bg/70 rounded px-4 py-1 text-sm text-neutral-dark/70 dark:text-dark-text/70 inline-block">
                      app.facturagourmet.com
                    </div>
                  </div>
                </div>

                {/* Dashboard Content Based on Active Tab */}
                <div className="p-6">
                  {activeTab === 'dashboard' && (
                    <>
                      {/* Header */}
                      <div className="flex items-center justify-between mb-8">
                        <div>
                          <h4 className="text-2xl font-bold text-neutral-dark dark:text-dark-text">{t('dashboardPreview.desktop.welcome')}</h4>
                          <p className="text-neutral-dark/70 dark:text-dark-text/70">{t('dashboardPreview.desktop.subtitle')}</p>
                        </div>
                        <div className="flex space-x-3">
                          <button className="bg-neutral-light dark:bg-dark-bg/70 text-neutral-dark/70 dark:text-dark-text/70 px-4 py-2 rounded-lg flex items-center space-x-2">
                            <Download className="h-4 w-4" />
                            <span>Exportar</span>
                          </button>
                          <button className="bg-primary text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                            <Camera className="h-4 w-4" />
                            <span>{t('dashboardPreview.desktop.upload')}</span>
                          </button>
                        </div>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-6 rounded-xl">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-white/90">{t('dashboardPreview.desktop.stats.timeSaved')}</p>
                              <p className="text-3xl font-bold">18.5h</p>
                              <p className="text-sm text-white/70">+2.3h vs anterior</p>
                            </div>
                            <Clock className="h-8 w-8 text-white/70" />
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-accent to-accent/80 text-white p-6 rounded-xl">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-white/90">{t('dashboardPreview.desktop.stats.costReduction')}</p>
                              <p className="text-3xl font-bold">-32%</p>
                              <p className="text-sm text-white/70">€1,240 ahorrados</p>
                            </div>
                            <TrendingDown className="h-8 w-8 text-white/70" />
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-6 rounded-xl">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-white/90">{t('dashboardPreview.desktop.stats.invoicesProcessed')}</p>
                              <p className="text-3xl font-bold">1,247</p>
                              <p className="text-sm text-white/70">+156 este mes</p>
                            </div>
                            <FileText className="h-8 w-8 text-white/70" />
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-6 rounded-xl">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-white/90">{t('dashboardPreview.desktop.stats.savings')}</p>
                              <p className="text-3xl font-bold">€2,340</p>
                              <p className="text-sm text-white/70">ROI: 340%</p>
                            </div>
                            <DollarSign className="h-8 w-8 text-white/70" />
                          </div>
                        </div>
                      </div>

                      {/* Charts y Cost Trends a todo el ancho */}
                      <div className="w-full bg-neutral-light dark:bg-dark-bg/70 p-6 rounded-xl mb-8">
                        <div className="flex items-center justify-between mb-4">
                          <h5 className="text-lg font-semibold text-neutral-dark dark:text-dark-text">
                            {t('dashboardPreview.desktop.charts.costTrends')}
                          </h5>
                          <div className="flex space-x-2">
                            <button className="text-sm text-neutral-dark/70 hover:text-neutral-dark">7D</button>
                            <button className="text-sm bg-primary text-white px-2 py-1 rounded">30D</button>
                            <button className="text-sm text-neutral-dark/70 hover:text-neutral-dark">90D</button>
                          </div>
                        </div>
                        <div className="h-56 bg-neutral-light dark:bg-dark-bg/60 rounded-lg flex items-end justify-around p-4 w-full">
                          {[70, 80, 90, 60, 75, 85, 95, 80, 70, 60, 85, 95, 80, 70, 60, 50, 60, 70, 80, 90, 100, 90, 80, 70, 60, 50, 60, 70, 80, 90].map((height, index) => (
                            <div key={index} className="flex flex-col items-center space-y-1">
                              <div
                                className="bg-accent border border-black rounded-t w-5"
                                style={{ height: `${height * 2}px` }}
                              ></div>
                              <span className="text-xs text-white">{index + 1}</span>
                            </div>
                          ))}
                        </div>
                      </div>


                    </>
                  )}

                  {activeTab === 'invoices' && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">

                        <h4 className="text-2xl font-bold text-neutral-dark dark:text-dark-text">{t('dashboardPreview.desktop.invoiceManagement')}</h4>
                        <div className="flex space-x-3">
                          <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-dark/50" />
                            <input
                              type="text"
                              placeholder={t('dashboardPreview.desktop.searchPlaceholder')}
                              className="pl-10 pr-4 py-2 border border-neutral-dark/30 dark:border-dark-text/30 rounded-lg bg-neutral-light dark:bg-dark-bg/70 text-neutral-dark dark:text-dark-text"
                            />
                          </div>
                          <button className="flex items-center space-x-2 px-4 py-2 border border-neutral-dark/30 dark:border-dark-text/30 rounded-lg text-neutral-dark/70 dark:text-dark-text/70">
                            <Filter className="h-4 w-4" />
                            <span>{t('dashboardPreview.desktop.filters')}</span>
                          </button>
                        </div>
                      </div>

                      <div className="bg-neutral-light dark:bg-dark-bg/70 rounded-lg overflow-hidden shadow">
                        <div className="px-6 py-4 border-b border-neutral-dark/10 dark:border-dark-text/10">
                          <div className="grid grid-cols-6 gap-4 text-sm font-medium text-neutral-dark/70 dark:text-dark-text/70">
                            <div>Factura</div>
                            <div>Proveedor</div>
                            <div>Fecha</div>
                            <div>Importe</div>
                            <div>Estado</div>
                            <div>Acciones</div>
                          </div>
                        </div>
                        <div className="divide-y divide-neutral-dark/10 dark:divide-dark-text/10">
                          {[
                            { id: '#001234', supplier: 'Proveedor ABC', date: '15/01/2024', amount: '€234.50', status: 'processed' },
                            { id: '#001235', supplier: 'Carnes Premium', date: '15/01/2024', amount: '€456.80', status: 'processed' },
                            { id: '#001236', supplier: 'Lácteos SA', date: '14/01/2024', amount: '€123.20', status: 'processing' },
                            { id: '#001237', supplier: 'Verduras Frescas', date: '14/01/2024', amount: '€89.40', status: 'error' }
                          ].map((invoice, index) => (
                            <div key={index} className="px-6 py-4 hover:bg-neutral-light/50 dark:hover:bg-dark-bg/60">
                              <div className="grid grid-cols-6 gap-4 items-center">
                                <div className="font-medium text-neutral-dark dark:text-dark-text">{invoice.id}</div>
                                <div className="text-neutral-dark/70 dark:text-dark-text/70">{invoice.supplier}</div>
                                <div className="text-neutral-dark/70 dark:text-dark-text/70">{invoice.date}</div>
                                <div className="font-medium text-neutral-dark dark:text-dark-text">{invoice.amount}</div>
                                <div>
                                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                                    invoice.status === 'processed' ? 'bg-primary/10 text-primary' :
                                    invoice.status === 'processing' ? 'bg-accent/10 text-accent' :
                                    'bg-accent/10 text-accent'
                                  }`}>
                                    {invoice.status === 'processed' ? t('dashboardPreview.desktop.status.processed') :
                                     invoice.status === 'processing' ? t('dashboardPreview.desktop.status.processing') : t('dashboardPreview.desktop.status.error')}
                                  </span>
                                </div>
                                <div className="flex space-x-2">
                                  <button className="text-neutral-dark/50 hover:text-neutral-dark">
                                    <Eye className="h-4 w-4" />
                                  </button>
                                  <button className="text-neutral-dark/50 hover:text-neutral-dark">
                                    <Edit className="h-4 w-4" />
                                  </button>
                                  <button className="text-neutral-dark/50 hover:text-accent">
                                    <Trash2 className="h-4 w-4" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'analytics' && (
                    <div className="space-y-6">
                      <h4 className="text-2xl font-bold text-neutral-dark dark:text-dark-text">{t('solution.benefits.decisions.title')}</h4>

                      <div className="mb-4">
                        <p className="text-neutral-dark/70 dark:text-dark-text/70 text-lg">
                          {t('solution.benefits.decisions.description')}
                        </p>
                      </div>
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div className="bg-neutral-light dark:bg-dark-bg/70 p-6 rounded-lg">
                          <h5 className="text-lg font-semibold text-neutral-dark dark:text-dark-text mb-4">{t('dashboardPreview.desktop.charts.costTrends')}</h5>
                          <div className="h-64 flex items-end justify-around p-4 w-full">
                            {[30, 45, 60, 55, 70, 80, 65, 90, 75, 60, 85, 95, 80, 70, 60, 50, 40, 55, 65, 75, 85, 95, 80, 70, 60, 50, 40, 55, 65, 75].map((height, index) => (
                              <div key={index} className="flex flex-col items-center space-y-1">
                                <div
                                  className="bg-gradient-to-t from-primary to-primary/80 rounded-t w-4"
                                  style={{ height: `${height}%` }}
                                ></div>
                                <span className="text-xs text-neutral-dark/70">{index + 1}</span>
                              </div>
                            ))}
                          </div>
                          <div className="space-y-2 mt-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-primary rounded-full"></div>
                                <span className="text-sm text-neutral-dark/70 dark:text-dark-text/70">{t('dashboardPreview.desktop.footer.meat')}</span>
                              </div>
                              <span className="text-sm font-medium text-neutral-dark dark:text-dark-text">45%</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-accent rounded-full"></div>
                                <span className="text-sm text-neutral-dark/70 dark:text-dark-text/70">{t('dashboardPreview.desktop.footer.veggies')}</span>
                              </div>
                              <span className="text-sm font-medium text-neutral-dark dark:text-dark-text">30%</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-primary/50 rounded-full"></div>
                                <span className="text-sm text-neutral-dark/70 dark:text-dark-text/70">{t('dashboardPreview.desktop.footer.dairy')}</span>
                              </div>
                              <span className="text-sm font-medium text-neutral-dark dark:text-dark-text">25%</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-neutral-light dark:bg-dark-bg/70 p-6 rounded-lg">
                          <h5 className="text-lg font-semibold text-neutral-dark dark:text-dark-text mb-4">{t('dashboardPreview.desktop.charts.costTrends')}</h5>
                          <div className="space-y-4">
                            {[
                              { dish: t('dashboardPreview.desktop.footer.dish1'), cost: '€8.50', price: '€18.00', margin: '52%', color: 'bg-primary' },
                              { dish: t('dashboardPreview.desktop.footer.dish2'), cost: '€12.30', price: '€24.00', margin: '48%', color: 'bg-primary/80' },
                              { dish: t('dashboardPreview.desktop.footer.dish3'), cost: '€4.20', price: '€14.00', margin: '70%', color: 'bg-primary' },
                              { dish: t('dashboardPreview.desktop.footer.dish4'), cost: '€15.80', price: '€28.00', margin: '43%', color: 'bg-accent' }
                            ].map((item, index) => (
                              <div key={index} className="flex items-center justify-between p-3 bg-neutral-light/50 dark:bg-dark-bg/60 rounded-lg">
                                <div className="flex-1">
                                  <div className="font-medium text-neutral-dark dark:text-dark-text">{item.dish}</div>
                                  <div className="text-sm text-neutral-dark/70">{t('dashboardPreview.desktop.footer.cost')}: {item.cost} • {t('dashboardPreview.desktop.footer.price')}: {item.price}</div>
                                </div>
                                <div className="flex items-center space-x-3">
                                  <div className="text-right">
                                    <div className="font-bold text-neutral-dark dark:text-dark-text">{item.margin}</div>
                                    <div className="text-xs text-neutral-dark/70">{t('dashboardPreview.desktop.footer.margin')}</div>
                                  </div>
                                  <div className={`w-3 h-8 ${item.color} rounded`}></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'suppliers' && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h4 className="text-2xl font-bold text-neutral-dark dark:text-dark-text">Gestión de Proveedores</h4>
                        <button className="bg-primary text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                          <Plus className="h-4 w-4" />
                          <span>Nuevo Proveedor</span>
                        </button>
                      </div>

                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                          { name: 'Proveedor ABC', category: 'Carnes', rating: 4.8, orders: 156, savings: '€340', trend: 'up' },
                          { name: 'Verduras Frescas', category: 'Verduras', rating: 4.6, orders: 89, savings: '€180', trend: 'up' },
                          { name: 'Lácteos SA', category: 'Lácteos', rating: 4.2, orders: 67, savings: '-€45', trend: 'down' },
                          { name: 'Carnes Premium', category: 'Carnes', rating: 4.9, orders: 234, savings: '€520', trend: 'up' },
                          { name: 'Pescados del Mar', category: 'Pescados', rating: 4.7, orders: 123, savings: '€280', trend: 'up' },
                          { name: 'Especias Gourmet', category: 'Especias', rating: 4.5, orders: 45, savings: '€95', trend: 'up' }
                        ].map((supplier, index) => (
                          <div key={index} className="bg-neutral-light dark:bg-dark-bg/70 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h5 className="font-semibold text-neutral-dark dark:text-dark-text">{supplier.name}</h5>
                                <p className="text-sm text-neutral-dark/70">{supplier.category}</p>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Star className="h-4 w-4 text-accent fill-current" />
                                <span className="text-sm font-medium text-neutral-dark dark:text-dark-text">{supplier.rating}</span>
                              </div>
                            </div>

                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-neutral-dark/70 dark:text-dark-text/70">Pedidos</span>
                                <span className="font-medium text-neutral-dark dark:text-dark-text">{supplier.orders}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-neutral-dark/70 dark:text-dark-text/70">Ahorro</span>
                                <div className="flex items-center space-x-1">
                                  <span className={`font-medium ${supplier.trend === 'up' ? 'text-primary' : 'text-accent'}`}>
                                    {supplier.savings}
                                  </span>
                                  {supplier.trend === 'up' ?
                                    <TrendingUp className="h-3 w-3 text-primary" /> :
                                    <TrendingDown className="h-3 w-3 text-accent" />
                                  }
                                </div>
                              </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-neutral-dark/10 dark:border-dark-text/10">
                              <div className="flex space-x-2">
                                <button className="flex-1 text-sm bg-neutral-light dark:bg-dark-bg/70 text-neutral-dark/70 dark:text-dark-text/70 py-2 rounded hover:bg-neutral-light/50 dark:hover:bg-dark-bg/60">
                                  <Phone className="h-3 w-3 inline mr-1" />
                                  Contactar
                                </button>
                                <button className="flex-1 text-sm bg-primary text-white py-2 rounded hover:bg-primary/80">
                                  Ver Detalles
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'alerts' && (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default DashboardPreview;
