import { useCart } from "../../hooks/useCart"

export function Cart() {
  const { products, addProduct } = useCart()
  const isHasProducts = products && products.length > 0
  return (
    <aside>
      <h2>Cart</h2>
      <ul>
        {isHasProducts
          ? products.map((product) => (
              <li key={product.id} className="product__add">
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
                  className="product__add"
                  data-testid="add-to-cart"
                  onClick={() => addProduct(product)}
                >
                  +
                </button>
                <span role="contentinfo">
                  {`Quantity: ${product.quantity}`}
                </span>
              </li>
            ))
          : null}
      </ul>
    </aside>
  )
}
