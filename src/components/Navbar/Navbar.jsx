import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md bg-gray-900/80 text-white shadow-md sticky top-0 z-50 transition-all duration-500">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-bold text-blue-400 hover:scale-105 transition duration-300 cursor-pointer">
          Faiyaz Ibji
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-lg font-medium">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden text-2xl cursor-pointer">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-900/95 backdrop-blur-md overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-60 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-lg">
          <NavItem to="/" onClick={() => setMenuOpen(false)}>Home</NavItem>
          <NavItem to="/about" onClick={() => setMenuOpen(false)}>About</NavItem>
          <NavItem to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavItem>
          <NavItem to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavItem>
        </div>
      </div>

    </nav>
  );
}

function NavItem({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `relative group transition duration-300 ${
          isActive ? "text-blue-400" : "hover:text-blue-400"
        }`
      }
    >
      {children}

      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
    </NavLink>
  );
}

export default Navbar;