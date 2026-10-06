import { mockProducts } from '@/lib/mock-data';
import CatalogClient from './CatalogClient';

export const metadata = {
    title: 'Catálogo 3D | Practical Thinking Studio',
    description: 'Productos de fabricación 3D disponibles: organizadores, soportes y piezas de reingeniería a medida.',
};

export default function CatalogPage() {
    return <CatalogClient initialProducts={mockProducts} />;
}
