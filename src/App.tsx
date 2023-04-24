import { useState } from "react"
import { Filter } from "./components/filter/Filter"
import { Products } from "./components/product/Product"
import { Product } from "./constants/type.td"
import { products } from "./mocks/products"
import "./app.css"

export type Filters = {
  category: string
  price: number
}
export function App() {
  const [filters, setFilters] = useState<Filters>(() => ({
    category: "all",
    price: 0,
  }))
  const handleChangeCategory = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newCategory = event.target.value
    setFilters({ ...filters, category: newCategory })
  }
  const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseInt(event.target.value)
    setFilters({ ...filters, price: newPrice })
  }
  const filterProduct = (products: Product[]): Product[] => {
    return products.filter((product) => {
      return (
        product.price >= filters.price &&
        (filters.category === "all" || product.category === filters.category)
      )
    })
  }
  const productFiltered = filterProduct(products)
  return (
    <div className="app__container">
      <header className="app__header">
        <h1 className="app__title">Shopping 🛒</h1>
        <Filter
          filters={filters}
          handleChangeCategory={handleChangeCategory}
          handleChangePrice={handleChangePrice}
        />
      </header>
      <main>
        <Products Products={productFiltered} />
      </main>
    </div>
  )
}
