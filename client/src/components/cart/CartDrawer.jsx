import { useEffect, useState } from "react";
import { useCart } from "../../hooks/useCart.js";
import { formatCOP } from "../../lib/format.js";
import CartLineItem from "./CartLineItem.jsx";
import WhatsAppCheckoutButton from "./WhatsAppCheckoutButton.jsx";

export default function CartDrawer({ isOpen, onClose, restaurantInfo }) {
  const { cartLines, subtotal, clearCart } = useCart();
  const [serviceOption, setServiceOption] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (!serviceOption && restaurantInfo?.serviceOptions?.length > 0) {
      setServiceOption(restaurantInfo.serviceOptions[0]);
    }
  }, [restaurantInfo, serviceOption]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isEmpty = cartLines.length === 0;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button
        type="button"
        aria-label="Cerrar carrito"
        onClick={onClose}
        className="absolute inset-0 animate-fade-in bg-ink/40 backdrop-blur-sm"
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Tu pedido"
        className="relative flex h-full w-full max-w-md animate-drawer-in flex-col bg-paper shadow-2xl sm:border-l sm:border-border"
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="font-display text-2xl text-ink">Tu pedido</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar carrito"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-all duration-150 hover:bg-ink/10 active:scale-90"
          >
            ✕
          </button>
        </div>

        {isEmpty ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-2 px-6 text-center">
            <p className="font-display text-xl text-ink">Tu pedido está vacío</p>
            <p className="font-body text-sm text-pencil">
              Explora el menú y agrega tus hamburguesas, salchipapas y bebidas favoritas.
            </p>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4">
              {cartLines.map((line) => (
                <CartLineItem key={line.lineId} line={line} />
              ))}
            </ul>

            <div className="border-t border-border px-5 py-4 flex flex-col gap-4">
              {restaurantInfo?.serviceOptions?.length > 0 && (
                <fieldset>
                  <legend className="font-body text-xs font-semibold uppercase tracking-wide text-pencil/70">
                    ¿Cómo prefieres tu pedido?
                  </legend>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {restaurantInfo.serviceOptions.map((option) => (
                      <label
                        key={option}
                        className={`inline-flex h-9 cursor-pointer items-center rounded-full border px-3 font-body text-xs font-medium transition-all duration-150 active:scale-95 ${
                          serviceOption === option
                            ? "border-leather bg-leather text-paper"
                            : "border-border bg-paper text-pencil hover:border-leather hover:text-leather"
                        }`}
                      >
                        <input
                          type="radio"
                          name="service-option"
                          value={option}
                          checked={serviceOption === option}
                          onChange={() => setServiceOption(option)}
                          className="sr-only"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </fieldset>
              )}

              <label className="flex flex-col gap-1.5">
                <span className="font-body text-xs font-semibold uppercase tracking-wide text-pencil/70">
                  Notas para tu pedido (opcional)
                </span>
                <textarea
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                  rows={2}
                  placeholder="Ej. sin cebolla, punto de la carne, hora de recogida…"
                  className="resize-none rounded-xl border border-border bg-paper px-3 py-2 font-body text-sm text-ink placeholder:text-pencil/50 focus:border-kraft-dark"
                />
              </label>

              <div className="flex items-center justify-between">
                <span className="font-body text-sm font-medium text-pencil">Subtotal</span>
                <span className="font-display text-2xl text-ink">{formatCOP(subtotal)}</span>
              </div>

              <WhatsAppCheckoutButton cartLines={cartLines} serviceOption={serviceOption} notes={notes} />

              <button
                type="button"
                onClick={clearCart}
                className="font-body text-xs font-medium text-pencil underline decoration-pencil/40 underline-offset-4 transition-colors hover:text-leather hover:decoration-leather"
              >
                Vaciar pedido
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
