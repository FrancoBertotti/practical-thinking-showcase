import Link from 'next/link';
import { whatsappLink } from '@/lib/whatsapp';

export const metadata = {
    title: 'División 3D | Practical Thinking Studio',
    description: 'Fabricación 3D, reingeniería de repuestos discontinuados y diseño CAD a medida.',
};

export default function ThreeDPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#dc4a1b] selection:text-white">

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f12_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* HERO */}
            <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] font-mono bg-[#dc4a1b]/10 border border-[#dc4a1b]/30 text-[#f67043] mb-8 lowercase">
                    <span className="w-2 h-2 rounded-full bg-[#f67043] animate-pulse" />
                    división física // fabricación & cad
                </div>

                <h1 className="text-[38px] sm:text-[56px] font-bold uppercase tracking-tight leading-[1.1] mb-6 max-w-4xl text-white">
                    FABRICACIÓN 3D Y{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dc4a1b] to-[#f67043]">
                        REINGENIERÍA CAD
                    </span>
                </h1>

                <p className="text-neutral-400 text-[18px] max-w-2xl mb-10 leading-relaxed lowercase">
                    desde repuestos discontinuados hasta productos funcionales en catálogo. diseño paramétrico, impresión FDM y materiales técnicos.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 font-mono">
                    <Link
                        href="/3d/catalogo"
                        className="px-8 py-3.5 bg-[#dc4a1b] hover:bg-[#f67043] text-white text-[12px] uppercase tracking-wider rounded-none transition-all duration-300 shadow-[0_0_20px_rgba(220,74,27,0.3)] hover:-translate-y-0.5 text-center"
                    >
                        ver catálogo completo →
                    </Link>
                    <a
                        href={whatsappLink('Quisiera consultar por un trabajo de reingeniería o fabricación 3D a medida.')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 hover:border-[#dc4a1b] text-[12px] uppercase tracking-wider rounded-none transition-all duration-300 hover:-translate-y-0.5 text-center"
                    >
                        consultar trabajo a medida
                    </a>
                </div>
            </section>

            {/* SERVICIOS */}
            <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
                <div className="border-t border-neutral-800 pt-16">
                    <span className="text-[#f67043] text-[11px] font-mono uppercase tracking-widest block mb-2">
                        // servicios disponibles
                    </span>
                    <h2 className="text-white text-[28px] sm:text-[36px] font-bold uppercase mb-12">
                        qué fabricamos
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div className="bg-neutral-950 border border-neutral-800 hover:border-[#dc4a1b] p-6 rounded-none transition-all duration-300 hover:-translate-y-1.5 group hover:shadow-[0_0_20px_rgba(220,74,27,0.15)]">
                            <div className="text-[#f67043] text-[28px] mb-4">⚙️</div>
                            <h3 className="text-white text-[18px] font-bold lowercase mb-3 group-hover:text-[#f67043] transition-colors">
                                reingeniería de repuestos
                            </h3>
                            <p className="text-neutral-400 text-[13px] leading-relaxed lowercase">
                                medimos, modelamos y reproducimos piezas rotas o discontinuadas en materiales técnicos como PETG, ASA o Nylon.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4 font-mono">
                                <span className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-500 text-[10px]">PETG</span>
                                <span className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-500 text-[10px]">ASA</span>
                                <span className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-500 text-[10px]">Nylon</span>
                            </div>
                        </div>

                        <div className="bg-neutral-950 border border-neutral-800 hover:border-[#dc4a1b] p-6 rounded-none transition-all duration-300 hover:-translate-y-1.5 group hover:shadow-[0_0_20px_rgba(220,74,27,0.15)]">
                            <div className="text-[#f67043] text-[28px] mb-4">📦</div>
                            <h3 className="text-white text-[18px] font-bold lowercase mb-3 group-hover:text-[#f67043] transition-colors">
                                catálogo de productos
                            </h3>
                            <p className="text-neutral-400 text-[13px] leading-relaxed lowercase">
                                organizadores, soportes y accesorios funcionales diseñados para uso doméstico, de escritorio y de taller.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4 font-mono">
                                <span className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-500 text-[10px]">PLA+</span>
                                <span className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-500 text-[10px]">PETG</span>
                            </div>
                        </div>

                        <div className="bg-neutral-950 border border-neutral-800 hover:border-[#dc4a1b] p-6 rounded-none transition-all duration-300 hover:-translate-y-1.5 group hover:shadow-[0_0_20px_rgba(220,74,27,0.15)]">
                            <div className="text-[#f67043] text-[28px] mb-4">🔧</div>
                            <h3 className="text-white text-[18px] font-bold lowercase mb-3 group-hover:text-[#f67043] transition-colors">
                                diseño cad paramétrico
                            </h3>
                            <p className="text-neutral-400 text-[13px] leading-relaxed lowercase">
                                modelado 3D desde cero para proyectos industriales, prototipos o productos originales con especificaciones técnicas propias.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4 font-mono">
                                <span className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-500 text-[10px]">CAD</span>
                                <span className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-500 text-[10px]">FDM</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA CATÁLOGO */}
            <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 z-10">
                <div className="bg-neutral-950 border border-neutral-800 hover:border-[#dc4a1b] p-8 sm:p-12 rounded-none transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,74,27,0.15)]">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                        <div>
                            <h3 className="text-white text-[24px] font-bold lowercase mb-2">
                                explorá el catálogo de productos disponibles
                            </h3>
                            <p className="text-neutral-400 text-[14px] lowercase">
                                productos estándar con entrega rápida y trabajos a medida bajo presupuesto.
                            </p>
                        </div>
                        <Link
                            href="/3d/catalogo"
                            className="whitespace-nowrap bg-[#dc4a1b] hover:bg-[#f67043] text-white font-mono text-[12px] uppercase tracking-wider py-4 px-8 rounded-none transition-all duration-300 hover:-translate-y-0.5"
                        >
                            ir al catálogo →
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
