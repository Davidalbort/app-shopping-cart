import { Filter } from "./components/filter/Filter"
import { Products } from "./components/product/Product"
import "./app.css"
import { useFilter } from "./hooks/useFilter"
import { products } from "./mocks/products"

export function App() {
  const { filterProduct } = useFilter()
  const filteredProducts = filterProduct(products)
  console.log(filteredProducts)
  return (
    <div className="app__container">
      <header className="app__header">
        <h1 className="app__title">Shopping 🛒</h1>
        <Filter />
      </header>
      <main>
        <Products products={filteredProducts} />
      </main>
    </div>
  )
}
