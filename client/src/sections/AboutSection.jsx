import DoodleAccent from "../components/shared/DoodleAccent.jsx";
import DottedDivider from "../components/shared/DottedDivider.jsx";
import FlameDoodle from "../components/shared/FlameDoodle.jsx";
import Reveal from "../components/shared/Reveal.jsx";

const PILLARS = [
  {
    title: "Carne Angus madurada",
    text: "Asada a la parrilla, a punto, sin prisas — el corazón de cada hamburguesa.",
    flame: true,
  },
  {
    title: "Pan de papa sellado",
    text: "Sellado en mantequilla hasta quedar dorado y suave. Así se nota la diferencia.",
  },
  {
    title: "Armadas a mano",
    text: "Cada pedido se arma al momento, con salsas e ingredientes frescos del día.",
  },
];

export default function AboutSection() {
  return (
    <section id="nosotros" className="border-b border-border bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <div className="flex items-center gap-3">
            <DoodleAccent variant="cross" className="h-5 w-5 text-kraft-dark" />
            <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-pencil">
              Sobre Antana
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-3 max-w-2xl font-display text-3xl text-ink sm:text-4xl">
            Hamburguesas para verdaderos Hamburguesólogos
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-4 max-w-2xl font-body text-base text-pencil sm:text-lg">
            En Antana creemos que una buena hamburguesa no se apura: se construye con criterio,
            desde la carne hasta el pan. Esa obsesión por lo bien hecho es lo que nos ha ganado
            el cariño de Neiva — y la promesa que va en cada pedido que sale de la parrilla.
          </p>
        </Reveal>

        <DottedDivider className="my-8 max-w-md border-b" />

        <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {PILLARS.map((pillar, index) => (
            <Reveal key={pillar.title} as="div" delay={index * 90}>
              <div className="tilt-sm-rev flex h-full flex-col gap-2 rounded-2xl border border-dashed-warm bg-paper p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:rotate-0 hover:shadow-lg">
                <div className="flex items-center gap-2">
                  <dt className="font-display text-xl text-ink">{pillar.title}</dt>
                  {pillar.flame && <FlameDoodle className="h-6 w-5" />}
                </div>
                <dd className="font-body text-sm text-pencil">{pillar.text}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
