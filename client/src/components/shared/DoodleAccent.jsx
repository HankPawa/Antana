const PATHS = {
  star: (
    <path d="M12 2.5 L14.2 9.4 L21.5 9.6 L15.6 14.1 L17.8 21 L12 16.7 L6.1 20.9 L8.5 14 L2.6 9.7 L9.9 9.5 Z" />
  ),
  cross: (
    <>
      <path d="M4 4 L20 19.5" />
      <path d="M19.7 4.6 L4.3 19" />
    </>
  ),
  circle: (
    <path d="M12.3 3.2 C18.6 2.8 21.4 7 21 12 C20.6 17.3 16.6 20.9 11.6 20.7 C6.4 20.5 2.9 16.7 3.2 11.6 C3.5 6.7 7.4 3.6 12.3 3.2 Z" />
  ),
  underline: (
    <path d="M2.5 14.5 C7.5 12 16.8 12.4 21.5 15" />
  ),
};

export default function DoodleAccent({ variant = "star", className = "", strokeWidth = 1.6 }) {
  const path = PATHS[variant] ?? PATHS.star;
  const isFilled = false;

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill={isFilled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {path}
    </svg>
  );
}
