export default function Home() {
  return (
    <section className="py-16 text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        Bonjour, je suis Mohamed Guerroui
      </h1>
      <h2 className="text-2xl text-gray-700 mb-6">
        Développeur Web Junior – Front-End React
      </h2>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Passionné par la création d'interfaces modernes, accessibles et performantes.
      </p>
      <div className="flex justify-center gap-4">
        <a href="/projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Voir mes projets
        </a>
        <a href="/contact" className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300">
          Me contacter
        </a>
      </div>
    </section>
  );
}