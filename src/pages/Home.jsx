// src/pages/Home.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const container = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Home() {
  return (
    <>
      <SEO
        title="Accueil"
        description="Portfolio de Mohamed Guerroui, développeur web Front-End junior spécialisé en React, Redux et Tailwind CSS. Projets : ArgentBank, Sophie Bluel, To-Do List."
        canonical="/"
      />
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center max-w-3xl"
        >
          <motion.h1 variants={item} className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Bonjour, je suis <span className="text-blue-600">Mohamed Guerroui</span>
          </motion.h1>

          <motion.h2 variants={item} className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            Développeur Web Junior — Front-End React
          </motion.h2>

          <motion.p variants={item} className="text-lg md:text-xl text-gray-600 mb-8">
            Passionné par la création d'interfaces modernes, accessibles et performantes,
            je conçois des applications web responsives avec React, Redux et CSS.
          </motion.p>

          <motion.div variants={item} className="flex justify-center gap-4">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/projects"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition"
              >
                Voir mes projets
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/contact"
                className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg text-lg font-medium hover:bg-gray-300 focus:ring-2 focus:ring-blue-500 transition"
              >
                Me contacter
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}