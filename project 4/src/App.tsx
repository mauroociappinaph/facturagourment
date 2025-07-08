import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import DashboardPreview from './components/DashboardPreview';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-neutral-light dark:bg-dark-bg transition-colors">
        <Header />
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <DashboardPreview />
        <FinalCTA />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;