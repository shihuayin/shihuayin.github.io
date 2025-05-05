import React from "react";

const Projects = () => {
  const projects = [
    {
      category: "Web Development Projects",
      items: [
        {
          title: "Financial Management Tool",
          tech: ["React", "Firebase", "Recharts"],
          description:
            "A tool to manage budgets and visualize data using Firebase and Recharts.",
          link: "https://personal-finance-app-amber.vercel.app/",
        },
        {
          title: "Trip Map Tracker",
          tech: ["Next.js", "Geocoding API", "Leaflet"],
          description:
            "Mark locations, add trip details, and store logs with Leaflet and Geocoding API.",
          link: "https://travel-log-app-topaz.vercel.app/",
        },
        {
          title: "VisualDev UI",
          tech: ["React", "Tailwind CSS"],
          description:
            "A UI library with components and templates for marketing websites using React and Tailwind CSS.",
          link: "https://visualdev-ui.vercel.app/",
        },
      ],
    },
    {
      category: "Python Projects",
      items: [
        {
          title: "Handwritten Digit Recognition",
          tech: ["Python", "TensorFlow", "Keras"],
          description:
            "Real-time handwritten digit recognition with TensorFlow, Keras, and a Tkinter-based UI. This project focuses on interactive learning and user engagement.",
          link: "#",
        },
        {
          title: "TED Persuasive Adjective Explorer",
          tech: ["Python", "SpaCy", "NLTK"],
          description:
            "Analysed TED talks to identify persuasive adjectives using SpaCy and NLTK. This project uncovers language trends in different fields.",
          link: "#",
        },
      ],
    },
    {
      category: "Mobile Application Project",
      items: [
        {
          title: "Travel Assistant",
          tech: ["React Native", "Firebase"],
          description:
            "A cross-platform app for managing trips, tracking expenses, and creating travel journals. Features include a packing list manager, real-time expense tracker, and photo uploads with comments.",
          link: "#",
          images: ["/RN1.png", "/RN2.png", "/RN3.png", "/RN4.png"],
        },
      ],
    },
  ];

  return (
    <section className="bg-gray-900 text-gray-100 rounded-3xl shadow-2xl p-10 mx-auto mt-12 w-11/12 max-w-6xl relative">
      {/* Projects */}
      {projects.map((projectGroup, index) => (
        <div key={projectGroup.category} className="mb-10">
          <h3 className="text-2xl font-bold text-purple-300 mb-6 text-center">
            {projectGroup.category}
          </h3>
          <div
            className={
              index === 2
                ? "grid grid-cols-1 gap-6"
                : index === 1
                ? "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6"
                : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            }
          >
            {projectGroup.items.map((project) => (
              <div
                key={project.title}
                className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transform hover:-translate-y-2 transition duration-300"
              >
                {/* 项目标题 */}
                <h4 className="text-xl font-semibold text-purple-300 mb-2">
                  <a
                    href={project.link}
                    target={project.link !== "#" ? "_blank" : "_self"}
                    rel={project.link !== "#" ? "noopener noreferrer" : ""}
                    className={project.link !== "#" ? "hover:underline" : ""}
                  >
                    {project.title}
                  </a>
                </h4>

                {/* 技术栈 */}
                <div className="mb-3 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-600 text-gray-200 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 描述 */}
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* 移动项目的图片展示 */}
                {project.images && (
                  <div className="flex justify-center gap-20 mb-4">
                    {project.images.map((image, idx) => (
                      <img
                        key={idx}
                        src={image}
                        alt={`Project ${project.title} Image ${idx + 1}`}
                        className="rounded-lg shadow-md h-96 w-48 object-cover"
                      />
                    ))}
                  </div>
                )}

                {/* 项目链接，仅当链接不是 "#" 时显示 */}
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-purple-500 hover:underline"
                  >
                    View Project
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
