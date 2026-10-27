// src/pages/Contact.jsx
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { EMAIL, CV_URL, LINKEDIN_URL, GITHUB_URL } from "../config";
import { useState } from "react";
import SEO from "../components/SEO";

export default function Contact() {
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"
  const [copied, setCopied] = useState(false);
  const email = EMAIL;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

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
      <main id="main-content" role="main" className="py-16 px-6 bg-gray-50 min-h-screen">
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
            via le formulaire ci-dessous par email ou sur LinkedIn.
          </motion.p>

          <div className="grid gap-4 sm:grid-cols-2 mb-10 text-left">
            <div className="bg-white rounded-xl border border-gray-200 p-5 flex items-start gap-3">
              <FaEnvelope className="text-blue-600 mt-1 shrink-0" aria-hidden="true" />
              <div className="min-w-0">
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <a href={`mailto:${email}`} className="font-medium text-gray-900 break-all hover:text-blue-600">
                  {email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="block mt-2 text-sm text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  {copied ? "Adresse copiée" : "Copier l'adresse"}
                </button>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5 flex items-start gap-3">
              <FaMapMarkerAlt className="text-blue-600 mt-1 shrink-0" aria-hidden="true" />
              <div>
                <p className="text-sm text-gray-500 mb-1">Localisation</p>
                <p className="font-medium text-gray-900">Île-de-France (Yvelines)</p>
              </div>
            </div>
          </div>

          <a
            href={CV_URL}
            download
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-700 border border-blue-200 rounded-lg text-lg font-medium hover:bg-blue-50 focus:ring-2 focus:ring-blue-500 transition mb-10"
          >
            <FiDownload aria-hidden="true" /> Télécharger mon CV
          </a>

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
                Une erreur s'est produite. Veuillez réessayer ou m'écrire directement par email.
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
              href={GITHUB_URL}
              aria-label="Visiter le profil GitHub de Mohamed Guerroui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition text-3xl"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href={LINKEDIN_URL}
              aria-label="Visiter le profil LinkedIn de Mohamed Guerroui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition text-3xl"
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </div>
      </main>
    </>
  );
}