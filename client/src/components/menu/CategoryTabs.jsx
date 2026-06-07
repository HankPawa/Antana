export default function CategoryTabs({ categories, activeId, onSelect }) {
  return (
    <div role="tablist" aria-label="Categorías del menú" className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const isActive = category.id === activeId;
        return (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(category.id)}
            className={`h-11 rounded-full border px-5 font-body text-sm font-medium transition-all duration-200 active:scale-95 ${
              isActive
                ? "border-ink bg-ink text-paper"
                : "border-border bg-paper text-pencil hover:-translate-y-0.5 hover:border-ink hover:text-ink"
            }`}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
}
