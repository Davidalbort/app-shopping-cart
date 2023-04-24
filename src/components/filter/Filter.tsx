import { Filters } from "../../App"
import "./filter.css"

interface FilterProps {
  handleChangeCategory(event: React.ChangeEvent<HTMLSelectElement>): void
  handleChangePrice(even: React.ChangeEvent<HTMLInputElement>): void
  filters: Filters
}

export function Filter({
  handleChangeCategory,
  handleChangePrice,
  filters,
}: FilterProps) {
  return (
    <section className="filter">
      <label htmlFor="price" className="font-m color-white">
        Price from
      </label>
      <input
        type="range"
        min="0"
        max="1000"
        value={filters.price}
        onChange={handleChangePrice}
        id="price"
      />
      <span className="filter__value">{"$" + filters.price}</span>
      <label htmlFor="category" className="font-m color-white">
        Category
      </label>
      <select
        className="filter__select font-m"
        name="categories"
        id="category"
        onChange={handleChangeCategory}
      >
        <option value="all">all</option>
        <option value="laptops">laptops</option>
        <option value="smartphones">smartphones</option>
        <option value="fragrances">fragrances</option>
        <option value="skincare">skincare</option>
        <option value="groceries">groceries</option>
        <option value="home-decoration">home-decoration</option>
      </select>
    </section>
  )
}
