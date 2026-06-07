import HangtagCallout from "./HangtagCallout.jsx";
import MenuItemCard from "./MenuItemCard.jsx";
import Reveal from "../shared/Reveal.jsx";

function groupItems(items) {
  const groups = [];
  const indexByLabel = new Map();

  for (const item of items) {
    const label = item.group ?? null;
    if (!indexByLabel.has(label)) {
      indexByLabel.set(label, groups.length);
      groups.push({ label, items: [] });
    }
    groups[indexByLabel.get(label)].items.push(item);
  }

  return groups;
}

export default function MenuSection({ category, tagLegend, allergenLegend, extrasCatalog }) {
  const groups = groupItems(category.items);

  return (
    <div className="flex flex-col gap-10">
      {category.hangtag && <HangtagCallout hangtag={category.hangtag} />}

      {groups.map((group) => (
        <div key={group.label ?? "__default"}>
          {group.label && (
            <h3 className="mb-4 font-display text-lg text-ink">{group.label}</h3>
          )}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((item, index) => (
              <Reveal key={item.id} as="div" delay={(index % 6) * 60}>
                <MenuItemCard
                  item={item}
                  tagLegend={tagLegend}
                  allergenLegend={allergenLegend}
                  extrasCatalog={extrasCatalog}
                  tilt={index % 2 === 0 ? "tilt-sm" : "tilt-sm-rev"}
                />
              </Reveal>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
