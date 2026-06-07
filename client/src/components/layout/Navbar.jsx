import { useCart } from "../../hooks/useCart.js";

const NAV_LINKS = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#menu", label: "Menú" },
  { href: "#ubicacion", label: "Ubicación" },
];

export default function Navbar({ onOpenCart }) {
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2.5 group">
          <img
            src="/images/logo-mark.png"
            alt=""
            className="h-9 w-9 object-contain transition-transform duration-300 group-hover:rotate-12"
          />
          <span className="font-display text-xl tracking-wide text-ink group-hover:text-leather transition-colors">
            ANTANA
          </span>
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-6 sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative font-body text-sm font-medium text-pencil transition-colors hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-ink after:transition-all after:duration-200 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={onOpenCart}
          className="relative inline-flex h-11 min-w-11 items-center justify-center gap-2 rounded-full border border-ink bg-ink px-4 text-paper transition-all duration-150 hover:bg-leather hover:border-leather active:scale-95"
          aria-label={`Abrir carrito${itemCount > 0 ? `, ${itemCount} producto${itemCount === 1 ? "" : "s"}` : ""}`}
        >
          <CartIcon className="h-5 w-5" />
          <span className="hidden text-sm font-medium sm:inline">Pedido</span>
          {itemCount > 0 && (
            <span
              key={itemCount}
              aria-hidden="true"
              className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 animate-badge-pop items-center justify-center rounded-full bg-whatsapp px-1 text-xs font-bold text-white"
            >
              {itemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}

function CartIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 4h2l1.6 9.6a2 2 0 0 0 2 1.7h8.4a2 2 0 0 0 2-1.6L20.5 8H6.2" />
      <circle cx="9.5" cy="20" r="1.4" />
      <circle cx="17" cy="20" r="1.4" />
    </svg>
  );
}
