import { Products } from "./components/product/Product"
import responseFromApi from "./mocks/product.json"
export function App() {
  const products = responseFromApi.products.map((product) => {
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      category: product.category,
      image: product.thumbnail,
    }
  })
  return (
    <div>
      <header>
        <h1>Shopping 🛒</h1>
      </header>
      <main>
        {products.map((product) => {
          return <Products Products={products} key={product.id} />
        })}
      </main>
    </div>
  )
}
