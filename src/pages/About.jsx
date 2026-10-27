import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import SEO from "../components/SEO";
import { CV_URL } from "../config";

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function About() {
  return (
    <>
      <SEO
        title="À propos"
        description="Mohamed Guerroui : formé au développement web, en évolution vers la gestion de projet digital, avec une expérience terrain au contact du public."
        canonical="/about"
      />

      <main id="main-content" role="main" className="py-16 px-6 bg-white min-h-screen">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            À propos de moi
          </motion.h1>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6 text-gray-700 text-lg leading-relaxed md:text-justify [hyphens:auto]"
          >
            <motion.p variants={item}>
              Bonjour, je m’appelle{" "}
              <span className="text-blue-600 font-semibold">Mohamed Guerroui</span>. Diplômé
              développeur intégrateur web, j’évolue aujourd’hui vers la{" "}
              <strong>gestion de projet digital</strong> : mon objectif est de faire le lien entre
              les besoins des utilisateurs, les enjeux métier et l’équipe technique. Je viens de
              commencer une formation <strong>Chef de projet digital</strong>, en démarrant par
              l’<strong>UX design</strong> : benchmark concurrentiel, parcours utilisateur et
              wireframes.
            </motion.p>

            <motion.p variants={item}>
              Avant le web, j’ai travaillé dans le <strong>transport public</strong>, au contact
              quotidien des voyageurs. Gérer des imprévus, appliquer des procédures exigeantes,
              expliquer clairement une situation à des personnes pressées : ce sont des réflexes que
              j’apporte aujourd’hui dans chaque projet.
            </motion.p>

            <motion.p variants={item}>
              Grâce à mon titre de <strong>Développeur Intégrateur Web</strong> (OpenClassrooms), je maîtrise{" "}
              <strong>React</strong>, <strong>Redux Toolkit</strong>, <strong>JavaScript</strong>,
              HTML/CSS et Tailwind. Des projets comme <em>ArgentBank</em> (React/Redux) ou{" "}
              <em>Sophie Bluel</em> (JavaScript Vanilla) m’ont appris à livrer des fonctionnalités
              complètes, et le module de planification m’a formé aux méthodes{" "}
              <strong>Agile</strong>, au <strong>Kanban</strong> et à la rédaction de spécifications.
            </motion.p>

            <motion.p variants={item}>
              Ce double profil est ma force : je sais ce qu’une fonctionnalité demande vraiment côté
              technique, et je sais l’expliquer à ceux qui ne codent pas. Je cherche à rejoindre une
              équipe où je pourrai cadrer, coordonner et faire avancer des produits utiles.
            </motion.p>
          </motion.div>

          <div className="mt-10 text-center">
            <a href={CV_URL} download className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-700 border border-blue-200 rounded-lg text-lg font-medium hover:bg-blue-50 focus:ring-2 focus:ring-blue-500 transition">
              <FiDownload aria-hidden="true" /> Télécharger mon CV
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
