import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SkipLink from "./components/SkipLink";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills"
import Journey from "./pages/Journey";
import Projects from "./pages/Projects";
import TodoApp from "./pages/TodoApp";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "./index.css";

function App() {
  return (
    <Router>
      <SkipLink />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main id="main" className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/todo" element={<TodoApp />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;