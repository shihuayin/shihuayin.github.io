import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import EducationAndSkills from "./components/EducationAndSkills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-background text-text min-h-screen">
      <Header />
      <main>
        <Profile />
        <Projects />
        {/* <EducationAndSkills /> */}
      </main>
      <footer className="bg-card text-center py-4">
        <p>© 2024 Shihua Yin. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
