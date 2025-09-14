import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-center px-4 sm:px-8 py-6 sm:py-10 bg-white/30 backdrop-blur-md shadow-md z-50">
      {/* Logo pinned to left */}
      <div className="absolute left-4 sm:left-6 flex items-center">
        <img src="Mace.png" alt="logo" className="w-30 h-12 sm:w-30 sm:h-12" />
      </div>

      {/* Links centered - hidden on mobile */}
      <ul className="hidden sm:flex flex-wrap justify-center gap-3 sm:gap-6">
        {["Home", "About", "Timeline", "Sessions", "Sponsors"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="px-4 sm:px-10 py-2 sm:py-4 bg-green-100 bg-opacity-60 rounded-full text-black font-medium shadow-sm hover:bg-green-200 transition text-sm sm:text-base"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
