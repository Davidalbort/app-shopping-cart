import responseFromApi from "./product.json"

export const products = responseFromApi.products.map((product) => {
  return {
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    category: product.category,
    image: product.thumbnail,
  }
})
