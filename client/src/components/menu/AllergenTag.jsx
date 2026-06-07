export default function AllergenTag({ allergenId, legend }) {
  const label = legend?.[allergenId]?.label ?? allergenId;
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-border bg-paper px-2 py-0.5 text-[11px] font-medium text-pencil">
      <span aria-hidden="true">⚠</span>
      {label}
    </span>
  );
}
