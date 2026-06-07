const copFormatter = new Intl.NumberFormat("es-CO", { maximumFractionDigits: 0 });

export function formatCOP(amount) {
  return `$${copFormatter.format(amount)}`;
}
