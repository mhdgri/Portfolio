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
              <span className="text-blue-600 font-semibold">Mohamed Guerroui</span>, développeur
              front-end junior. J’aime concevoir des interfaces modernes, accessibles et performantes,
              avec une attention particulière portée aux détails et à l’expérience utilisateur.
            </motion.p>

            <motion.p variants={item}>
              Après une première vie professionnelle dans un autre domaine, j’ai choisi de me
              reconvertir vers le développement web. Ma formation m’a appris à transformer des
              maquettes en applications fonctionnelles et à travailler proprement : structure
              sémantique, accessibilité et bonnes pratiques.
            </motion.p>

            <motion.p variants={item}>
              Je travaille au quotidien avec <strong>React</strong>, <strong>Redux Toolkit</strong> et
              <strong> JavaScript ES6+</strong>, ainsi qu’avec <strong>HTML5</strong>, <strong>CSS3</strong> et{" "}
              <strong>Tailwind CSS</strong> pour produire des interfaces responsives et maintenables.
              Parmi mes projets, <em>ArgentBank</em> (React/Redux) et <em>Sophie Bluel</em> (JavaScript
              Vanilla) illustrent ma capacité à livrer des fonctionnalités complètes et robustes.
            </motion.p>

            <motion.p variants={item}>
              Curieux et rigoureux, je progresse en continu sur l’écosystème React et les standards du
              web. Mon objectif : rejoindre une équipe où je pourrai contribuer à des produits utiles,
              apprendre chaque jour et faire grandir la qualité du front-end.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
