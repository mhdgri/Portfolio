// src/components/Footer.jsx
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LINKEDIN_URL, GITHUB_URL } from "../config";

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
        <div className="text-sm mb-4 md:mb-0 text-center md:text-left">
          <p>© {new Date().getFullYear()} Mohamed Guerroui</p>
          <a
            href="mailto:mohamed.guerroui.mg@gmail.com"
            className="hover:text-white break-all"
          >
            mohamed.guerroui.mg@gmail.com
          </a>
        </div>
        <div className="flex gap-6">
        <motion.a
          whileHover={{ y: -2 }}
          href={GITHUB_URL}
          aria-label="Ouvrir le profil GitHub de Mohamed Guerroui"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-white"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          whileHover={{ y: -2 }}
          href={LINKEDIN_URL}
          aria-label="Ouvrir le profil LinkedIn de Mohamed Guerroui"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-white"
        >
          <FaLinkedin />
        </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}