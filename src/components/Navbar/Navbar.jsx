import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [breakNav, setBreakNav] = useState(false);
  const clickCount = useRef(0);
  const clickTimer = useRef(null);

  const handleBreak = () => {
    clickCount.current += 1;

    // Reset timer on every click
    if (clickTimer.current) {
      clearTimeout(clickTimer.current);
    }

    // If clicked fast 5 times
    if (clickCount.current >= 5) {
      setBreakNav(true);

      setTimeout(() => {
        setBreakNav(false);
      }, 3000);

      clickCount.current = 0;
    }

    // Reset counter if user stops clicking
    clickTimer.current = setTimeout(() => {
      clickCount.current = 0;
    }, 700); // fast click window
  };

  return (
    <nav
      onClick={handleBreak}
      className={`navbar-container backdrop-blur-md bg-gray-900/80 text-white shadow-md sticky top-0 z-50 ${
        breakNav ? "break-active" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-bold text-blue-400">
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
    </nav>
  );
}

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
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