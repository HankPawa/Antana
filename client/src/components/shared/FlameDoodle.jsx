export default function FlameDoodle({ className = "" }) {
  return (
    <span className={`relative inline-block ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 24 32"
        className="absolute inset-0 h-full w-full origin-bottom text-ink animate-flame-outer"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2.5c-3.6 4.6-5.6 7.8-5.6 12 0 4.3 2.6 7.6 5.6 7.6s5.6-3.3 5.6-7.6c0-1.9-.5-3.6-1.4-5.1.1 1.5-.5 2.7-1.4 3.3.7-2.9-0.7-6.5-2.8-10.2Z" />
      </svg>
      <svg
        viewBox="0 0 24 32"
        className="absolute inset-0 h-full w-full origin-bottom text-kraft-dark animate-flame-inner"
        fill="currentColor"
        stroke="none"
      >
        <path d="M12.4 14c-1.7 2.1-2.6 3.8-2.6 5.6 0 2.2 1.3 3.9 2.6 3.9s2.6-1.7 2.6-3.7c0-.9-.2-1.8-.6-2.5.1.6-.2 1.1-.6 1.4.4-1.5-.3-3.1-1.4-4.7Z" />
      </svg>
    </span>
  );
}
