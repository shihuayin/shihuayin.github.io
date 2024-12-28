import React from "react";

const Profile = () => {
  return (
    <section className="bg-gray-900 text-gray-100 rounded-3xl shadow-2xl p-10 mx-auto mt-12 w-11/12 max-w-4xl relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-500 to-pink-600 rounded-full blur-3xl opacity-25 transform -translate-x-1/3 -translate-y-1/3 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-gradient-to-tl from-blue-500 to-indigo-600 rounded-full blur-3xl opacity-25 transform translate-x-1/4 translate-y-1/4 animate-pulse"></div>

      {/* Avatar Section */}
      <div className="flex flex-col items-center relative z-10">
        <div className="relative group">
          {/* Animated Outer Ring */}
          <div className="absolute -inset-3 rounded-full border-2 border-indigo-500 transition-transform duration-300 ease-in-out group-hover:scale-110"></div>
          <img
            src="/me.jpg"
            alt="Avatar"
            className="relative rounded-full w-36 h-36 border-4 border-indigo-500 shadow-lg object-cover"
          />
        </div>
        <h2 className="text-4xl font-extrabold mt-6 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent transition duration-300 hover:from-pink-500 hover:to-yellow-500">
          SHIHUA YIN
        </h2>
        <p className="text-sm text-gray-400 mt-3">
          London | shihuaok@gmail.com | +44 07880 809 267
        </p>
      </div>

      {/* About Section */}
      <div className="mt-8 text-center relative z-10">
        <h3 className="text-2xl font-semibold text-indigo-400">About Me</h3>
        <p className="text-gray-300 mt-4 leading-relaxed">
          A Computer Science student driven by a passion for web development,
          skilled in creating efficient and user-friendly applications, and
          eager to take on new challenges to grow and improve.
        </p>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
          {/* Programming Languages - Full Width with Centered List */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transform hover:-translate-y-2 transition duration-300 col-span-1 sm:col-span-2">
            <h4 className="text-xl font-bold text-indigo-400 mb-4">
              Programming Languages
            </h4>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-gray-300">JavaScript, Python, C++</span>
            </div>
          </div>

          {/* Frontend Skills */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transform hover:-translate-y-2 transition duration-300">
            <h4 className="text-xl font-bold text-indigo-400 mb-2">Frontend</h4>
            <p className="text-gray-300">
              React.js, Next.js, React Native, HTML5, CSS3, Tailwind CSS
            </p>
          </div>

          {/* Backend Skills */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transform hover:-translate-y-2 transition duration-300">
            <h4 className="text-xl font-bold text-indigo-400 mb-2">Backend</h4>
            <p className="text-gray-300">Node.js, Express.js, REST APIs</p>
          </div>

          {/* Databases */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transform hover:-translate-y-2 transition duration-300">
            <h4 className="text-xl font-bold text-indigo-400 mb-2">
              Databases
            </h4>
            <p className="text-gray-300">MySQL, MongoDB, Firebase</p>
          </div>

          {/* Design & Tools */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transform hover:-translate-y-2 transition duration-300">
            <h4 className="text-xl font-bold text-indigo-400 mb-2">
              Design & Tools
            </h4>
            <p className="text-gray-300">Figma, Balsamiq, Git</p>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="flex justify-center space-x-8 mt-12 relative z-10">
        <a
          href="/me.pdf"
          download
          className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 rounded-full shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
        >
          Download CV
        </a>
        <a
          href="mailto:shihuaok@gmail.com"
          className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 rounded-full shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
        >
          Email
        </a>
      </div>
    </section>
  );
};

export default Profile;
