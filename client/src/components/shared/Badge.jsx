const VARIANTS = {
  kraft: "bg-kraft/25 text-kraft-dark border border-kraft/40",
  ink: "bg-ink text-paper border border-ink",
  outline: "bg-transparent text-pencil border border-border",
};

export default function Badge({ children, variant = "outline", className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium leading-none whitespace-nowrap ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
