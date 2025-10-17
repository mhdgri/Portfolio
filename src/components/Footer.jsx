// src/components/Footer.jsx
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-gray-900 text-gray-300 py-6 mt-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Mohamed Guerroui. Tous droits réservés.
        </p>

        <div className="flex gap-6 text-xl">
          <motion.a
            whileHover={{ y: -2 }}
            href="https://github.com/mhdgri"
            aria-label="Ouvrir GitHub de Mohamed Guerroui"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            href="https://linkedin.com/in/mohamed-guerroui-a27601388/"
            aria-label="Ouvrir LinkedIn de Mohamed Guerroui"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}