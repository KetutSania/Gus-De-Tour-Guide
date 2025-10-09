import React from 'react';
import { Car, Camera, Map, Users, Clock, Mountain } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Airport Transfer",
      description: "Comfortable and safe transportation from/to Ngurah Rai International Airport",
      color: "text-blue-500"
    },
    {
      icon: Map,
      title: "Full Day Tour",
      description: "Explore Bali's most beautiful destinations with personalized itineraries",
      color: "text-green-500"
    },
    {
      icon: Mountain,
      title: "Adventure Tours",
      description: "Mount Batur sunrise trekking, volcano tours, and outdoor adventures",
      color: "text-orange-500"
    },
    {
      icon: Camera,
      title: "Photo Tours",
      description: "Instagram-worthy spots and traditional Balinese photography sessions",
      color: "text-purple-500"
    },
    {
      icon: Users,
      title: "Group Tours",
      description: "Perfect for families, couples, or groups of friends exploring together",
      color: "text-red-500"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Customized tours that fit your timeline and preferences",
      color: "text-teal-500"
    }
  ];

  const destinations = [
    "Tanah Lot Temple",
    "Ubud Rice Terraces", 
    "Mount Batur Sunrise",
    "Sekumpul Waterfall",
    "Uluwatu Temple",
    "Tegallalang Rice Terrace",
    "Besakih Temple",
    "Kintamani Volcano",
    "Monkey Forest Sanctuary",
    "Tegenungan Waterfall",
    "Lempuyang Temple",
    "Jatiluwih Rice Terrace"
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive tour guide and driver services to make your Bali experience unforgettable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <service.icon className={`h-12 w-12 ${service.color} mb-4`} />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Popular Destinations I Cover
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {destinations.map((destination, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-3 text-center font-medium shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {destination}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;