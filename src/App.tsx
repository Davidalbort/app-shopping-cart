import { Products } from "./components/product/Products"
import "./app.css"
import { useFilter } from "./hooks/useFilter"
import { products } from "./mocks/products"
import { Header } from "./components/header/Header"
import { CartProvider } from "./context/CartContext"

export function App() {
  const { filterProduct } = useFilter()
  const filteredProducts = filterProduct(products)

  return (
    <div className="app__container">
      <CartProvider>
        <Header />
        <Products products={filteredProducts} />
      </CartProvider>
    </div>
  )
}
