import { useEffect, useMemo, useState } from "react";
import CategoryTabs from "../components/menu/CategoryTabs.jsx";
import MenuSection from "../components/menu/MenuSection.jsx";
import DoodleAccent from "../components/shared/DoodleAccent.jsx";
import Reveal from "../components/shared/Reveal.jsx";

export default function MenuPageSection({ menu, restaurantInfo, loadError }) {
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  useEffect(() => {
    if (menu && activeCategoryId === null) {
      setActiveCategoryId(menu.categories[0]?.id ?? null);
    }
  }, [menu, activeCategoryId]);

  const extrasCatalog = useMemo(() => {
    const addOnsCategory = menu?.categories.find((category) => category.isAddOnCategory);
    return Object.fromEntries((addOnsCategory?.items ?? []).map((item) => [item.id, item]));
  }, [menu]);

  const activeCategory = menu?.categories.find((category) => category.id === activeCategoryId);

  return (
    <section id="menu" className="border-b border-border bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <div className="flex items-center gap-3">
            <DoodleAccent variant="star" className="h-5 w-5 text-kraft-dark" />
            <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-pencil">
              El menú
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Arma tu pedido</h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-3 max-w-2xl font-body text-sm text-pencil">
            Elige tus favoritos, súmales extras si quieres y arma tu pedido — al final lo confirmamos
            juntos por WhatsApp.
          </p>
        </Reveal>

        {loadError && (
          <p className="mt-10 rounded-2xl border border-dashed-warm bg-paper p-6 font-body text-sm text-pencil">
            No pudimos cargar el menú en este momento. Intenta recargar la página o escríbenos
            directamente por WhatsApp para hacer tu pedido.
          </p>
        )}

        {!menu && !loadError && (
          <p className="mt-10 font-body text-sm text-pencil">Cargando el menú…</p>
        )}

        {menu && (
          <div className="mt-10 flex flex-col gap-8">
            <CategoryTabs categories={menu.categories} activeId={activeCategoryId} onSelect={setActiveCategoryId} />
            {activeCategory && (
              <MenuSection
                category={activeCategory}
                tagLegend={menu.tagLegend}
                allergenLegend={menu.allergenLegend}
                extrasCatalog={extrasCatalog}
              />
            )}
            {restaurantInfo?.allergenDisclaimer && (
              <p className="max-w-2xl font-body text-xs text-pencil/70">
                {restaurantInfo.allergenDisclaimer}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
