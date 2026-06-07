import { useCart } from "../../hooks/useCart.js";
import { formatCOP } from "../../lib/format.js";

export default function CartSummaryBar({ onOpenCart }) {
  const { itemCount, subtotal } = useCart();

  if (itemCount === 0) return null;

  return (
    <div className="sticky bottom-0 z-30 animate-pop-in border-t border-ink bg-ink/95 backdrop-blur sm:hidden">
      <button
        type="button"
        onClick={onOpenCart}
        className="group flex w-full items-center justify-between gap-3 px-5 py-3.5 text-paper transition-all duration-150 active:scale-[0.98]"
      >
        <span key={subtotal} className="animate-pop-in font-body text-sm font-medium">
          {itemCount} producto{itemCount === 1 ? "" : "s"} · {formatCOP(subtotal)}
        </span>
        <span className="inline-flex h-10 items-center rounded-full bg-paper px-4 font-body text-sm font-semibold text-ink transition-transform duration-200 group-hover:scale-105">
          Ver pedido
        </span>
      </button>
    </div>
  );
}
