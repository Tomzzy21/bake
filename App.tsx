
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Specialties from './components/Specialties';
import Feast from './components/Feast';
import Chef from './components/Chef';
import Faq from './components/Faq';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-cream overflow-x-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <main>
          <Hero />
          <Stats />
          <div className="py-20 px-4 border-l border-r border-dashed border-gray-300">
            <Specialties />
          </div>
          <Feast />
          <div className="py-20 px-4 border-l border-r border-dashed border-gray-300">
            <Chef />
          </div>
          <div className="py-20 px-4 border-l border-r border-dashed border-gray-300">
            <Faq />
          </div>
        </main>
      </div>
        <Newsletter />
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Footer />
      </div>
    </div>
  );
};

export default App;
