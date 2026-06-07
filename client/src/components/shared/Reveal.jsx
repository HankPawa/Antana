import { useInView } from "../../hooks/useInView.js";

export default function Reveal({ children, as: Tag = "div", delay = 0, className = "" }) {
  const [ref, isInView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
