'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Product } from '@/lib/mock-data';

const CATEGORIES = ['Todos', 'Organización', 'Ergonomía', 'Taller', 'Reingeniería'];

interface CatalogClientProps {
    initialProducts: Product[];
}

export default function CatalogClient({ initialProducts }: CatalogClientProps) {
    const [activeCategory, setActiveCategory] = useState('Todos');

    const filtered = activeCategory === 'Todos'
        ? initialProducts
        : initialProducts.filter(p => p.category === activeCategory);

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#dc4a1b] selection:text-white">

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f12_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] font-mono bg-[#dc4a1b]/10 border border-[#dc4a1b]/30 text-[#f67043] mb-8 lowercase">
                    <span className="w-2 h-2 rounded-full bg-[#f67043]" />
                    catálogo // productos disponibles
                </div>

                <h1 className="text-[38px] sm:text-[52px] font-bold uppercase tracking-tight leading-[1.1] mb-4 text-white">
                    CATÁLOGO 3D
                </h1>
                <p className="text-neutral-400 text-[16px] max-w-xl mb-10 lowercase">
                    productos estándar en stock y trabajos de reingeniería a pedido.
                </p>

                {/* FILTROS */}
                <div className="flex flex-wrap gap-2 font-mono mb-12">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 text-[11px] uppercase tracking-wider border rounded-none transition-all duration-200 ${
                                activeCategory === cat
                                    ? 'bg-[#dc4a1b] border-[#dc4a1b] text-white'
                                    : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-[#dc4a1b] hover:text-white'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* GRID */}
            <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map(product => (
                        <Link
                            key={product.id}
                            href={`/3d/catalogo/${product.slug}`}
                            className="group bg-neutral-950 border border-neutral-800 hover:border-[#dc4a1b] p-6 rounded-none transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_20px_rgba(220,74,27,0.15)] flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-500 font-mono text-[10px] uppercase">
                                        {product.category}
                                    </span>
                                    <span className="text-neutral-600 font-mono text-[10px]">
                                        {product.material}
                                    </span>
                                </div>

                                <h3 className="text-white text-[16px] font-bold mb-2 group-hover:text-[#f67043] transition-colors">
                                    {product.name}
                                </h3>

                                <p className="text-neutral-400 text-[13px] leading-relaxed lowercase mb-4">
                                    {product.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5">
                                    {product.tags.map(tag => (
                                        <span key={tag} className="px-2 py-0.5 bg-black border border-neutral-900 text-neutral-600 font-mono text-[10px]">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6 flex items-center justify-between">
                                <span className="text-[#f67043] font-mono text-[14px] font-bold">
                                    {product.price_usd > 0 ? `USD ${product.price_usd}` : 'a consultar'}
                                </span>
                                <span className="text-neutral-600 group-hover:text-[#f67043] font-mono text-[11px] uppercase transition-colors">
                                    ver detalle →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <p className="text-neutral-600 font-mono text-[14px] lowercase py-20 text-center">
                        no hay productos en esta categoría.
                    </p>
                )}
            </section>
        </div>
    );
}
