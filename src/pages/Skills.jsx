import { motion } from "framer-motion";
import SEO from "../components/SEO";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const technicalSkills = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", level: 90, color: "bg-orange-500" },
      { name: "CSS3", level: 85, color: "bg-blue-500" },
      { name: "JavaScript ES6+", level: 80, color: "bg-yellow-500" },
      { name: "React", level: 85, color: "bg-cyan-500" },
      { name: "Redux Toolkit", level: 75, color: "bg-purple-500" },
      { name: "Tailwind CSS", level: 85, color: "bg-teal-500" }
    ]
  },
  {
    category: "Outils & Workflow",
    skills: [
      { name: "Git", level: 80, color: "bg-orange-600" },
      { name: "GitHub", level: 85, color: "bg-gray-700" },
      { name: "VS Code", level: 90, color: "bg-blue-600" },
      { name: "Vite", level: 80, color: "bg-purple-600" },
      { name: "npm", level: 85, color: "bg-red-600" },
      { name: "Postman", level: 75, color: "bg-orange-500" }
    ]
  }
];

const softSkills = [
  {
    name: "Rigueur & Attention aux détails",
    description: "Code propre, respect des standards et des bonnes pratiques",
    icon: "🎯"
  },
  {
    name: "Curiosité & Apprentissage continu",
    description: "Veille technologique active, exploration de nouvelles technologies",
    icon: "🔍"
  },
  {
    name: "Autonomie",
    description: "Capacité à résoudre des problèmes de manière indépendante",
    icon: "💪"
  },
  {
    name: "Communication",
    description: "Documentation claire, partage de connaissances, travail en équipe",
    icon: "💬"
  },
  {
    name: "Adaptabilité",
    description: "Flexibilité face aux changements de technologies et de méthodes",
    icon: "🔄"
  },
  {
    name: "Sens du détail UX",
    description: "Souci de l'expérience utilisateur et de l'accessibilité",
    icon: "✨"
  }
];

export default function Skills() {
  return (
    <>
      <SEO
        title="Compétences"
        description="Compétences techniques en développement web : HTML5, CSS3, JavaScript, React, Redux, Tailwind CSS. Soft skills : rigueur, curiosité, autonomie."
        canonical="/skills"
      />
      
      <section className="py-16 px-6 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Mes Compétences</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un aperçu de mes compétences techniques acquises durant ma formation, 
              ainsi que les soft skills que j'applique au quotidien dans mes projets.
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <motion.a
              href="/contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition focus:ring-2 focus:ring-blue-500"
            >
              Me contacter
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function SkillCard({ skill }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-50 p-5 rounded-xl hover:shadow-md transition-all"
    >
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-gray-900">{skill.name}</h4>
        <span className="text-sm text-gray-600 font-medium">{skill.level}%</span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className={`${skill.color} h-full rounded-full`}
          role="progressbar"
          aria-valuenow={skill.level}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label={`Niveau de compétence en ${skill.name}`}
        />
      </div>
    </motion.div>
  );
}