import { useEffect, useRef, useState } from "react";
import { useCart } from "../../hooks/useCart.js";
import { formatCOP } from "../../lib/format.js";
import Badge from "../shared/Badge.jsx";
import DottedDivider from "../shared/DottedDivider.jsx";
import AllergenTag from "./AllergenTag.jsx";

export default function MenuItemCard({ item, tagLegend, allergenLegend, extrasCatalog, tilt = "tilt-sm" }) {
  const { addItem } = useCart();
  const [selectedExtraIds, setSelectedExtraIds] = useState([]);
  const [justAdded, setJustAdded] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const extras = (item.addableExtras ?? [])
    .map((id) => extrasCatalog?.[id])
    .filter(Boolean);

  const toggleExtra = (extraId) => {
    setSelectedExtraIds((current) =>
      current.includes(extraId) ? current.filter((id) => id !== extraId) : [...current, extraId]
    );
  };

  const handleAdd = () => {
    const chosenExtras = extras.filter((extra) => selectedExtraIds.includes(extra.id));
    addItem(item, { extras: chosenExtras, quantity: 1 });
    setSelectedExtraIds([]);
    setJustAdded(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setJustAdded(false), 1400);
  };

  return (
    <article className={`${tilt} group flex flex-col gap-3 rounded-2xl border border-dashed-warm bg-paper p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:rotate-0 hover:shadow-lg`}>
      {item.image && (
        <div className="-rotate-2 self-start overflow-hidden rounded-lg border-4 border-paper bg-paper shadow-md ring-1 ring-border transition-transform duration-300 group-hover:rotate-0">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      )}

      <div className="flex items-baseline">
        <h3 className="font-display text-xl text-ink">{item.name}</h3>
        <DottedDivider />
        <span className="font-display text-xl text-leather">{formatCOP(item.price)}</span>
      </div>

      <p className="font-body text-sm text-pencil">{item.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {item.includesFries && <Badge variant="kraft">Incluye papas a la francesa</Badge>}
        {item.tags?.map((tagId) => (
          <Badge key={tagId} variant="kraft">{tagLegend?.[tagId]?.label ?? tagId}</Badge>
        ))}
      </div>

      {item.vegetarianNote && (
        <p className="rounded-xl border border-dashed-warm bg-paper px-3 py-2 font-body text-xs text-pencil">
          🌱 {item.vegetarianNote}
        </p>
      )}

      {item.allergens?.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {item.allergens.map((allergenId) => (
            <AllergenTag key={allergenId} allergenId={allergenId} legend={allergenLegend} />
          ))}
        </div>
      )}

      {extras.length > 0 && (
        <div className="border-t border-dashed-warm pt-3">
          <p className="font-body text-xs font-semibold uppercase tracking-wide text-pencil/70">
            Agregar extras
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {extras.map((extra) => {
              const isSelected = selectedExtraIds.includes(extra.id);
              return (
                <button
                  key={extra.id}
                  type="button"
                  onClick={() => toggleExtra(extra.id)}
                  aria-pressed={isSelected}
                  className={`h-9 rounded-full border px-3 font-body text-xs font-medium transition-all duration-150 active:scale-95 ${
                    isSelected
                      ? "border-leather bg-leather text-paper"
                      : "border-border bg-paper text-pencil hover:border-leather hover:text-leather"
                  }`}
                >
                  {extra.name} · +{formatCOP(extra.price)}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={handleAdd}
        className={`mt-1 inline-flex h-11 items-center justify-center gap-2 rounded-full font-body text-sm font-semibold transition-all duration-200 active:scale-[0.97] ${
          justAdded ? "bg-whatsapp text-white animate-pop-in" : "bg-ink text-paper hover:bg-leather"
        }`}
      >
        {justAdded ? "¡Agregado al pedido! ✓" : "Agregar al pedido"}
      </button>
    </article>
  );
}
