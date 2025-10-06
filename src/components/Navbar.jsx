import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-blue-600">
            Mohamed Guerroui
          </Link>
          
          <div className="flex gap-6">
            <Link to="/" className="hover:text-blue-600 transition">
              Accueil
            </Link>
            <Link to="/about" className="hover:text-blue-600 transition">
              À propos
            </Link>
            <Link to="/projects" className="hover:text-blue-600 transition">
              Projets
            </Link>
            <Link to="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}