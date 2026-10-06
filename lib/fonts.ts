import { Outfit, Space_Mono } from 'next/font/google';

export const fontPrincipal = Outfit({
    subsets: ['latin'],
    variable: '--font-principal',
    display: 'swap',
});

export const fontSecundaria = Space_Mono({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-secundaria',
    display: 'swap',
});
