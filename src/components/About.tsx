import React from 'react';
import { Award, Heart, Shield, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Gus De
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate about sharing the beauty and culture of Bali with visitors from around the world
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Hi, I'm Gus De
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Born and raised in Bali, I have been sharing the magic of this beautiful island with tourists 
              for over 5 years. As both a licensed tour guide and experienced driver, I provide personalized 
              tours that showcase the authentic Balinese culture, hidden gems, and must-see attractions.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              My passion is creating unforgettable memories for my guests while ensuring their safety and 
              comfort throughout their journey. I speak fluent English and Indonesian, and I'm always happy 
              to share stories about Balinese traditions, history, and local insights.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <Award className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-800">Licensed Guide</h4>
                <p className="text-sm text-gray-600">Certified Professional</p>
              </div>
              <div className="text-center">
                <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-800">Passionate</h4>
                <p className="text-sm text-gray-600">Love What I Do</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-800">Safe & Reliable</h4>
                <p className="text-sm text-gray-600">Your Safety First</p>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-800">Always On Time</h4>
                <p className="text-sm text-gray-600">Punctual Service</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/img/jik dek about us.jpg"
                alt="Bali Tour Guide"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-4 rounded-xl shadow-lg">
              <p className="font-bold text-2xl">5+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;