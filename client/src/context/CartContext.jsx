import { createContext, useEffect, useReducer } from "react";

const STORAGE_KEY = "antana-cart-v1";

export const CartContext = createContext(null);

function lineId(itemId, extras) {
  const extraIds = extras.map((extra) => extra.id).sort().join("+");
  return extraIds ? `${itemId}::${extraIds}` : itemId;
}

function loadInitialState() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const { item, extras = [], quantity = 1 } = action.payload;
      const id = lineId(item.id, extras);
      const existing = state.find((line) => line.lineId === id);
      if (existing) {
        return state.map((line) =>
          line.lineId === id ? { ...line, quantity: line.quantity + quantity } : line
        );
      }
      return [...state, { lineId: id, item, extras, quantity }];
    }
    case "REMOVE_ITEM":
      return state.filter((line) => line.lineId !== action.payload.lineId);
    case "UPDATE_QUANTITY": {
      const { lineId: id, quantity } = action.payload;
      if (quantity <= 0) return state.filter((line) => line.lineId !== id);
      return state.map((line) => (line.lineId === id ? { ...line, quantity } : line));
    }
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cartLines, dispatch] = useReducer(cartReducer, undefined, loadInitialState);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cartLines));
    } catch {
      // localStorage no disponible (modo privado, cuotas, etc.) — el carrito sigue funcionando en memoria.
    }
  }, [cartLines]);

  const addItem = (item, options = {}) => dispatch({ type: "ADD_ITEM", payload: { item, ...options } });
  const removeItem = (id) => dispatch({ type: "REMOVE_ITEM", payload: { lineId: id } });
  const updateQuantity = (id, quantity) => dispatch({ type: "UPDATE_QUANTITY", payload: { lineId: id, quantity } });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider value={{ cartLines, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
