// import React from "react";
// import {
//   FaCode,
//   FaMobileAlt,
//   FaDatabase,
//   FaCogs,
//   FaPenNib,
//   FaPalette,
//   FaBullhorn,
//   FaEbay,
// } from "react-icons/fa"; // Added new icons
// import Footer from "../components/Footer";
// import { Link } from "react-router-dom";
// import Testimonials from "../components/Testimonials";

// function Services() {
//   return (
//     <React.Fragment>
//       <section id="services" className="py-16 px-4 md:px-8 lg:px-16">
//         {/* Header Section */}
//         <div className="max-w-screen-xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
//             Our Services
//           </h2>
//           <p className="text-lg md:text-xl text-gray-600 mt-4">
//             We offer a range of high-quality services tailored to your needs.
//           </p>
//         </div>

//         {/* Services List Section */}
//         <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Service 1: Web Development */}
//           <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
//             <div className="flex justify-center mb-6">
//               <FaCode className="text-purple-600 text-4xl" />
//             </div>
//             <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
//               Web Development
//             </h3>
//             <p className="text-gray-600 text-lg text-center mb-6">
//               We build responsive and high-performing websites using modern web
//               technologies like React, Node.js, and more.
//             </p>
//             <div className="text-center">
//               <Link to="/Contact">
//                 <button className="px-6 py-3 bg-purple-600 text-white text-lg rounded-full hover:bg-purple-700">
//                   Get In Touch
//                 </button>
//               </Link>
//             </div>
//           </div>

//           {/* Service 2: Mobile App Development */}
//           <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
//             <div className="flex justify-center mb-6">
//               <FaMobileAlt className="text-purple-600 text-4xl" />
//             </div>
//             <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
//               Mobile App Development
//             </h3>
//             <p className="text-gray-600 text-lg text-center mb-6">
//               We specialize in creating mobile applications for both Android and
//               iOS using React Native and other tools.
//             </p>
//             <div className="text-center">
//               <Link to="/Contact">
//                 <button className="px-6 py-3 bg-purple-600 text-white text-lg rounded-full hover:bg-purple-700">
//                   Get In Touch
//                 </button>
//               </Link>
//             </div>
//           </div>

//           {/* Service 3: Database Management */}
//           <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
//             <div className="flex justify-center mb-6">
//               <FaDatabase className="text-purple-600 text-4xl" />
//             </div>
//             <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
//               Database Management
//             </h3>
//             <p className="text-gray-600 text-lg text-center mb-6">
//               We provide comprehensive database solutions including design,
//               development, and optimization for scalable systems.
//             </p>
//             <div className="text-center">
//               <Link to="/Contact">
//                 <button className="px-6 py-3 bg-purple-600 text-white text-lg rounded-full hover:bg-purple-700">
//                   Get In Touch
//                 </button>
//               </Link>
//             </div>
//           </div>

//           {/* Service 4: Automation & Integration */}
//           <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
//             <div className="flex justify-center mb-6">
//               <FaCogs className="text-purple-600 text-4xl" />
//             </div>
//             <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
//               Automation & Integration
//             </h3>
//             <p className="text-gray-600 text-lg text-center mb-6">
//               We help automate processes and integrate systems to streamline
//               workflows for your business.
//             </p>
//             <div className="text-center">
//               <Link to="/Contact">
//                 <button className="px-6 py-3 bg-purple-600 text-white text-lg rounded-full hover:bg-purple-700">
//                   Get In Touch
//                 </button>
//               </Link>
//             </div>
//           </div>

//           {/* Service 5: UI/UX Design */}
//           <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
//             <div className="flex justify-center mb-6">
//               <FaPenNib className="text-purple-600 text-4xl" />
//             </div>
//             <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
//               UI/UX Design
//             </h3>
//             <p className="text-gray-600 text-lg text-center mb-6">
//               We design intuitive and visually appealing user interfaces and
//               experiences tailored to your brand and audience.
//             </p>
//             <div className="text-center">
//               <Link to="/Contact">
//                 <button className="px-6 py-3 bg-purple-600 text-white text-lg rounded-full hover:bg-purple-700">
//                   Get In Touch
//                 </button>
//               </Link>
//             </div>
//           </div>

//           {/* Service 6: Graphic Design */}
//           <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
//             <div className="flex justify-center mb-6">
//               <FaPalette className="text-purple-600 text-4xl" />
//             </div>
//             <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
//               Graphic Design
//             </h3>
//             <p className="text-gray-600 text-lg text-center mb-6">
//               From branding to marketing materials, we create stunning graphic
//               designs that leave a lasting impression.
//             </p>
//             <div className="text-center">
//               <Link to="/Contact">
//                 <button className="px-6 py-3 bg-purple-600 text-white text-lg rounded-full hover:bg-purple-700">
//                   Get In Touch
//                 </button>
//               </Link>
//             </div>
//           </div>

//           {/* Service 7: Digital Marketing */}
//           <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
//             <div className="flex justify-center mb-6">
//               <FaBullhorn className="text-purple-600 text-4xl" />
//             </div>
//             <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
//               Digital Marketing
//             </h3>
//             <p className="text-gray-600 text-lg text-center mb-6">
//               We help grow your brand's online presence with tailored strategies
//               in SEO, social media, and more.
//             </p>
//             <div className="text-center">
//               <Link to="/Contact">
//                 <button className="px-6 py-3 bg-purple-600 text-white text-lg rounded-full hover:bg-purple-700">
//                   Get In Touch
//                 </button>
//               </Link>
//             </div>
//           </div>

//           <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
//             <div className="flex justify-center mb-6">
//               <FaEbay className="text-purple-600 text-4xl" />
//             </div>
//             <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
//               Ecommerce
//             </h3>
//             <p className="text-gray-600 text-lg text-center mb-6">
//               We help grow your brand's online presence with tailored strategies
//               in Ecommerce, and more.
//             </p>
//             <div className="text-center">
//               <Link to="/Contact">
//                 <button className="px-6 py-3 bg-purple-600 text-white text-lg rounded-full hover:bg-purple-700">
//                   Get In Touch
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Testimonials />
//       <Footer />
//     </React.Fragment>
//   );
// }

// export default Services;
