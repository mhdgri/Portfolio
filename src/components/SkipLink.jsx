// src/components/SkipLink.jsx
export default function SkipLink() {
  return (
    <a
      href="#main"
      className="absolute left-0 top-0 bg-blue-600 text-white px-4 py-2 rounded transform -translate-y-full focus:translate-y-0 transition-transform z-[100]"
    >
      Aller au contenu principal
    </a>
  );
}