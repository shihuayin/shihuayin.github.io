// Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="bg-background text-text shadow-lg relative overflow-hidden">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* 标题 */}
        <h1 className="text-3xl font-bold tracking-wide">SHIHUA YIN</h1>

        {/* 导航菜单 */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#projects"
                className="relative group transition text-text hover:text-primary"
              >
                Projects
                {/* 下划线动画 */}
                <span className="block h-0.5 bg-primary absolute left-0 -bottom-1 w-0 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="relative group transition text-text hover:text-primary"
              >
                Experience
                <span className="block h-0.5 bg-primary absolute left-0 -bottom-1 w-0 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="relative group transition text-text hover:text-primary"
              >
                Contact
                <span className="block h-0.5 bg-primary absolute left-0 -bottom-1 w-0 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* 紫色渐变装饰 */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-tr from-secondary to-primary rounded-full blur-2xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-bl from-secondary to-primary rounded-full blur-3xl opacity-30"></div>
    </header>
  );
};

export default Header;
