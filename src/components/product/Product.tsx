import { Product } from "../../constants/type.td"
import "./product.css"
interface ProductProps {
  Products: Product[]
}

export function Products({ Products }: ProductProps) {
  return (
    <ul className="product__list">
      {Products.map((product) => (
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
      ))}
    </ul>
  )
}
