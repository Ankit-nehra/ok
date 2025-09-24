// src/components/WhyChooseUs.jsx
import {
  FaShippingFast,
  FaShieldAlt,
  FaThumbsUp,
  FaHeadset,
} from 'react-icons/fa';

const features = [
  {
    icon: <FaShippingFast className="text-white w-8 h-8" />,
    title: 'Fast & Reliable Delivery',
    description:
      'Timely delivery is our promise. We work with trusted logistics partners for smooth shipping.',
    color: 'from-sky-500 to-blue-600',
  },
  {
    icon: <FaShieldAlt className="text-white w-8 h-8" />,
    title: 'Quality You Can Trust',
    description:
      'Every product undergoes strict quality checks to meet the highest industry standards.',
    color: 'from-emerald-500 to-green-600',
  },
  {
    icon: <FaThumbsUp className="text-white w-8 h-8" />,
    title: 'Customer Satisfaction',
    description:
      'We prioritize your happiness. Our customer retention rate speaks for itself.',
    color: 'from-yellow-500 to-amber-600',
  },
  {
    icon: <FaHeadset className="text-white w-8 h-8" />,
    title: '24/7 Support',
    description:
      'Whether it’s pre-sales or post-delivery, our support team is always here to assist you.',
    color: 'from-pink-500 to-rose-500',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Why People Choose <span className="text-sky-500">Us</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          We go beyond just products – we deliver trust, value, and long-term partnerships.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <div
                className={`w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-md`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
