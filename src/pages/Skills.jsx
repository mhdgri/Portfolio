import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const technicalSkills = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: "html5", color: "E34F26" },
      { name: "CSS3", icon: "css3", color: "1572B6" },
      { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Redux", icon: "redux", color: "764ABC" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
    ],
  },
  {
    category: "Outils & Workflow",
    skills: [
      { name: "Git", icon: "git", color: "F05032" },
      { name: "GitHub", icon: "github", color: "181717" },
      { name: "VS Code", icon: "visualstudiocode", color: "007ACC" },
      { name: "Vite", icon: "vite", color: "646CFF" },
      { name: "npm", icon: "npm", color: "CB3837" },
      { name: "Postman", icon: "postman", color: "FF6C37" },
    ],
  },
];

const softSkills = [
  {
    name: "Rigueur & Attention aux détails",
    description: "Code propre, respect des standards et des bonnes pratiques",
    icon: "🎯",
  },
  {
    name: "Curiosité & Apprentissage continu",
    description:
      "Veille technologique active, exploration de nouvelles technologies",
    icon: "🔍",
  },
  {
    name: "Autonomie",
    description: "Capacité à résoudre des problèmes de manière indépendante",
    icon: "💪",
  },
  {
    name: "Communication",
    description:
      "Documentation claire, partage de connaissances, travail en équipe",
    icon: "💬",
  },
  {
    name: "Adaptabilité",
    description:
      "Flexibilité face aux changements de technologies et de méthodes",
    icon: "🔄",
  },
  {
    name: "Sens du détail UX",
    description: "Souci de l'expérience utilisateur et de l'accessibilité",
    icon: "✨",
  },
];

function SkillCard({ skill }) {
  const customIcons = {
    css3: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="#1572B6">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
      </svg>
    ),
    visualstudiocode: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="#007ACC">
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
      </svg>
    ),
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -4 }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center justify-center gap-3"
    >
      {customIcons[skill.icon] ? (
        customIcons[skill.icon]
      ) : (
        <img
          src={`https://cdn.simpleicons.org/${skill.icon}/${skill.color}`}
          alt={`${skill.name} logo`}
          className="w-16 h-16"
        />
      )}
      <h4 className="font-semibold text-gray-900 text-center">{skill.name}</h4>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section className="py-16 px-6 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Mes Compétences
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un aperçu de mes compétences techniques acquises durant ma
            formation, ainsi que les soft skills que j'applique au quotidien
            dans mes projets.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <motion.h2
            variants={item}
            className="text-2xl font-bold mb-8 text-center"
          >
            💻 Compétences Techniques
          </motion.h2>

          <div className="space-y-12">
            {technicalSkills.map((category, catIndex) => (
              <motion.div key={catIndex} variants={item}>
                <h3 className="text-xl font-semibold mb-6 text-gray-800">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard key={skillIndex} skill={skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={item}
            className="text-2xl font-bold mb-8 text-center"
          >
            🌟 Soft Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3">{skill.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {skill.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-4">Prêt à collaborer ?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Je suis disponible pour des opportunités en CDI, stage ou freelance.
            N'hésitez pas à me contacter pour discuter de votre projet !
          </p>

          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition focus:ring-2 focus:ring-blue-500"
            >
              Me contacter
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
