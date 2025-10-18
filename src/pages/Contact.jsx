// src/pages/Contact.jsx
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import SEO from "../components/SEO";

export default function Contact() {
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Contactez Mohamed Guerroui pour discuter d'opportunités professionnelles, de projets web ou pour toute collaboration en développement Front-End React."
        canonical="/contact"
      />
      <section id="main-content" role="main" className="py-16 px-6 bg-gray-50 min-h-screen">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Me contacter
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-gray-600 mb-12 text-lg"
          >
            Vous souhaitez échanger à propos d'une opportunité ou d'un projet ? N'hésitez pas à me contacter
            via le formulaire ci-dessous ou mes réseaux.
          </motion.p>

          <motion.form
            action="https://formspree.io/f/mrbykwlg"
            method="POST"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            aria-labelledby="contact-title"
            className="bg-white shadow-md rounded-2xl p-8 space-y-6 text-left"
          >
            <h2 id="contact-title" className="sr-only">Formulaire de contact</h2>
            {/* Message de succès */}
            {status === "success" && (
              <div
                role="status"
                aria-live="polite"
                className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
              >
                Merci ! Votre message a bien été envoyé. Je vous répondrai dans les plus brefs délais.
              </div>
            )}

            {/* Message d'erreur */}
            {status === "error" && (
              <div
                role="alert"
                aria-live="assertive"
                className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg"
              >
                Une erreur s'est produite. Veuillez réessayer ou me contacter directement via LinkedIn.
              </div>
            )}

            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                Nom <span className="text-red-500" aria-label="requis">*</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                autoComplete="name"
                disabled={status === "sending"}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                aria-required="true" required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                Email <span className="text-red-500" aria-label="requis">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                disabled={status === "sending"}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                aria-required="true" required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                Message <span className="text-red-500" aria-label="requis">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                disabled={status === "sending"}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                aria-required="true" required
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ y: status === "sending" ? 0 : -2 }}
              whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
              className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Envoi en cours..." : "Envoyer"}
            </motion.button>
          </motion.form>

          <div className="flex justify-center gap-6 mt-12">
            <motion.a
              whileHover={{ y: -3 }}
              href="https://github.com/mhdgri"
              aria-label="Visiter le profil GitHub de Mohamed Guerroui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition text-3xl"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="https://linkedin.com/in/mohamed-guerroui-a27601388/"
              aria-label="Visiter le profil LinkedIn de Mohamed Guerroui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition text-3xl"
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
}