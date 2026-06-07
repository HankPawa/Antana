import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { cartSubtotal } from "../lib/whatsapp.js";

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart debe usarse dentro de <CartProvider>");

  const { cartLines } = context;
  const itemCount = cartLines.reduce((sum, line) => sum + line.quantity, 0);
  const subtotal = cartSubtotal(cartLines);

  return { ...context, itemCount, subtotal };
}
