import { useState, useEffect } from 'react';

const slides = [
  {
    image: '/assets/slider1.jpg',
    title: 'Premium Packaging Solutions',
    subtitle: 'High-quality paper, film & plastic materials',
    button: 'Explore Products',
  },
  {
    image: '/assets/slider2.jpg',
    title: 'Eco-Friendly Kraft Papers',
    subtitle: 'Sustainable and strong – built for the future',
    button: 'View Kraft Range',
  },
  {
    image: '/assets/slider3.jpg',
    title: 'Customizable Label Stocks',
    subtitle: 'Perfect for branding & printing excellence',
    button: 'Browse Labels',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen pt-20 overflow-hidden"> {/* pt-20 to offset fixed navbar */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 -z-10'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg mb-4">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl mb-6 drop-shadow-md">
              {slide.subtitle}
            </p>
            <button className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-md font-semibold shadow-lg transition">
              {slide.button}
            </button>
          </div>
        </div>
      ))}

      {/* Dots Navigation */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === current ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
