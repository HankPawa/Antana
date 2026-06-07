export default function DottedDivider({ className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`mx-2 flex-1 border-b-2 border-dotted border-border translate-y-[-0.35em] ${className}`}
    />
  );
}
