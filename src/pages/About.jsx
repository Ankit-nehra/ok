import React from 'react';

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
      {/* Left Image */}
      <div className="w-full md:w-1/2 rounded-xl shadow-lg overflow-hidden">
        <img
          src="/assets/owner.png" // replace with your owner image path
          alt="Sachin Maan - Owner"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 text-gray-900">
        <h3 className="text-sm uppercase text-red-600 font-semibold tracking-widest mb-3">
          About Us
        </h3>
        <h2 className="text-4xl font-extrabold mb-6 text-sky-700 leading-tight">
          Welcome to TR Enterprises
        </h2>
        <p className="text-lg mb-6 leading-relaxed text-gray-700">
          Founded by <span className="font-semibold">Sachin Maan</span> in New Delhi, TR Enterprises is a leading provider of eco-friendly and innovative packaging solutions. We specialize in kraft papers, art papers, plastic films, and more, all crafted with a commitment to sustainability and quality.
        </p>
        <p className="text-lg mb-8 leading-relaxed text-gray-700">
          Our expertise and passion drive us to deliver packaging materials that not only meet your needs but also support environmental responsibility. Join us in shaping a greener future while elevating your brand with exceptional packaging.
        </p>

        <div className="flex gap-6">
          <button className="flex items-center gap-3 bg-sky-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-sky-700 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M12 12a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
            Expert Team
          </button>
          <button className="flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a9 9 0 100-18 9 9 0 000 18z" />
            </svg>
            Fast Service
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
