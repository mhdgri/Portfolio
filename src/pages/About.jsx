// src/pages/About.jsx
import { motion } from "framer-motion";
import SEO from "../components/SEO";

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function About() {
  return (
    <>
      <SEO
        title="À propos"
        description="Découvrez mon parcours de développeur web junior, ma formation, mes compétences en React, Redux et JavaScript, et ma passion pour l'accessibilité web."
        canonical="/about"
      />
      <section className="py-16 px-6 bg-white min-h-screen">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            À propos de moi
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6 text-gray-700 text-lg leading-relaxed"
          >
            <motion.p variants={item}>
              <strong>Accroche :</strong> Bonjour, je m'appelle{" "}
              <span className="text-blue-600 font-semibold">Mohamed Guerroui</span>, développeur web
              junior spécialisé en intégration front-end avec une appétence pour React et
              l'accessibilité.
            </motion.p>
            <motion.p variants={item}>
              <strong>Parcours :</strong> Après une première expérience dans un autre domaine, j'ai
              choisi de me reconvertir vers le développement web. J'ai suivi une formation diplômante
              où j'ai appris à transformer des maquettes en sites fonctionnels et à développer des
              applications modernes.
            </motion.p>
            <motion.p variants={item}>
              <strong>Stack technique :</strong> Je maîtrise HTML5, CSS3, JavaScript ES6+, ainsi que
              React et Redux Toolkit. J'ai aussi travaillé avec Tailwind CSS pour concevoir des interfaces
              modernes et responsives.
            </motion.p>
            <motion.p variants={item}>
              <strong>Projets marquants :</strong> Parmi mes projets, <em>ArgentBank</em> (React/Redux)
              et <em>Sophie Bluel</em> (JavaScript Vanilla) démontrent ma capacité à créer des
              applications complètes et fonctionnelles.
            </motion.p>
            <motion.p variants={item}>
              <strong>Approche :</strong> Je privilégie la rigueur, la curiosité et la qualité. Mon code
              se veut propre, accessible et performant, en respectant les standards du web moderne.
            </motion.p>
            <motion.p variants={item}>
              <strong>Ambitions :</strong> Mon objectif est de contribuer à des projets ambitieux,
              de continuer à progresser sur React et les bonnes pratiques, et d'intégrer une équipe
              où je pourrai apporter mes compétences tout en continuant à apprendre.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}