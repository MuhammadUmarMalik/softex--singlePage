import React from "react";
import ReactDOM from "react-dom"; // Required for portals

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  visitLink: string;
  usecase: string;
}

interface ModalProps {
  project: Project;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ project, onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-6 sm:px-6">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3 shadow-lg max-h-[95vh]">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-purple-700">
          {project.title}
        </h2>

        <p className="text-gray-600 mt-3 text-sm sm:text-base">
          {project.usecase}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-purple-100 text-purple-600 text-xs sm:text-sm font-medium px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
          <a
            href={project.visitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-center bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-sm sm:text-base font-medium transition-colors w-full sm:w-auto"
          >
            Visit
          </a>
          <button
            onClick={onClose}
            className="text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white px-4 py-2 rounded text-sm sm:text-base font-medium transition-colors w-full sm:w-auto"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
