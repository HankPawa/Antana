import Badge from "../components/shared/Badge.jsx";
import DoodleAccent from "../components/shared/DoodleAccent.jsx";
import Reveal from "../components/shared/Reveal.jsx";

export default function LocationSection({ restaurantInfo }) {
  const mapQuery = restaurantInfo?.address ? encodeURIComponent(restaurantInfo.address) : "";

  return (
    <section id="ubicacion" className="bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <div className="flex items-center gap-3">
            <DoodleAccent variant="circle" className="h-5 w-5 text-kraft-dark" />
            <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-pencil">
              Visítanos
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Ubicación y horario</h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Reveal delay={140} as="div" className="h-full">
            <div className="flex h-full flex-col gap-6 rounded-2xl border border-dashed-warm bg-paper p-6 tilt-sm-rev transition-transform duration-300 hover:rotate-0">
              <InfoRow label="Dirección" icon="📍">
                <p className="font-body text-base text-ink">{restaurantInfo?.address ?? "Cargando dirección…"}</p>
                {restaurantInfo?.addressNote && (
                  <p className="mt-1 font-body text-xs text-pencil/70">{restaurantInfo.addressNote}</p>
                )}
              </InfoRow>

              <InfoRow label="Horario" icon="🕔">
                <p className="font-body text-base text-ink">{restaurantInfo?.hours ?? "Cargando horario…"}</p>
                {restaurantInfo?.hoursNote && (
                  <p className="mt-1 font-body text-xs text-pencil/70">{restaurantInfo.hoursNote}</p>
                )}
              </InfoRow>

              <InfoRow label="Teléfono / WhatsApp" icon="📞">
                <p className="font-body text-base text-ink">{restaurantInfo?.whatsappDisplay}</p>
              </InfoRow>

              <InfoRow label="Síguenos" icon="📷">
                {restaurantInfo?.instagram && (
                  <a
                    href={restaurantInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-base text-leather underline decoration-leather/40 underline-offset-4 transition-colors hover:decoration-leather"
                  >
                    @antanahamburgueseria
                  </a>
                )}
              </InfoRow>

              {restaurantInfo?.serviceOptions?.length > 0 && (
                <div>
                  <p className="font-body text-sm font-semibold text-pencil">Opciones de servicio</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {restaurantInfo.serviceOptions.map((option) => (
                      <Badge key={option} variant="outline">{option}</Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={220} as="div" className="h-full">
            <div className="h-full overflow-hidden rounded-2xl border border-dashed-warm tilt-sm transition-transform duration-300 hover:rotate-0">
              {mapQuery ? (
                <iframe
                  title="Mapa de ubicación de Antana Hamburguesería"
                  src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                  className="h-full min-h-[320px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="flex h-full min-h-[320px] items-center justify-center bg-paper text-sm text-pencil">
                  Cargando mapa…
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, icon, children }) {
  return (
    <div className="flex gap-3">
      <span aria-hidden="true" className="text-xl leading-none">{icon}</span>
      <div>
        <p className="font-body text-xs font-semibold uppercase tracking-wide text-pencil/70">{label}</p>
        <div className="mt-0.5">{children}</div>
      </div>
    </div>
  );
}
