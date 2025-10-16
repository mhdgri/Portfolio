// src/components/ProjectsCard.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const card = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.06 },
  }),
};

export default function ProjectCard({
  id,
  title,
  description,
  image,
  techs,
  codeLink,
  demoLink,
  index = 0,
}) {
  return (
    <motion.article
      custom={index}
      variants={card}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.5 }}
      className="group bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transform-gpu will-change-transform transition-shadow hover:shadow-xl"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={`Aperçu du projet ${title}`}
          loading="lazy"
          decoding="async"
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Contenu */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>

        {/* Tech stack */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {techs.slice(0, 3).map((tech, i) => (
            <span key={i} className="text-sm bg-gray-100 px-2 py-1 rounded-md text-gray-700">
              {tech}
            </span>
          ))}
          {techs.length > 3 && (
            <span className="text-sm bg-gray-100 px-2 py-1 rounded-md text-gray-700">
              +{techs.length - 3}
            </span>
          )}
        </div>

        {/* Bouton principal */}
        <Link
          to={`/projects/${id}`}
          className="w-full mb-3 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition focus:ring-2 focus:ring-blue-500 text-center font-medium"
        >
          Voir les détails
        </Link>

        {/* Liens secondaires */}
        <div className="flex gap-2">
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-3 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition focus:ring-2 focus:ring-blue-500 text-center text-sm"
          >
            Code
          </a>
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-3 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition focus:ring-2 focus:ring-blue-500 text-center text-sm"
            >
              Démo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}