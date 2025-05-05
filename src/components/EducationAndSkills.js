import React from "react";

const EducationAndSkills = () => {
  return (
    <section className="container mx-auto my-10 p-6 bg-card rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-primary mb-4">
        Education & Skills
      </h2>
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <img
            src="/Goldsmith.png"
            alt="Goldsmiths University Logo"
            className="h-32
             w-32
           mr-4 object-contain"
          />
          <h3 className="text-lg font-bold text-text">
            Goldsmiths, University of London
          </h3>
        </div>
        <p className="text-sm text-gray-400">
          Computer Science | Bachelor | September 2022 – Present
        </p>
        <p className="text-text mt-2">
          Course Modules: Web Development, Databases and the Web, Software
          Design and Development, Object Oriented Programming, Programming with
          Data, Agile Software Projects, Artificial Intelligence.
        </p>
      </div>
      {/* <div>
        <h3 className="text-lg font-bold text-text mb-2">Technical Skills</h3>
        <ul className="list-disc list-inside text-text">
          <li>Programming Languages: JavaScript, Python</li>
          <li>Database: MySQL, MongoDB, Firebase</li>
          <li>
            Frameworks: React.js, Next.js, EJS, Node.js, Express.js, Tailwind
            CSS
          </li>
          <li>Tools & Platforms: GitHub, Notion</li>
        </ul>
      </div> */}
    </section>
  );
};

export default EducationAndSkills;
