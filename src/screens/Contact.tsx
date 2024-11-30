import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaVoicemail,
  FaMailBulk,
} from "react-icons/fa"; // Importing FontAwesome icons
import Footer from "../components/Footer";

function Contact() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send form data to a server)
    console.log("Form submitted", formData);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <React.Fragment>
      <section id="contact" className="py-16 px-4 md:px-8 lg:px-16">
        {/* Header Section */}
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4">
            Feel free to reach out for any inquiries or just to say hello!
          </p>
        </div>

        {/* Contact Form and Info Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between mt-16 gap-8">
          {/* Contact Form Section */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact Form
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-800 text-lg">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-4 border-2 border-gray-300 rounded-lg mt-2"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-800 text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-4 border-2 border-gray-300 rounded-lg mt-2"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-800 text-lg"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-4 border-2 border-gray-300 rounded-lg mt-2"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple-600 text-white text-lg rounded-full hover:bg-purple-700"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 ml-20">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact Info
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-purple-600 text-2xl" />
                <span className="text-lg text-gray-600">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:umarmalik.cs711@gmail.com">
                    umarmalik.cs711@gmail.com
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-purple-600 text-2xl" />
                <span className="text-lg text-gray-600">
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+923171600808">+92 (317) 1600808</a>
                </span>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-purple-600 text-2xl" />
                <span className="text-lg text-gray-600">
                  <strong>Address:</strong> Lahore,Pakistan
                </span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Find Me On
              </h4>
              <div className="flex gap-6 justify-center lg:justify-start">
                <a
                  href="https://www.linkedin.com/in/muhammad-umar-malik786/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 text-2xl"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/MuhammadUmarMalik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 text-2xl"
                >
                  <FaGithub />
                </a>
                <a
                  href="mailto:umarmalik.cs711@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 text-2xl"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}

export default Contact;
