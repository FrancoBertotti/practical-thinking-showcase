import { notFound } from 'next/navigation';
import Link from 'next/link';
import { mockProducts } from '@/lib/mock-data';
import { whatsappLink } from '@/lib/whatsapp';

export function generateStaticParams() {
    return mockProducts.map(p => ({ id: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = mockProducts.find(p => p.slug === id);
    if (!product) return {};
    return {
        title: `${product.name} | Practical Thinking Studio`,
        description: product.description,
    };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = mockProducts.find(p => p.slug === id);

    if (!product) notFound();

    const intent = product.price_usd > 0
        ? `Quisiera consultar sobre el producto "${product.name}" del catálogo 3D.`
        : `Quisiera consultar sobre un trabajo de reingeniería similar a "${product.name}".`;

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#dc4a1b] selection:text-white">

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f12_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 z-10">

                {/* BREADCRUMB */}
                <nav className="flex items-center gap-2 font-mono text-[11px] text-neutral-600 mb-10 lowercase">
                    <Link href="/" className="hover:text-neutral-400 transition-colors">inicio</Link>
                    <span>/</span>
                    <Link href="/3d" className="hover:text-neutral-400 transition-colors">3d</Link>
                    <span>/</span>
                    <Link href="/3d/catalogo" className="hover:text-neutral-400 transition-colors">catálogo</Link>
                    <span>/</span>
                    <span className="text-neutral-400">{product.name.toLowerCase()}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* PLACEHOLDER IMAGEN */}
                    <div className="bg-neutral-950 border border-neutral-800 aspect-square flex items-center justify-center">
                        <span className="text-neutral-700 font-mono text-[12px] uppercase tracking-widest">
                            imagen no disponible
                        </span>
                    </div>

                    {/* DETALLE */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 bg-[#dc4a1b]/10 text-[#f67043] border border-[#dc4a1b]/30 font-mono text-[10px] uppercase tracking-wider">
                                    {product.category}
                                </span>
                                <span className="text-neutral-600 font-mono text-[10px]">
                                    {product.material}
                                </span>
                            </div>

                            <h1 className="text-white text-[28px] sm:text-[36px] font-bold mb-4 leading-tight">
                                {product.name}
                            </h1>

                            <p className="text-neutral-300 text-[15px] leading-relaxed lowercase mb-6">
                                {product.description}
                            </p>

                            <div className="flex flex-wrap gap-2 font-mono mb-8">
                                {product.tags.map(tag => (
                                    <span key={tag} className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-500 text-[10px]">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="border-t border-neutral-800 pt-6 mb-8">
                                <div className="flex items-center justify-between">
                                    <span className="text-neutral-500 font-mono text-[12px] uppercase">precio</span>
                                    <span className="text-[#f67043] font-mono text-[24px] font-bold">
                                        {product.price_usd > 0 ? `USD ${product.price_usd}` : 'a consultar'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <a
                                href={whatsappLink(intent)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full text-center bg-[#dc4a1b] hover:bg-[#f67043] text-white font-mono text-[12px] uppercase tracking-wider py-4 px-6 rounded-none transition-all duration-300 shadow-[0_0_20px_rgba(220,74,27,0.3)] hover:-translate-y-0.5"
                            >
                                consultar por WhatsApp →
                            </a>
                            <Link
                                href="/3d/catalogo"
                                className="w-full text-center bg-neutral-950 hover:bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 font-mono text-[12px] uppercase tracking-wider py-3 px-6 rounded-none transition-all duration-300"
                            >
                                ← volver al catálogo
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
