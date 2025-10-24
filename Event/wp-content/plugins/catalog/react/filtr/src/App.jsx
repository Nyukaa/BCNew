import { useState, useEffect } from "react";

export default function App() {
  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);
  const [categories, setCategories] = useState([]);
  const [places, setPlaces] = useState([]);
  const [durations, setDurations] = useState([]);

  const [filters, setFilters] = useState({
    category: "all",
    place: "all",
    duration: "all",
  });

  // 1️⃣ Чтение данных из DOM при монтировании компонента
  useEffect(() => {
    const tourElements = document.querySelectorAll(".tour");
    const tourData = Array.from(tourElements).map((el) => ({
      element: el,
      category: el.dataset.category,
      place: el.dataset.place,
      duration: el.dataset.duration,
    }));

    setTours(tourData);
    setFilteredTours(tourData);

    // Собираем уникальные значения для <select>
    setCategories(["all", ...new Set(tourData.map((t) => t.category))]);
    setPlaces(["all", ...new Set(tourData.map((t) => t.place))]);
    setDurations(["all", ...new Set(tourData.map((t) => t.duration))]);
  }, []);

  // 2️⃣ Фильтрация туров при изменении фильтров
  useEffect(() => {
    const filtered = tours.filter((t) => {
      const matchCategory =
        filters.category === "all" || t.category === filters.category;
      const matchPlace = filters.place === "all" || t.place === filters.place;
      const matchDuration =
        filters.duration === "all" || t.duration === filters.duration;
      return matchCategory && matchPlace && matchDuration;
    });

    setFilteredTours(filtered);

    // Показываем/скрываем карточки в DOM
    tours.forEach((t) => {
      t.element.style.display = filtered.includes(t) ? "block" : "none";
    });
  }, [filters, tours]);

  return (
    <div className="tour-filters">
      <label>
        Категория:
        <select
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, category: e.target.value }))
          }
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      <label>
        Место:
        <select
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, place: e.target.value }))
          }
        >
          {places.map((place) => (
            <option key={place} value={place}>
              {place}
            </option>
          ))}
        </select>
      </label>

      <label>
        Длительность:
        <select
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, duration: e.target.value }))
          }
        >
          {durations.map((dur) => (
            <option key={dur} value={dur}>
              {dur}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
