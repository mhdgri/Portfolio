// src/pages/ProjectDetail.jsx
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { getProjectById } from "../data/projectsData";
import SEO from "../components/SEO";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id);

  // Si le projet n'existe pas, rediriger vers la page projets
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <SEO
        title={project.title}
        description={project.shortDescription}
        canonical={`/projects/${project.id}`}
      />
      
      <article className="py-16 px-6 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Bouton retour */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition"
            >
              <FaArrowLeft /> Retour aux projets
            </Link>
          </motion.div>

          {/* En-tête du projet */}
          <motion.div variants={fadeIn} initial="hidden" animate="show">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{project.shortDescription}</p>

            {/* Technologies */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {project.techs.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Liens */}
            <div className="flex gap-4 mb-8">
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
              >
                <FaGithub /> Voir le code
              </a>
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  <FaExternalLinkAlt /> Démo live
                </a>
              )}
            </div>

            {/* Image principale */}
            <img
              src={project.image}
              alt={`Capture d'écran du projet ${project.title}`}
              className="w-full rounded-2xl shadow-lg mb-12"
            />
          </motion.div>

          {/* Sections détaillées */}
          <div className="space-y-12">
            {/* Contexte */}
            <Section title="📋 Contexte" delay={0.1}>
              <p className="text-gray-700 leading-relaxed">{project.context}</p>
            </Section>

            {/* Objectifs */}
            <Section title="🎯 Objectifs" delay={0.2}>
              <ul className="space-y-2">
                {project.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">{obj}</span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* Compétences développées */}
            <Section title="💡 Compétences développées" delay={0.3}>
              <ul className="space-y-2">
                {project.skills.map((skill, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* Résultats */}
            <Section title="✨ Résultats et impact" delay={0.4}>
              <ul className="space-y-2">
                {project.results.map((result, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700">{result}</span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* Perspectives d'amélioration */}
            <Section title="🚀 Perspectives d'amélioration" delay={0.5}>
              <ul className="space-y-2">
                {project.improvements.map((improvement, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-orange-500 mt-1">→</span>
                    <span className="text-gray-700">{improvement}</span>
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          {/* Navigation vers le projet suivant */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition"
            >
              <FaArrowLeft /> Voir tous mes projets
            </Link>
          </motion.div>
        </div>
      </article>
    </>
  );
}

// Composant réutilisable pour les sections
function Section({ title, children, delay = 0 }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-900">{title}</h2>
      <div className="bg-gray-50 p-6 rounded-xl">{children}</div>
    </motion.section>
  );
}