import { buildWhatsAppOrderLink } from "../../lib/whatsapp.js";

export default function WhatsAppCheckoutButton({ cartLines, serviceOption, notes, disabled }) {
  if (disabled) {
    return (
      <span
        aria-disabled="true"
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-whatsapp/40 px-6 font-body text-sm font-semibold text-white/80"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Agrega productos para continuar
      </span>
    );
  }

  const href = buildWhatsAppOrderLink(cartLines, { serviceOption, notes });

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 font-body text-sm font-semibold text-white transition-all duration-200 hover:bg-whatsapp/90 hover:shadow-lg active:scale-[0.97]"
    >
      <WhatsAppIcon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
      Pedir por WhatsApp
    </a>
  );
}

function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.1.2-.3.2-.6.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5C11.5 9.2 11 8 10.8 7.5c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3z" />
      <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.3C8.4 21.6 10.1 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3.2.8.9-3.1-.2-.3C3.6 14.8 3.1 13.4 3.1 12 3.1 7.1 7.1 3.1 12 3.1S20.9 7.1 20.9 12 16.9 20.2 12 20.2z" />
    </svg>
  );
}
