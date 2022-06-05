import { useRouter } from 'next/router'
import ProductDetailsTemplate from 'Templates/ProductDetailsTemplate'
import ShopTemplate from 'Templates/ShopTemplate'

const ProductDetails = () => {
  const router = useRouter()

  return <ProductDetailsTemplate id={`${router.query.id}`} />
}

export default ProductDetails
