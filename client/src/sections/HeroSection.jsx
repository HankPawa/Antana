import DoodleAccent from "../components/shared/DoodleAccent.jsx";
import Reveal from "../components/shared/Reveal.jsx";

export default function HeroSection({ restaurantInfo }) {
  return (
    <section id="inicio" className="relative overflow-hidden border-b border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-dashed-warm bg-paper px-4 py-1.5 font-body text-sm font-medium text-pencil tilt-sm-rev transition-transform duration-300 hover:rotate-0 hover:scale-105">
            <DoodleAccent variant="star" className="h-4 w-4 text-kraft-dark animate-[spin_9s_linear_infinite]" />
            Hamburguesería artesanal · Neiva, Huila
          </span>
        </Reveal>

        <Reveal delay={90}>
          <h1 className="font-display text-5xl leading-[0.95] text-ink sm:text-7xl lg:text-8xl">
            ANTANA
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="max-w-xl font-body text-lg text-pencil sm:text-xl">
            {restaurantInfo?.tagline ?? "¡Hamburguesas para verdaderos Hamburguesólogos!"}
            {" "}Carne Angus madurada a la parrilla y pan de papa sellado en mantequilla — armadas a mano, sin atajos.
          </p>
        </Reveal>

        <Reveal delay={270}>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#menu"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-7 font-body text-sm font-semibold text-paper transition-all duration-200 hover:gap-3 hover:bg-leather active:scale-95"
            >
              Ver el menú
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </a>

            {restaurantInfo?.rating && (
              <span className="inline-flex items-center gap-2 rounded-full border border-dashed-warm bg-paper px-4 py-2 font-body text-sm text-ink tilt-sm transition-transform duration-300 hover:rotate-0 hover:scale-105">
                <span aria-hidden="true" className="text-kraft-dark">★</span>
                <span className="font-semibold">{restaurantInfo.rating.value}</span>
                <span className="text-pencil">({restaurantInfo.rating.count}+ reseñas en Google)</span>
              </span>
            )}
          </div>
        </Reveal>
      </div>

      <DoodleAccent
        variant="circle"
        className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 text-kraft/30 sm:h-64 sm:w-64 animate-[spin_50s_linear_infinite]"
        strokeWidth={1}
      />
    </section>
  );
}
