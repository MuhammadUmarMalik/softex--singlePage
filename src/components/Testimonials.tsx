import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "Fast Academy",
    review:
      "The web development team delivered an amazing website that exceeded my expectations. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "",
    review:
      "Their mobile app development services are top-notch! The app works flawlessly and looks fantastic.",
    rating: 4,
  },
  {
    id: 3,
    name: "Michael Brown",
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
          width: "12px",
          height: "12px",
          background: "#6b46c1", // Matching your color scheme
          borderRadius: "50%",
          margin: "0 auto",
        }}
      />
    ),
    dotsClass: "slick-dots slick-thumb",
  };

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
          What Our Customers Say
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Hear from some of our happy customers about their experiences with our
          services.
        </p>

        {/* Testimonials Slider */}
        <Slider {...settings} className="mt-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className=" p-8 mx-4 flex flex-col justify-center items-center"
            >
              <figure className="mt-10">
                <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                  <p>“{testimonial.review}”</p>
                </blockquote>
                <figcaption className="mt-10">
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <svg
                      width={3}
                      height={3}
                      viewBox="0 0 2 2"
                      aria-hidden="true"
                      className="fill-gray-900"
                    >
                      <circle r={1} cx={1} cy={1} />
                    </svg>
                    <div className="text-gray-600">Customer</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
