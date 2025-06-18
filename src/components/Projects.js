import RN1 from "../assets/RN1.png";
import RN2 from "../assets/RN2.png";
import RN3 from "../assets/RN3.png";
import RN4 from "../assets/RN4.png";

const Projects = () => {
  const projects = [
    {
      category: "Web Development Projects",
      items: [
        {
          title: "Real-time Collaborative Kanban System",
          tech: ["React", "Firebase", "Tailwind CSS", "Recharts"],
          description:
            "Three-tier board→column→card model;150+ cards drag-and-drop with real-time Firestore sync",
          link: "https://kanban-mvp.vercel.app/",
        },
        {
          title: "Financial Management Tool",
          tech: ["React", "Firebase", "Recharts"],
          description:
            "Budget management;Interactive pie & line charts;Real-time filtering",
          link: "https://personal-finance-app-amber.vercel.app/",
        },
        {
          title: "Stock Data Dashboard",
          tech: ["Python", "FastAPI", "React"],
          description:
            "Historical prices & analyst ratings;News sentiment word clouds;Interactive Recharts graphs",
          link: "https://stock-two-alpha.vercel.app/",
        },
        {
          title: "Trip Map Tracker",
          tech: ["Next.js", "Geocoding API", "Leaflet"],
          description:
            "Map pinning & trip logs;Auto geocoding details;Fast response with React Hooks",
          link: "https://travel-log-app-topaz.vercel.app/",
        },
        {
          title: "VisualDev UI",
          tech: ["React", "Tailwind CSS"],
          description:
            "Drag-and-drop UI library;Pre-built responsive templates;Real-time state updates",
          link: "https://visualdev-ui.vercel.app/",
        },
      ],
    },
    {
      category: "Mobile Application Project",
      items: [
        {
          title: "TravelMate",
          tech: ["React Native", "Firebase", "Expo", "JavaScript (ES6+)"],
          description:
            "Manage trips: expenses, packing lists, photos;Secure auth via Firebase;Modular navigation stacks for easy maintenance",
          link: "#",
          video:
            "https://drive.google.com/file/d/1xtxHF7GIjDutTS-WNYSdjXf2DQK25Lbt/view?usp=sharing",
          images: [RN1, RN2, RN3, RN4],
        },
      ],
    },
    {
      category: "Python Projects",
      items: [
        {
          title: "Handwritten Digit Recognition",
          tech: ["Python", "TensorFlow", "Keras", "Tkinter", "PIL"],
          description:
            "A Tkinter-based GUI lets users draw digits and shows classification probabilities from a pretrained CNN optimized with RMSprop;Users can correct any misclassifications, feeding those samples back into an on-the-fly retraining loop—achieving over 99% accuracy within 10 epochs.",
          link: "#",
        },
        {
          title: "TED Persuasive Adjective Explorer",
          tech: ["Python", "requests", "BeautifulSoup", "SpaCy", "VADER"],
          description:
            "Scrape and store subtitles from the decade’s most popular TED talks, then applies SpaCy and VADER to extract and score persuasive adjectives;Generates word clouds and sentiment-trend charts to compare high-impact adjective usage across different talk topics",
          link: "#",
        },
      ],
    },
  ];

  return (
    <section className="bg-gray-900 text-gray-100 rounded-3xl shadow-2xl p-10 mx-auto mt-12 w-11/12 max-w-6xl">
      {projects.map((group, gi) => (
        <div key={group.category} className="mb-10">
          <h3 className="text-2xl font-bold text-purple-300 mb-6 text-center">
            {group.category}
          </h3>

          {gi === 0 ? (
            <>
              {/* 第一行：前两个项目 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {group.items.slice(0, 2).map((p) => (
                  <ProjectCard key={p.title} project={p} />
                ))}
              </div>
              {/* 第二行：后三个项目 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {group.items.slice(2).map((p) => (
                  <ProjectCard key={p.title} project={p} />
                ))}
              </div>
            </>
          ) : (
            <div
              className={
                gi === 1
                  ? "grid grid-cols-1 gap-4"
                  : "grid grid-cols-1 sm:grid-cols-2 gap-4"
              }
            >
              {group.items.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

const ProjectCard = ({ project }) => (
  <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transform hover:-translate-y-2 transition duration-300">
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
    <div className="mb-3 flex flex-wrap gap-2">
      {project.tech.map((t) => (
        <span
          key={t}
          className="bg-purple-600 text-gray-200 text-xs px-2 py-1 rounded-full"
        >
          {t}
        </span>
      ))}
    </div>
    <ul className="text-gray-400 text-sm mb-4 list-disc list-inside space-y-1">
      {project.description.split(";").map((line, idx) => (
        <li key={idx}>{line.trim()}</li>
      ))}
    </ul>
    {project.images && (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {project.images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${project.title} ${i + 1}`}
            className="rounded-lg shadow-md w-full object-cover"
          />
        ))}
      </div>
    )}
    {project.video && (
      <div className="flex justify-center mb-4">
        <a
          href={project.video}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M4 4v12l12-6L4 4z" />
          </svg>
          Watch Video
        </a>
      </div>
    )}
    {project.link !== "#" && (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-5 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition"
      >
        <span>View Project</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    )}
  </div>
);

export default Projects;
