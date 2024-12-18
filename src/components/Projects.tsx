import React from "react";
import ProjectsCard from "./ProjectCard"; // Import the ProjectsCard component

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Blood Stream",
      description:
        "A full-stack Blood Donation with user authentication, Donation management, Search User in 3Km Radius and Real Time Chat integration.",
      image: "assets/BloodStream.jpg",
      tags: ["React Native", "Node.js", "MYSQL", "Socket.io"],
      visitLink: "https://github.com/MuhammadUmarMalik/Blood_Stream_BE.git",
      usecase:
        "The Bloodstream app backend was developed to connect blood donors and recipients, addressing critical needs with features like real-time location-based donor search, secure in-app chat, and donation history tracking. Built using Node.js, Adonis.js, MongoDB, and WebSocket, the system ensured efficient donor-recipient coordination within a 3 km radius, leveraging Google Maps API for accurate location tracking. Firebase Authentication enabled secure phone-based login, while a 90-day donor reactivation cycle encouraged consistent engagement. Comprehensive testing and scalable cloud deployment ensured a seamless and reliable experience, fostering an active donation network and improving access to lifesaving blood donations.",
    },
    {
      id: 2,
      title: "Adhuri Cart",
      description:
        "A Ecommerce Scalable Backend with following Features such as CURD operation, payment gateway integration (Stripe,Jazzcash,Easyasia)",
      image: "assets/EcommerceWeb.jpg",
      tags: ["Node.js", "PostgreSQL", "TypeORM", "Adonis.js"],
      visitLink: "https://github.com/MuhammadUmarMalik/api.udaricrafts.git",
      usecase:
        "I developed a robust backend system for an e-commerce platform, enhancing scalability, security, and performance. Key features included microservices architecture, JWT-based authentication, real-time inventory tracking, efficient order management, and payment gateway integration with Stripe and PayPal. The backend, built with Node.js, Adonis.js, and PostgreSQL, supported high traffic volumes, streamlined product catalog management, and ensured PCI DSS compliance. Comprehensive testing and CI/CD deployment enabled reliable operations and scalability. This solution reduced cart abandonment, improved response times, and provided actionable analytics, empowering the client to deliver a seamless and data-driven online shopping experience.",
    },
    {
      id: 3,
      title: "Knowledge Exchange",
      description:
        "A web app using Node.js, React.js, and MongoDB for textbook transactions and teacher-student connections, and scheduling to foster a collaborative learning community.",
      image: "assets/Knowledge.jpg",
      tags: ["React.js", "Node.js", "Adonis.js", "TypeORM", "Firebase"],
      visitLink:
        "https://github.com/MuhammadUmarMalik/Knowledge-Exchange-Frontend.git",
      usecase:
        "I developed a scalable Knowledge Exchange Web App to connect students and teachers while streamlining textbook transactions. Key features included user authentication, a searchable book marketplace, direct messaging, teacher-student consultation scheduling, and secure payments with escrow. Built with Node.js, React.js, and databases like MySQL and MongoDB, the platform ensured secure transactions, user-friendly navigation, and real-time notifications. Rigorous testing and cloud-based deployment supported high user volumes. The app improved access to affordable resources and academic support, fostering a collaborative learning community and fulfilling the client’s goal of enhancing student and teacher connectivity.",
    },
  ];

  return (
    <div className="container mx-auto px-6">
      <h1 className="text-4xl font-bold text-center text-purple-600 mb-12">
        My Projects
      </h1>
      <ProjectsCard projects={projects} />
    </div>
  );
};

export default Projects;
