// src/components/WhyChooseUs.jsx
import { FaShippingFast, FaShieldAlt, FaThumbsUp, FaHeadset } from 'react-icons/fa';

const features = [
  {
    icon: <FaShippingFast className="text-sky-500 w-8 h-8" />,
    title: 'Fast & Reliable Delivery',
    description: 'We ensure your orders reach on time, every time with trusted shipping partners.',
  },
  {
    icon: <FaShieldAlt className="text-sky-500 w-8 h-8" />,
    title: 'Quality Assurance',
    description: 'Our products meet highest quality standards, ensuring customer satisfaction.',
  },
  {
    icon: <FaThumbsUp className="text-sky-500 w-8 h-8" />,
    title: 'Trusted by Customers',
    description: 'Thousands of happy customers trust our products and services worldwide.',
  },
  {
    icon: <FaHeadset className="text-sky-500 w-8 h-8" />,
    title: '24/7 Customer Support',
    description: 'Our expert support team is here to assist you anytime you need help.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Why People Choose Us</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Discover why businesses and individuals rely on TR Enterprises for their packaging solutions.
          Quality, reliability, and customer satisfaction are at the core of everything we do.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {features.map(({ icon, title, description }, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
