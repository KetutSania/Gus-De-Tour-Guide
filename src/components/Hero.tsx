import React from 'react';
import { MapPin, Star, Users } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/2832430/pexels-photo-2832430.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          Explore Beautiful
          <span className="block text-orange-400">Bali with Me</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in-up delay-300">
          Professional Tour Guide & Driver | Authentic Balinese Experience
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm md:text-base">
          <div className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-yellow-400" />
            <span>5+ Years Experience</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-orange-400" />
            <span>500+ Happy Tourists</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-green-400" />
            <span>All Bali Destinations</span>
          </div>
        </div>

        <button
          onClick={scrollToContact}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Book Your Tour Now
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;