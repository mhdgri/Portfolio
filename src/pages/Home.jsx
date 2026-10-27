// src/pages/Home.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import SEO from "../components/SEO";
import { CV_URL } from "../config";
import ProjectCard from "../components/ProjectsCard";
import { projectsData } from "../data/projectsData";

const container = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const strengths = [
  {
    title: "Je comprends le code",
    text: "Formé au développement front-end (React, Redux, JavaScript), je sais ce qu'une fonctionnalité demande vraiment à une équipe technique.",
  },
  {
    title: "Je cadre et j'organise",
    text: "Formé à la planification (Agile, Kanban, spécifications) et à l'UX design, je structure un projet en partant des besoins des utilisateurs.",
  },
  {
    title: "Je pense utilisateur",
    text: "Mon expérience de terrain, au contact du public, m'a appris à partir des besoins réels et à communiquer clairement.",
  },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Accueil"
        description="Portfolio de Mohamed Guerroui, développeur front-end React en évolution vers la gestion de projet digital. Projets : ArgentBank, Sophie Bluel, To-Do List."
        canonical="/"
      />
      <main id="main-content" role="main">
        {/* Hero */}
        <section className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-b from-blue-50 to-white px-6 py-16">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-center max-w-3xl"
          >
            <motion.p
              variants={item}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white border border-blue-100 text-sm font-medium text-gray-700 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-green-500" aria-hidden="true" />
              Ouvert aux opportunités · Île-de-France
            </motion.p>

            <motion.h1
              variants={item}
              className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4"
            >
              Bonjour, je suis{" "}
              <span className="text-blue-600">Mohamed Guerroui</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6"
            >
              Développeur Front-End React · En évolution vers la gestion de projet digital
            </motion.p>

            <motion.p
              variants={item}
              className="text-lg md:text-xl text-gray-600 mb-8"
            >
              Je fais le lien entre les besoins des utilisateurs et l'équipe
              technique : je comprends le code, je me forme à cadrer un projet et je
              garde l'utilisateur au centre de chaque décision.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
            >
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/projects"
                  className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition text-center block"
                >
                  Voir mes projets
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-6 py-3 bg-gray-200 text-gray-900 rounded-lg text-lg font-medium hover:bg-gray-300 focus:ring-2 focus:ring-blue-500 transition text-center block"
                >
                  Me contacter
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <a
                  href={CV_URL}
                  download
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-700 border border-blue-200 rounded-lg text-lg font-medium hover:bg-blue-50 focus:ring-2 focus:ring-blue-500 transition text-center"
                >
                  <FiDownload aria-hidden="true" /> Télécharger mon CV
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Ce que j'apporte */}
        <section aria-labelledby="atouts-title" className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2
              id="atouts-title"
              className="text-2xl md:text-3xl font-bold text-center mb-10"
            >
              Ce que j'apporte à une équipe
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {strengths.map((s) => (
                <div
                  key={s.title}
                  className="rounded-xl border border-gray-100 bg-gray-50 p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projets en vedette */}
        <section
          aria-labelledby="projets-vedette-title"
          className="px-6 py-16 bg-gray-50"
        >
          <div className="max-w-6xl mx-auto">
            <h2
              id="projets-vedette-title"
              className="text-2xl md:text-3xl font-bold text-center mb-10"
            >
              Projets récents
            </h2>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {projectsData.map((p, i) => (
                <ProjectCard
                  key={p.id}
                  id={p.id}
                  title={p.title}
                  description={p.shortDescription}
                  image={p.image}
                  techs={p.techs}
                  demoLink={p.demoLink}
                  index={i}
                />
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
