export interface Product {
    id: string;
    slug: string;
    name: string;
    description: string;
    category: string;
    material: string;
    price_usd: number;
    tags: string[];
}

export const mockProducts: Product[] = [
    {
        id: '1',
        slug: 'organizador-escritorio-modular',
        name: 'Organizador de Escritorio Modular',
        description: 'Sistema modular de organización para escritorios. Compartimentos configurables para cables, accesorios y periféricos.',
        category: 'Organización',
        material: 'PLA+',
        price_usd: 12,
        tags: ['escritorio', 'organización', 'modular'],
    },
    {
        id: '2',
        slug: 'soporte-monitor-ajustable',
        name: 'Soporte de Monitor Ajustable',
        description: 'Soporte ergonómico para monitor de hasta 27 pulgadas con ajuste de altura en tres posiciones.',
        category: 'Ergonomía',
        material: 'PETG',
        price_usd: 18,
        tags: ['monitor', 'ergonomía', 'escritorio'],
    },
    {
        id: '3',
        slug: 'porta-herramientas-taller',
        name: 'Porta Herramientas de Taller',
        description: 'Rack de pared modular para organización de herramientas pequeñas. Diseño de encastre sin tornillos.',
        category: 'Taller',
        material: 'PETG',
        price_usd: 15,
        tags: ['taller', 'organización', 'pared'],
    },
    {
        id: '4',
        slug: 'pieza-reingenieria-custom',
        name: 'Pieza de Reingeniería (Ejemplo)',
        description: 'Ejemplo representativo de repuesto discontinuado reproducido mediante escaneo dimensional y modelado CAD paramétrico.',
        category: 'Reingeniería',
        material: 'ASA',
        price_usd: 0,
        tags: ['custom', 'reingeniería', 'a medida'],
    },
];
