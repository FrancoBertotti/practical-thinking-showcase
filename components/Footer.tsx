export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-black text-neutral-500 py-8 font-mono text-xs text-center">
      <div className="max-w-7xl mx-auto px-4">
        <p>© {new Date().getFullYear()} Practical Thinking Studio. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}