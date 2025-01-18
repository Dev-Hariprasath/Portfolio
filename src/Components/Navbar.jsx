import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu after navigation
    }
  };

  const navLinks = [
    { id: "about", label: "About" },
    { id: "service", label: "Services" },
    { id: "skill", label: "Skills" },
    { id: "certificate", label: "Certificates" },
    { id: "project", label: "Project" },
    { id: "experience", label: "Experience" },
    { id: "achivement", label: "Achivement" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="top-0 left-0 w-full z-50 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src="./src/assets/img/logo.png" // Ensure this path is correct
            alt="Hariprasath Logo"
            className="w-12 h-12 rounded-full shadow-lg border-2 border-cyan-400"
          />
          <h1 className="text-2xl font-bold">
            <span className="text-cyan-400">H</span>ariprasath
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleScroll(link.id)}
                className="hover:text-cyan-400 transition focus:outline-none"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden z-50 fixed inset-0 bg-gray-800 bg-opacity-95 flex flex-col items-center justify-center">
          <ul className="space-y-6 text-center">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleScroll(link.id)}
                  className="hover:text-cyan-400 text-xl transition focus:outline-none"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-2xl text-cyan-400 hover:text-cyan-200 focus:outline-none"
            aria-label="Close Menu"
          >
            ✕
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
