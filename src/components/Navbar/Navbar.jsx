import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [title, setTitle] = useState("Portfolio");

  // Fetch title from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/portfolio/navbar")
      .then(res => res.json())
      .then(data => {
        if (data?.content?.title) {
          setTitle(data.content.title);
        }
      });
  }, []);

  // Edit title
  const editTitle = async () => {
    const newName = prompt("Enter new Navbar name");
    if (!newName) return;

    setTitle(newName);

    await fetch("http://localhost:5000/api/portfolio/navbar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title: newName })
    });
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold text-blue-400">
            {title}
          </div>

          <button
            onClick={editTitle}
            className="bg-blue-500 px-3 py-1 rounded text-sm hover:bg-blue-600"
          >
            Edit
          </button>
        </div>

        <div className="hidden md:flex gap-8 text-lg">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-800 flex flex-col items-center gap-4 py-4 text-lg">
          <NavItem to="/" onClick={() => setMenuOpen(false)}>Home</NavItem>
          <NavItem to="/about" onClick={() => setMenuOpen(false)}>About</NavItem>
          <NavItem to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavItem>
        </div>
      )}
    </nav>
  );
}

function NavItem({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        isActive
          ? "text-blue-400 border-b-2 border-blue-400 pb-1"
          : "hover:text-blue-400 transition duration-300"
      }
    >
      {children}
    </NavLink>
  );
}

export default Navbar;