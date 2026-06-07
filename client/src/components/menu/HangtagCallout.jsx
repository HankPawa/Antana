export default function HangtagCallout({ hangtag }) {
  if (!hangtag) return null;

  return (
    <div className="tilt-sm-rev inline-flex flex-col gap-1.5 rounded-2xl border-2 border-dashed border-ink/70 bg-paper px-5 py-3.5">
      <p className="font-display text-base text-ink">{hangtag.title}</p>
      <ul className="flex flex-col gap-0.5 font-body text-sm text-pencil">
        {hangtag.items.map((item) => (
          <li key={item} className="flex gap-1.5">
            <span aria-hidden="true" className="text-kraft-dark">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
