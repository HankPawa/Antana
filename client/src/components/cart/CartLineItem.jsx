import { useCart } from "../../hooks/useCart.js";
import { formatCOP } from "../../lib/format.js";

export default function CartLineItem({ line }) {
  const { updateQuantity, removeItem } = useCart();
  const extrasTotal = line.extras.reduce((sum, extra) => sum + extra.price, 0);
  const lineTotal = line.quantity * (line.item.price + extrasTotal);

  return (
    <li className="flex animate-pop-in gap-3 border-b border-dashed-warm pb-4">
      <div className="flex-1">
        <p className="font-display text-base text-ink">{line.item.name}</p>
        {line.extras.length > 0 && (
          <ul className="mt-0.5 font-body text-xs text-pencil">
            {line.extras.map((extra) => (
              <li key={extra.id}>+ {extra.name} ({formatCOP(extra.price)})</li>
            ))}
          </ul>
        )}

        <div className="mt-2 flex items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-border px-1">
            <button
              type="button"
              onClick={() => updateQuantity(line.lineId, line.quantity - 1)}
              aria-label={`Quitar una unidad de ${line.item.name}`}
              className="flex h-8 w-8 items-center justify-center rounded-full text-ink transition-all duration-150 hover:text-leather active:scale-90"
            >
              −
            </button>
            <span key={line.quantity} className="min-w-5 animate-pop-in text-center font-body text-sm font-medium text-ink">
              {line.quantity}
            </span>
            <button
              type="button"
              onClick={() => updateQuantity(line.lineId, line.quantity + 1)}
              aria-label={`Agregar una unidad de ${line.item.name}`}
              className="flex h-8 w-8 items-center justify-center rounded-full text-ink transition-all duration-150 hover:text-leather active:scale-90"
            >
              +
            </button>
          </div>

          <button
            type="button"
            onClick={() => removeItem(line.lineId)}
            className="font-body text-xs font-medium text-pencil underline decoration-pencil/40 underline-offset-4 transition-colors hover:text-leather hover:decoration-leather"
          >
            Quitar
          </button>
        </div>
      </div>

      <p className="font-display text-base text-leather whitespace-nowrap">{formatCOP(lineTotal)}</p>
    </li>
  );
}
