import { Product } from "../../constants/type.td"
import "./product.css"
import { AddToCart } from "../icons/Icons"
import { useCart } from "../../hooks/useCart"

interface ProductsProps {
  products: Product[]
}

export function Products({ products }: ProductsProps) {
  const { addProduct } = useCart()
  return (
    <main>
      <ul className="product__list">
        {products ? (
          products.map((product) => (
            <li key={product.id} className="product__item">
              <img
                className="product__image"
                src={product.image}
                alt={product.title}
              />
              <h2 className="font-m color-azure">{product.title}</h2>
              <span role="textbox" className="font-m color-azure">
                {product.price}
              </span>
              <button
                onClick={() => {
                  const productToAdd = { ...product, quantity: 1 }
                  addProduct(productToAdd)
                }}
                className="product__add"
                data-testid="add-to-cart"
              >
                <AddToCart />
              </button>
            </li>
          ))
        ) : (
          <p>Not found products</p>
        )}
      </ul>
    </main>
  )
}
