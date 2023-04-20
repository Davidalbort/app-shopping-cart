import { Product } from "../../constants/type.td"

interface ProductProps {
  Products: Product[]
}

export function Products({ Products }: ProductProps) {
  return (
    <ul>
      {Products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} width={"350px"} />
          <h2>{product.title}</h2>
          <span role="textbox">{product.price}</span>
        </li>
      ))}
    </ul>
  )
}
