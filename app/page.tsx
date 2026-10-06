import Link from 'next/link';
import { whatsappLink } from '@/lib/whatsapp';

export const metadata = {
    title: 'Practical Thinking Studio | Soluciones Físicas & Desarrollo Digital',
    description: 'De la idea al producto: Fabricación 3D, reingeniería de repuestos, diseño CAD y desarrollo de software a medida para negocios.',
};

export default function HomePage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#dc4a1b] selection:text-white">

            {/* BACKGROUND DECORATIVO (GRID & GLOW) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f12_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* HERO SECTION */}
            <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center z-10">

                {/* BADGE PULSANTE */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none text-[11px] font-mono bg-[#dc4a1b]/10 border border-[#dc4a1b]/30 text-[#f67043] mb-8 shadow-[0_0_15px_rgba(220,74,27,0.15)] lowercase">
                    <span className="w-2 h-2 rounded-full bg-[#f67043] animate-pulse" />
                    practical thinking studio // soluciones físicas & digitales
                </div>

                {/* TÍTULO PRINCIPAL */}
                <h1 className="text-[38px] sm:text-[56px] lg:text-[64px] font-bold uppercase tracking-tight leading-[1.1] mb-6 max-w-5xl mx-auto text-white">
                    DISEÑAMOS Y FABRICAMOS TUS PROYECTOS.

                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dc4a1b] via-[#f67043] to-[#1bacdc]">
                        DESDE EL 3D HASTA EL SOFTWARE.
                    </span>
                </h1>

                {/* SUBTÍTULO */}
                <p className="text-neutral-400 text-[18px] sm:text-[20px] font-normal max-w-2xl mx-auto mb-10 leading-relaxed lowercase">
                    transformamos ideas en productos reales mediante fabricación 3D, reingeniería CAD y automatización de software para tus procesos.
                </p>

                {/* BOTONES PRINCIPALES */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto font-mono">
                    <Link
                        href="/3d"
                        className="w-full sm:w-auto px-8 py-3.5 bg-[#dc4a1b] hover:bg-[#f67043] text-white font-normal text-[12px] uppercase tracking-wider rounded-none transition-all duration-300 shadow-[0_0_20px_rgba(220,74,27,0.3)] hover:shadow-[0_0_30px_rgba(220,74,27,0.5)] hover:-translate-y-0.5 text-center"
                    >
                        explorar división 3d
                    </Link>
                    <Link
                        href="/dev"
                        className="w-full sm:w-auto px-8 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 hover:border-[#1bacdc] font-normal text-[12px] uppercase tracking-wider rounded-none transition-all duration-300 hover:-translate-y-0.5 text-center"
                    >
                        soluciones dev & ia
                    </Link>
                </div>

                {/* MÉTRICAS / HIGHLIGHTS EN BARRAS */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16 pt-10 border-t border-neutral-800/80 font-mono">
                    <div className="text-center p-3 bg-neutral-950/50 border border-neutral-900">
                        <div className="text-[#f67043] text-[24px] font-bold">100%</div>
                        <div className="text-neutral-500 text-[11px] lowercase">diseño cad a medida</div>
                    </div>
                    <div className="text-center p-3 bg-neutral-950/50 border border-neutral-900">
                        <div className="text-[#1bacdc] text-[24px] font-bold">{'<'} 48hs</div>
                        <div className="text-neutral-500 text-[11px] lowercase">presupuestos simples</div>
                    </div>
                    <div className="text-center p-3 bg-neutral-950/50 border border-neutral-900">
                        <div className="text-[#f67043] text-[24px] font-bold">+%</div>
                        <div className="text-neutral-500 text-[11px] lowercase">mejora técnica</div>
                    </div>
                    <div className="text-center p-3 bg-neutral-950/50 border border-neutral-900">
                        <div className="text-[#1bacdc] text-[24px] font-bold">1 a 1</div>
                        <div className="text-neutral-500 text-[11px] lowercase">atención directa</div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN CARDS ANIMADAS (SPLIT DIVISIONES) */}
            <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">

                <div className="text-center mb-12">
                    <span className="text-[#1bacdc] text-[11px] font-mono uppercase tracking-widest block mb-2">
                        // ecosistema de soluciones
                    </span>
                    <h2 className="text-white text-[28px] sm:text-[36px] font-bold uppercase">
                        dos divisiones, un solo estándar
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* TARJETA 1: PRACTICAL THINKING STUDIO (3D) */}
                    <div className="group relative bg-neutral-950 border border-neutral-800 hover:border-[#dc4a1b] p-8 rounded-none transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(220,74,27,0.2)] flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <span className="px-3 py-1 bg-[#dc4a1b]/10 text-[#f67043] border border-[#dc4a1b]/30 text-[10px] font-mono uppercase tracking-wider">
                                    ⚡ división física
                                </span>
                                <span className="text-neutral-600 text-[12px] font-mono group-hover:text-[#f67043] transition-colors">
                                    01
                                </span>
                            </div>

                            <h3 className="text-[#f67043] text-[28px] font-bold mb-4 group-hover:translate-x-1 transition-transform">
                                Practical Thinking Studio // 3d
                            </h3>

                            <p className="text-neutral-300 text-[16px] font-normal leading-relaxed mb-6 lowercase">
                                reingeniería de repuestos discontinuados, diseño cad a medida, prototipado rápido y productos funcionales en catálogo.
                            </p>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-2 text-neutral-400 text-[13px] lowercase">
                                    <span className="text-[#f67043]">→</span> catálogo de productos y organizadores
                                </div>
                                <div className="flex items-center gap-2 text-neutral-400 text-[13px] lowercase">
                                    <span className="text-[#f67043]">→</span> reingeniería de piezas rotas o faltantes
                                </div>
                                <div className="flex items-center gap-2 text-neutral-400 text-[13px] lowercase">
                                    <span className="text-[#f67043]">→</span> materiales para tu necesidad
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-8 font-mono">
                                <span className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-400 text-[10px]">CAD / Reengineering</span>
                                <span className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-400 text-[10px]">FDM</span>
                                <span className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-400 text-[10px]">Prototyping</span>
                            </div>
                        </div>

                        <Link
                            href="/3d"
                            className="w-full text-center bg-neutral-900 group-hover:bg-[#dc4a1b] text-white border border-neutral-700 group-hover:border-[#dc4a1b] font-mono text-[12px] uppercase py-3.5 px-6 rounded-none transition-all duration-300 block"
                        >
                            ver catálogo y servicios 3d →
                        </Link>
                    </div>

                    {/* TARJETA 2: PRACTICAL THINKING DEV (SOFTWARE) */}
                    <div className="group relative bg-neutral-950 border border-neutral-800 hover:border-[#1bacdc] p-8 rounded-none transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(27,172,220,0.2)] flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <span className="px-3 py-1 bg-[#1bacdc]/10 text-[#1bacdc] border border-[#1bacdc]/30 text-[10px] font-mono uppercase tracking-wider">
                                    🚀 división digital
                                </span>
                                <span className="text-neutral-600 text-[12px] font-mono group-hover:text-[#1bacdc] transition-colors">
                                    02
                                </span>
                            </div>

                            <h3 className="text-[#1bacdc] text-[28px] font-bold mb-4 group-hover:translate-x-1 transition-transform">
                                Practical Thinking Dev // Software
                            </h3>

                            <p className="text-neutral-300 text-[16px] font-normal leading-relaxed mb-6 lowercase">
                                automatización operativa de flujos de trabajo, asistentes de IA integrados a WhatsApp y desarrollo de software a medida.
                            </p>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-2 text-neutral-400 text-[13px] lowercase">
                                    <span className="text-[#1bacdc]">→</span> automatización de pedidos y presupuestos
                                </div>
                                <div className="flex items-center gap-2 text-neutral-400 text-[13px] lowercase">
                                    <span className="text-[#1bacdc]">→</span> asistentes ia 24/7 en canales de comunicación
                                </div>
                                <div className="flex items-center gap-2 text-neutral-400 text-[13px] lowercase">
                                    <span className="text-[#1bacdc]">→</span> landing pages administradas (lpaas)
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-8 font-mono">
                                <span className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-400 text-[10px]">Next.js</span>
                                <span className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-400 text-[10px]">AI Agents</span>
                                <span className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-400 text-[10px]">Process Automation</span>
                            </div>
                        </div>

                        <Link
                            href="/dev"
                            className="w-full text-center bg-neutral-900 group-hover:bg-[#1bacdc] text-white group-hover:text-black border border-neutral-700 group-hover:border-[#1bacdc] font-mono text-[12px] uppercase py-3.5 px-6 rounded-none transition-all duration-300 block"
                        >
                            ver soluciones de software →
                        </Link>
                    </div>

                </div>
            </section>

            {/* SECCIÓN PROCESO EN 4 PASOS */}
            <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
                <div className="border-t border-neutral-800 pt-16">

                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                        <div>
                            <span className="text-[#f67043] text-[11px] font-mono uppercase tracking-widest block mb-2">
                                // flujo de trabajo
                            </span>
                            <h2 className="text-white text-[28px] sm:text-[36px] font-bold uppercase">
                                cómo trabajamos
                            </h2>
                        </div>
                        <p className="text-neutral-400 text-[14px] max-w-md lowercase leading-relaxed">
                            un método simple y transparente en 4 etapas para pasar de la necesidad inicial al producto fabricado o sistema desplegado.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        <div className="bg-neutral-950 border border-neutral-800 hover:border-[#dc4a1b] p-6 rounded-none transition-all duration-300 hover:-translate-y-1.5 group hover:shadow-[0_0_20px_rgba(220,74,27,0.15)]">
                            <div className="text-[#f67043] text-[32px] font-mono font-bold mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
                                01
                            </div>
                            <h4 className="text-white text-[18px] font-bold lowercase mb-2 group-hover:text-[#f67043] transition-colors">
                                relevamiento
                            </h4>
                            <p className="text-neutral-400 text-[13px] leading-relaxed lowercase">
                                analizamos tu necesidad, piezas dañadas o procesos manuales y definimos el alcance técnico con claridad.
                            </p>
                        </div>

                        <div className="bg-neutral-950 border border-neutral-800 hover:border-[#dc4a1b] p-6 rounded-none transition-all duration-300 hover:-translate-y-1.5 group hover:shadow-[0_0_20px_rgba(220,74,27,0.15)]">
                            <div className="text-[#f67043] text-[32px] font-mono font-bold mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
                                02
                            </div>
                            <h4 className="text-white text-[18px] font-bold lowercase mb-2 group-hover:text-[#f67043] transition-colors">
                                diseño & prototipo
                            </h4>
                            <p className="text-neutral-400 text-[13px] leading-relaxed lowercase">
                                modelamos en CAD 3D o estructuramos el sistema. presentamos renders o pruebas funcionales para tu aprobación.
                            </p>
                        </div>

                        <div className="bg-neutral-950 border border-neutral-800 hover:border-[#1bacdc] p-6 rounded-none transition-all duration-300 hover:-translate-y-1.5 group hover:shadow-[0_0_20px_rgba(27,172,220,0.15)]">
                            <div className="text-[#1bacdc] text-[32px] font-mono font-bold mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
                                03
                            </div>
                            <h4 className="text-white text-[18px] font-bold lowercase mb-2 group-hover:text-[#1bacdc] transition-colors">
                                producción
                            </h4>
                            <p className="text-neutral-400 text-[13px] leading-relaxed lowercase">
                                imprimimos las piezas en 3D o desarrollamos el código de la automatización.
                            </p>
                        </div>

                        <div className="bg-neutral-950 border border-neutral-800 hover:border-[#1bacdc] p-6 rounded-none transition-all duration-300 hover:-translate-y-1.5 group hover:shadow-[0_0_20px_rgba(27,172,220,0.15)]">
                            <div className="text-[#1bacdc] text-[32px] font-mono font-bold mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
                                04
                            </div>
                            <h4 className="text-white text-[18px] font-bold lowercase mb-2 group-hover:text-[#1bacdc] transition-colors">
                                entrega & despliegue
                            </h4>
                            <p className="text-neutral-400 text-[13px] leading-relaxed lowercase">
                                despachamos tu pedido físico o dejamos la herramienta digital 100% operativa con soporte directo.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* SECCIÓN CTA BANNER HÍBRIDO */}
            <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 z-10">
                <div className="relative bg-gradient-to-r from-neutral-950 via-black to-neutral-950 border-2 border-[#dc4a1b] hover:border-[#f67043] p-8 sm:p-12 rounded-none overflow-hidden transition-all duration-300 shadow-[0_0_40px_rgba(220,74,27,0.15)] hover:shadow-[0_0_50px_rgba(220,74,27,0.25)]">

                    <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-[#dc4a1b]/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                        <div className="max-w-2xl space-y-3">
                            <span className="px-3 py-1 bg-[#dc4a1b]/20 text-[#f67043] border border-[#dc4a1b]/40 text-[10px] font-mono uppercase tracking-wider inline-block">
                                solución integral híbrida
                            </span>
                            <h3 className="text-white text-[28px] sm:text-[34px] font-bold lowercase leading-tight">
                                ¿necesitás el producto físico y mejorar los procesos de venta al mismo tiempo?
                            </h3>
                            <p className="text-neutral-300 text-[16px] font-normal leading-relaxed lowercase">
                                con la solución integral diseñamos tu producto en 3D y desarrollamos en paralelo los procesos o canal automatizado para comercializarlo.
                            </p>
                        </div>

                        <a
                            href={whatsappLink('Quisiera consultar por la solución integral híbrida (3D + Web/Software).')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whitespace-nowrap bg-[#dc4a1b] hover:bg-[#f67043] text-white font-mono text-[12px] font-semibold uppercase tracking-wider py-4 px-8 rounded-none transition-all duration-300 shadow-[0_0_20px_rgba(220,74,27,0.4)] hover:shadow-[0_0_30px_rgba(220,74,27,0.6)] hover:-translate-y-0.5"
                        >
                            consultar solución híbrida →
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
}
