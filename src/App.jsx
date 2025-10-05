import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-md p-4">
          <div className="max-w-6xl mx-auto flex gap-6">
            <Link to="/" className="text-blue-600 hover:text-blue-800">Accueil</Link>
            <Link to="/about" className="text-blue-600 hover:text-blue-800">À propos</Link>
            <Link to="/projects" className="text-blue-600 hover:text-blue-800">Projets</Link>
            <Link to="/contact" className="text-blue-600 hover:text-blue-800">Contact</Link>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return <h1 className="text-3xl font-bold">Accueil</h1>;
}

function About() {
  return <h1 className="text-3xl font-bold">À propos</h1>;
}

function Projects() {
  return <h1 className="text-3xl font-bold">Projets</h1>;
}

function Contact() {
  return <h1 className="text-3xl font-bold">Contact</h1>;
}

export default App;