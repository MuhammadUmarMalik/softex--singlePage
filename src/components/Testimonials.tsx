import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    image: "./src/assets/images/profileImage.jpg",
    review:
      "The web development team delivered an amazing website that exceeded my expectations. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "./src/assets/images/profileImage.jpg",
    review:
      "Their mobile app development services are top-notch! The app works flawlessly and looks fantastic.",
    rating: 4,
  },
  {
    id: 3,
    name: "Michael Brown",
    image: "./src/assets/images/profileImage.jpg",
    review:
      "Their UI/UX design services transformed our app into a user-friendly masterpiece. Thank you!",
    rating: 5,
  },
];

// Testimonials Component
function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          background: "#ccc",
          borderRadius: "100%",
          margin: "2 auto",
        }}
      />
    ),
    dotsClass: "slick-dots slick-thumb",
  };

  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          What Our Customers Say
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Hear from some of our happy customers about their experiences with our
          services.
        </p>

        {/* Testimonials Slider */}
        <Slider {...settings} className="mt-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="mb-4 bg-violet-500 rounded-xl shadow-lg p-8 mx-4 flex  justify-center justify-items-center items-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full shadow-md mb-6 align-middle"
              />
              <p className="text-white text-lg italic leading-relaxed mb-6">
                "{testimonial.review}"
              </p>
              <div>
                <h4 className="text-xl font-semibold text-white">
                  {testimonial.name}
                </h4>
                <div className="flex justify-center text-yellow-300 mt-2">
                  {Array(testimonial.rating)
                    .fill()
                    .map((_, i) => (
                      <FaStar key={i} />
                    ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
