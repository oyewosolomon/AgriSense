import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    quote: "BuildSmart’s platform has revolutionized how we manage projects.",
    name: "John Doe",
    role: "CEO, ConstructPro Inc.",
  },
  {
    quote: "The BIM integration tools are a game-changer.",
    name: "Jane Smith",
    role: "Project Manager, UrbanBuild Co.",
  },
];

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <p className="text-gray-600 mb-6">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;