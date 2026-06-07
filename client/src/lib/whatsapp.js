import { formatCOP } from "./format.js";

const WHATSAPP_NUMBER = "573204449987";

function lineTotal(line) {
  const extrasTotal = (line.extras ?? []).reduce((sum, extra) => sum + extra.price, 0);
  return line.quantity * (line.item.price + extrasTotal);
}

export function cartSubtotal(cartLines) {
  return cartLines.reduce((sum, line) => sum + lineTotal(line), 0);
}

export function buildWhatsAppOrderLink(cartLines, { serviceOption, notes } = {}) {
  const lines = cartLines.map(({ item, quantity, extras = [] }) => {
    const base = `${quantity}x ${item.name} — ${formatCOP(item.price)}`;
    return [base, ...extras.map((extra) => `   + ${extra.name} (+${formatCOP(extra.price)})`)].join("\n");
  });

  const subtotal = cartSubtotal(cartLines);

  const message = [
    "🍔 *Pedido Antana Hamburguesería*",
    "",
    ...lines,
    "──────────",
    `*Subtotal: ${formatCOP(subtotal)}*`,
    "",
    serviceOption ? `📍 ${serviceOption}` : null,
    notes ? `📝 Notas: ${notes}` : null,
    "",
    "¡Hola! Quiero confirmar este pedido 😊",
  ].filter(Boolean).join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
