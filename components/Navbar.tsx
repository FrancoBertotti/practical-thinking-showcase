import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800/80 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-wider text-white uppercase font-mono">
          Practical Thinking<span className="text-[#dc4a1b]">.</span>
        </Link>

        <nav className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest">
          <Link href="/3d" className="text-neutral-400 hover:text-[#f67043] transition-colors">
            3D Studio
          </Link>
          <Link href="/dev" className="text-neutral-400 hover:text-[#1bacdc] transition-colors">
            Dev & Software
          </Link>
        </nav>
      </div>
    </header>
  );
}