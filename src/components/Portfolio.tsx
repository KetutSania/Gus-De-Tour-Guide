import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const portfolioImages = [
    {
      src: "/img/Tirta Empul.jpg",
      alt: "Tourists at Tanah Lot Temple",
      location: "Tirta Empul"
    },
    {
      src: "img/sekumpul waterfall.jpg",
      alt: "Group tour at Sekumpul waterfall",
      location: "Sekumpul waterall"
    },
    {
      src: "img/ubud.jpg",
      alt: "Sunrise tour at Ubud  ",
      location: "Ubud"
    },
    {
      src: "img/foto kurang tau apa huhu.jpg",
      alt: "tinggal ganti nama aja",
      location: "tinggal ganti nama aja "
    },
    {
      src: "img/ganti nama aja.jpg  ",
      alt: "Cultural temple visit",
      location: "Besakih Temple"
    },
    {
      src: "img/Kantolampo Waterfall.jpg",
      alt: "Waterfall tour with tourists",
      location: "Katolampo Waterfall"
    },
    {
      src: "https://images.pexels.com/photos/2832432/pexels-photo-2832432.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Traditional market tour",
      location: "Ubud Traditional Market"
    },
    {
      src: "https://images.pexels.com/photos/1450340/pexels-photo-1450340.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Monkey forest sanctuary",
      location: "Sacred Monkey Forest"
    },
    {
      src: "https://images.pexels.com/photos/2406945/pexels-photo-2406945.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Lempuyang temple gates",
      location: "Lempuyang Temple"
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % portfolioImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? portfolioImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Tour Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Memories captured with happy tourists from around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => setSelectedImage(index)}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end">
                <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-semibold text-lg">{image.location}</p>
                  <p className="text-sm opacity-90">Click to view full size</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-orange-400 transition-colors"
            >
              <X size={32} />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 text-white hover:text-orange-400 transition-colors"
            >
              <ChevronLeft size={48} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 text-white hover:text-orange-400 transition-colors"
            >
              <ChevronRight size={48} />
            </button>

            <div className="max-w-4xl max-h-full">
              <img 
                src={portfolioImages[selectedImage].src}
                alt={portfolioImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <p className="text-white text-center mt-4 text-xl font-semibold">
                {portfolioImages[selectedImage].location}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;