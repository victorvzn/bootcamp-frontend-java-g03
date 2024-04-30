import ProductItem from "./ProductItem"

const ProductList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <ProductItem />
    </div>
  )
}

export default ProductList