export const WHATSAPP_LINES = {
  primary: { number: '60133681349', display: '013-368 1349' },
  secondary: { number: '60126576870', display: '012-657 6870' },
} as const;

export type WhatsAppLine = keyof typeof WHATSAPP_LINES;

export const CTA_TEXT = 'Enquire on WhatsApp';

export const DEFAULT_SUBJECT = 'RIA Pure Water';

// encodeURIComponent leaves ' alone; the agreed link format encodes it as %27.
function encode(text: string) {
  return encodeURIComponent(text).replace(/'/g, '%27');
}

type LinkOptions = {
  line?: WhatsAppLine;
  /** Product page links: "Name (MODEL)". Takes priority over `context`. */
  product?: { name: string; model: string };
  /** Generic pages: what the customer is asking about. */
  context?: string;
};

export function whatsappLink({ line = 'primary', product, context }: LinkOptions = {}) {
  const subject = product ? `${product.name} (${product.model})` : (context ?? DEFAULT_SUBJECT);
  const message = `Hi, I'm interested in ${subject}.`;
  return `https://wa.me/${WHATSAPP_LINES[line].number}?text=${encode(message)}`;
}

export function telLink(line: WhatsAppLine = 'primary') {
  return `tel:+${WHATSAPP_LINES[line].number}`;
}
