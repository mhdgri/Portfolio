export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-16">
      <div className="max-w-6xl mx-auto text-center">
        <p>© {new Date().getFullYear()} Mohamed Guerroui. Tous droits réservés.</p>
      </div>
    </footer>
  );
}