import React, { useState } from "react";
import Modal from "./Modal"; // Import the Modal component

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  visitLink: string;
  usecase: string;
}

interface ProjectsCardProps {
  projects: Project[];
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({ projects }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Open the modal and pass the project data
  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => {
          // Dynamically import the image based on the image name
          const imageSrc = `${project.image}`;

          return (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={imageSrc} // Use the dynamic image path
                alt={project.title}
                className="w-full h-52 object-center"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-purple-700">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-600 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex justify-between">
                  <a
                    href={project.visitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-sm font-medium transition-colors"
                  >
                    Visit
                  </a>
                  <button
                    onClick={() => openModal(project)} // Open the modal with the project data
                    className="text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
};

export default ProjectsCard;
