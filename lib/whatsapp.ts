const PHONE_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5491100000000';

export function whatsappLink(intentMessage: string): string {
    const encodedText = encodeURIComponent(intentMessage);
    return `https://wa.me/${PHONE_NUMBER}?text=${encodedText}`;
}