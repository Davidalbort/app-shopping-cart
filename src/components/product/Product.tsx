import { Product } from "../../constants/type.td"
import "./product.css"

interface ProductsProps {
  products: Product[]
}

export function Products({ products }: ProductsProps) {
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
          </li>
        ))
      ) : (
        <p>Not found products</p>
      )}
    </ul>
  )
}
