// src/pages/Journey.jsx
import { motion } from "framer-motion";
import SEO from "../components/SEO";

const projectsTimeline = [
  {
    title: "Créez et publiez votre portfolio de développeur",
    description:
      "Création de mon portfolio professionnel en React avec Tailwind CSS, animations Framer Motion et déploiement sur Vercel.",
    skills: ["React", "Tailwind CSS", "Framer Motion", "SEO", "Accessibilité"],
  },
  {
    title: "Implémentez le front-end d'une application bancaire avec React",
    description:
      "Développement d'ArgentBank : application bancaire avec authentification JWT, gestion d'état Redux Toolkit et interface utilisateur responsive.",
    skills: ["React", "Redux Toolkit", "JWT", "API REST", "React Router"],
  },
  {
    title: "Débuggez le site d'une agence d'événementiel",
    description:
      "Identification et correction de bugs, optimisation des performances et amélioration de l'expérience utilisateur d'un site événementiel.",
    skills: ["JavaScript", "Debugging", "Chrome DevTools", "Optimisation"],
  },
  {
    title: "Optimisez le référencement d'un site de photographe",

    description:
      "Amélioration du SEO technique et sémantique, optimisation des performances et de l'accessibilité avec Lighthouse et Wave.",
    skills: ["SEO", "Performance", "Lighthouse", "Accessibilité", "Schema.org"],
  },
  {
    title: "Créez une application web de location immobilière avec React",
    status: "Validé",
    duration: "60h",
    description:
      "Développement de Kasa : plateforme de location avec React Router, composants réutilisables et animations fluides.",
    skills: ["React", "React Router", "SCSS", "Composants", "Props"],
  },
  {
    title: "Planifiez le développement du site de votre client",
    description:
      "Mise en place d'une méthodologie Agile avec Kanban, veille technologique et spécifications techniques pour un projet client.",
    skills: [
      "Gestion de projet",
      "Agile",
      "Kanban",
      "Veille",
      "Spécifications",
    ],
  },
  {
    title: "Créez une page web dynamique avec JavaScript",
    description:
      "Développement du portfolio Sophie Bluel avec galerie dynamique, filtres, authentification et interface d'administration en JavaScript Vanilla.",
    skills: [
      "JavaScript Vanilla",
      "DOM",
      "API REST",
      "Fetch",
      "Authentification",
    ],
  },
  {
    title: "Premiers pas sur le langage JavaScript",
    description:
      "Apprentissage des fondamentaux de JavaScript : variables, fonctions, conditions, boucles et manipulation du DOM.",
    skills: ["JavaScript", "Variables", "Fonctions", "DOM", "Événements"],
  },
  {
    title: "Améliorez l'interface d'un site mobile avec des animations CSS",
    description:
      "Intégration du site Menu Maker avec animations CSS avancées : keyframes, transitions et transformations pour améliorer l'UX mobile.",
    skills: ["CSS3", "Animations", "Keyframes", "Transitions", "Mobile-first"],
  },
  {
    title: "Créez la page d'accueil d'une agence de voyage avec HTML & CSS",
    description:
      "Intégration responsive du site Booki avec HTML5 sémantique, CSS3, Flexbox et Grid pour une compatibilité multi-devices.",
    skills: ["HTML5", "CSS3", "Flexbox", "Grid", "Responsive Design"],
  },
  {
    title: "Premiers pas sur le langage HTML",
    description:
      "Découverte du langage HTML : structure d'une page web, balises sémantiques, formulaires et bonnes pratiques.",
    skills: ["HTML", "Sémantique", "Structure", "Balises", "Formulaires"],
  },
  {
    title: "Démarrez votre formation d'intégrateur web",
    description:
      "Introduction au métier de développeur web : écosystème, outils, méthodologies et premiers pas dans l'environnement de développement.",
    skills: ["Git", "GitHub", "VS Code", "Terminal", "Méthodologie"],
  },
];

export default function Journey() {
  return (
    <>
      <SEO
        title="Mon Parcours"
        description="Découvrez mon parcours de formation complet : 12 projets validés en développement web, de l'intégration HTML/CSS à React et Redux."
        canonical="/journey"
      />

      <section className="py-16 px-6 bg-white min-h-screen">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Mon Parcours de Formation
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez les 12 projets que j'ai réalisés durant ma formation de
              Développeur Web / Intégrateur Web, représentant plus de{" "}
              <strong>540 heures</strong> de développement et d'apprentissage.
            </p>
          </motion.div>

          <div className="relative pl-8">
            <motion.span
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute left-3 top-0 w-[2px] bg-blue-600 rounded-full"
              style={{ height: "100%" }}
            />

            <div className="space-y-10">
              {projectsTimeline.map((project, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative pl-8"
                >
                  <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                    {/* En-tête */}
                    <div className="flex justify-between items-start gap-4 mb-3 flex-wrap">
                      <div className="flex-grow">
                        <div className="flex items-start gap-3 mb-2">
                          <span
                            className="w-3.5 h-3.5 aspect-square rounded-full bg-blue-600 ring-4 ring-white mt-1 flex-none shrink-0"
                            aria-hidden="true"
                          />

                          <h3 className="text-xl font-bold text-gray-900 leading-tight">
                            {project.title}
                          </h3>
                        </div>

                        <div className="flex gap-3 items-center flex-wrap">
                          <span className="text-sm text-gray-500">
                            {project.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-md font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
