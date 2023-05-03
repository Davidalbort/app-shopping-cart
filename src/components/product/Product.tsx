import { Product } from "../../constants/type.td"
import "./product.css"
import { AddToCart } from "../icons/Icons"

interface ProductsProps {
  products: Product[]
  handleAddToCart(product: Product): void
}

export function Products({ products, handleAddToCart }: ProductsProps) {
  return (
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
              onClick={() => handleAddToCart(product)}
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
  )
}
