import { whatsappLink } from '@/lib/whatsapp';

export const metadata = {
    title: 'División Dev & IA | Practical Thinking',
    description: 'Automatización de procesos, asistentes de IA para WhatsApp y desarrollo de software a medida.',
};

const services = [
    {
        icon: '🤖',
        title: 'asistentes ia 24/7',
        description: 'Agentes conversacionales integrados a WhatsApp y otros canales para atender consultas, calificar leads y gestionar pedidos sin intervención humana.',
        tags: ['Claude AI', 'WhatsApp API', 'N8N'],
        intent: 'Quisiera consultar sobre un asistente de IA para WhatsApp.',
    },
    {
        icon: '⚡',
        title: 'automatización operativa',
        description: 'Digitalizamos y automatizamos flujos como presupuestación, seguimiento de pedidos, notificaciones y reportes que hoy se hacen manualmente.',
        tags: ['N8N', 'Webhooks', 'APIs'],
        intent: 'Quisiera consultar sobre automatización de procesos operativos.',
    },
    {
        icon: '🌐',
        title: 'landing pages administradas',
        description: 'Desarrollo y mantenimiento de sitios orientados a conversión: Next.js, CMS headless, optimización SEO y métricas de negocio. Modalidad LPaaS.',
        tags: ['Next.js', 'Supabase', 'Vercel'],
        intent: 'Quisiera consultar sobre una landing page administrada (LPaaS).',
    },
    {
        icon: '📊',
        title: 'software a medida',
        description: 'Desarrollo de herramientas internas, dashboards operativos y sistemas de gestión adaptados a los procesos específicos de cada negocio.',
        tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
        intent: 'Quisiera consultar sobre el desarrollo de software a medida.',
    },
];

export default function DevPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#1bacdc] selection:text-black">

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f12_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* HERO */}
            <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] font-mono bg-[#1bacdc]/10 border border-[#1bacdc]/30 text-[#1bacdc] mb-8 lowercase">
                    <span className="w-2 h-2 rounded-full bg-[#1bacdc] animate-pulse" />
                    división digital // software & ia
                </div>

                <h1 className="text-[38px] sm:text-[56px] font-bold uppercase tracking-tight leading-[1.1] mb-6 max-w-4xl text-white">
                    AUTOMATIZACIÓN Y{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1bacdc] to-[#60d6f5]">
                        SOFTWARE A MEDIDA
                    </span>
                </h1>

                <p className="text-neutral-400 text-[18px] max-w-2xl mb-10 leading-relaxed lowercase">
                    digitalizamos procesos, integramos IA en los canales de comunicación y desarrollamos herramientas que escalan con tu negocio.
                </p>

                <a
                    href={whatsappLink('Quisiera consultar sobre las soluciones de software e IA que ofrecen.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3.5 bg-[#1bacdc] hover:bg-[#60d6f5] text-black font-mono text-[12px] uppercase tracking-wider rounded-none transition-all duration-300 hover:-translate-y-0.5 shadow-[0_0_20px_rgba(27,172,220,0.3)]"
                >
                    consultar solución →
                </a>
            </section>

            {/* SERVICIOS */}
            <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
                <div className="border-t border-neutral-800 pt-16">
                    <span className="text-[#1bacdc] text-[11px] font-mono uppercase tracking-widest block mb-2">
                        // servicios disponibles
                    </span>
                    <h2 className="text-white text-[28px] sm:text-[36px] font-bold uppercase mb-12">
                        qué construimos
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.map((service) => (
                            <div
                                key={service.title}
                                className="bg-neutral-950 border border-neutral-800 hover:border-[#1bacdc] p-6 rounded-none transition-all duration-300 hover:-translate-y-1.5 group hover:shadow-[0_0_20px_rgba(27,172,220,0.15)] flex flex-col justify-between"
                            >
                                <div>
                                    <div className="text-[28px] mb-4">{service.icon}</div>
                                    <h3 className="text-white text-[18px] font-bold lowercase mb-3 group-hover:text-[#1bacdc] transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-neutral-400 text-[13px] leading-relaxed lowercase mb-4">
                                        {service.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 font-mono">
                                        {service.tags.map((tag) => (
                                            <span key={tag} className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-500 text-[10px]">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <a
                                    href={whatsappLink(service.intent)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 text-center bg-neutral-900 group-hover:bg-[#1bacdc] text-neutral-400 group-hover:text-black border border-neutral-800 group-hover:border-[#1bacdc] font-mono text-[11px] uppercase py-2.5 px-4 rounded-none transition-all duration-300 block"
                                >
                                    consultar →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STACK TECH */}
            <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 z-10">
                <div className="border-t border-neutral-800 pt-16">
                    <span className="text-[#1bacdc] text-[11px] font-mono uppercase tracking-widest block mb-8">
                        // stack tecnológico
                    </span>
                    <div className="flex flex-wrap gap-3 font-mono">
                        {['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Supabase', 'PostgreSQL', 'Claude AI', 'N8N', 'Vercel', 'Cloudflare'].map((tech) => (
                            <span key={tech} className="px-3 py-1.5 bg-neutral-950 border border-neutral-800 hover:border-[#1bacdc] text-neutral-400 hover:text-[#1bacdc] text-[11px] transition-colors">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
