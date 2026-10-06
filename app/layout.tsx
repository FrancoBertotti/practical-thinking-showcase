import type { Metadata } from "next";
import "./globals.css";
import { fontPrincipal, fontSecundaria } from '@/lib/fonts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
    title: "Practical Thinking | Soluciones Físicas y Digitales",
    description: "De la idea al producto: Fabricación en 3D, diseño industrial y desarrollo de software a medida.",
    icons: {
        icon: '/icon.svg',
        shortcut: '/icon.svg',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body
                className={`${fontPrincipal.variable} ${fontSecundaria.variable} antialiased bg-black text-white selection:bg-[#dc4a1b] selection:text-white`}
            >
                <Navbar />
                {children}
                <Footer />
                <WhatsAppButton
                    variant="floating"
                    intent="Quisiera realizar una consulta general desde la web."
                />
            </body>
        </html>
    );
}