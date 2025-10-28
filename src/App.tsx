import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio'
import Testimonials from "./components/TestimonialForm.jsx";
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <WhatsAppButton />
      
      {/* Footer */}
      <footer className="bg-black text-white py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="text-gray-400">
            © 2025 Gus De - Professional Tour Guide & Driver in Bali
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Licensed Tour Guide | Safe & Reliable Transportation
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;