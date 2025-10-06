// src/pages/NotFound.jsx
import SEO from "../components/SEO.jsx";

export default function NotFound() {
  return (
    <section className="py-20 text-center">
      <SEO
        title="Page introuvable"
        description="La page que vous cherchez n'existe pas ou a été déplacée."
        canonical="/404"
      />
      <h1 className="text-4xl font-bold mb-2">404 – Page introuvable</h1>
      <p className="text-gray-600">La page demandée n’existe pas.</p>
      <a
        href="/"
        className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Retour à l’accueil
      </a>
    </section>
  );
}
