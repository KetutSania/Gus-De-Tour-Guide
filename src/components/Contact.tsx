import React from 'react';
import { MessageCircle, Phone, Mail, MapPin, Clock, Globe } from 'lucide-react';

const Contact = () => {
  const whatsappNumber = "6282266321432"; // Replace with your actual WhatsApp number
  const whatsappMessage = "Hi! I'm interested in booking a tour in Bali. Can you help me plan my trip?";

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Explore Bali?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Contact me directly via WhatsApp to plan your perfect Bali adventure
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MessageCircle className="h-8 w-8 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">WhatsApp (Recommended)</h3>
                <p className="text-gray-300 mb-3">
                  Message me directly for instant response and easy communication
                </p>
                <button
                  onClick={openWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-orange-400" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-300">+62 822-6632-1432</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-blue-400" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-300">gustigusde84@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-red-400" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-300">Ubud, Bali</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Globe className="h-6 w-6 text-purple-400" />
                <div>
                  <p className="font-medium">Languages</p>
                  <p className="text-gray-300">English, Indonesian</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-6 w-6 text-yellow-400" />
                <h3 className="text-xl font-semibold">Available Hours</h3>
              </div>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Sunday: 6:00 AM - 10:00 PM</p>
                <p className="text-sm text-yellow-400">
                  * Available for early morning sunrise tours and late pickups
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Book Your Tour Today!</h3>
            <p className="text-lg mb-6 text-orange-100">
              Get personalized itinerary and instant quotes
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center bg-white/20 rounded-lg p-3">
                <span>Half Day Tour</span>
                <span className="font-semibold">From $35</span>
              </div>
              <div className="flex justify-between items-center bg-white/20 rounded-lg p-3">
                <span>Full Day Tour</span>
                <span className="font-semibold">From $60</span>
              </div>
              <div className="flex justify-between items-center bg-white/20 rounded-lg p-3">
                <span>Airport Transportr</span>
                <span className="font-semibold">From $35</span>
              </div>
            </div>

            <button
              onClick={openWhatsApp}
              className="w-full bg-white text-orange-600 font-bold py-4 px-6 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Start Planning Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;