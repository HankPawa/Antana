import DoodleAccent from "../shared/DoodleAccent.jsx";

export default function Footer({ restaurantInfo }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-2xl tracking-wide">ANTANA</p>
            <p className="mt-1 max-w-xs font-body text-sm text-paper/70">
              {restaurantInfo?.tagline ?? "¡Hamburguesas para verdaderos Hamburguesólogos!"}
            </p>
          </div>

          <div className="flex flex-col gap-2 font-body text-sm text-paper/80">
            {restaurantInfo?.address && (
              <p>
                📍 {restaurantInfo.address}
                {restaurantInfo.addressNote && (
                  <span className="block text-xs text-paper/50">{restaurantInfo.addressNote}</span>
                )}
              </p>
            )}
            {restaurantInfo?.whatsappDisplay && <p>📞 {restaurantInfo.whatsappDisplay}</p>}
            {restaurantInfo?.instagram && (
              <a
                href={restaurantInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit underline decoration-paper/40 underline-offset-4 transition-colors hover:text-paper hover:decoration-paper"
              >
                @antanahamburgueseria
              </a>
            )}
          </div>
        </div>

        <div className="mt-8 flex items-center gap-3 text-xs text-paper/40">
          <DoodleAccent variant="underline" className="h-4 w-10" />
          <p>© {year} Antana Hamburguesería · Neiva, Huila</p>
        </div>
      </div>
    </footer>
  );
}
