// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.3 });

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const navItems = [
    { to: "/", label: "Accueil" },
    { to: "/about", label: "À propos" },
    { to: "/journey", label: "Parcours" },
    { to: "/projects", label: "Projets" },
    { to: "/contact", label: "Contact" },
  ];

  const NavItem = ({ to, label, onClick }) => (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "px-2 py-1 transition-colors",
          isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600",
        ].join(" ")
      }
    >
      {label}
    </NavLink>
  );

  return (
    <nav
      className={[
        "fixed w-full z-50 top-0 transition-all",
        scrolled ? "bg-white/90 backdrop-blur shadow-sm" : "bg-white",
      ].join(" ")}
      role="navigation"
      aria-label="Navigation principale"
    >
      {/* Progress bar */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX, transformOrigin: "0% 50%" }}
        className="h-[3px] bg-blue-600"
      />

      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        >
          Mohamed Guerroui
        </Link>

        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <NavItem key={item.to} to={item.to} label={item.label} />
          ))}
        </div>

        <button
          className="md:hidden text-gray-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span className="inline-flex items-center justify-center w-6 h-6">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={[
          "md:hidden bg-white shadow-md overflow-hidden",
          "transition-all duration-300 ease-out origin-top",
          isOpen ? "opacity-100 scale-y-100 max-h-[400px]" : "opacity-0 scale-y-95 max-h-0",
        ].join(" ")}
        role="dialog"
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col items-center py-3 gap-2">
          {navItems.map((item) => (
            <NavItem key={item.to} to={item.to} label={item.label} onClick={() => setIsOpen(false)} />
          ))}
        </div>
      </div>
    </nav>
  );
}
