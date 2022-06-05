import Heading from 'components/Heading'
import Product, { ProductProps } from 'components/Product'
import { useEffect, useState } from 'react'
import { GET_PRODUCTS } from 'services/routes'
import useFetch from 'hooks/useFetch'
import * as S from './styles'
import { IconChevronDown } from 'components/Icon'

type FetchProducts = {
  totalProducts: number
  products: ProductProps[]
}

const ShopTemplate = () => {
  const [params, setParams] = useState('assessment')
  const orderBy = [
    { name: 'assessment', params: 'assessment' },
    { name: 'price', params: 'price' },
    { name: 'price descending', params: 'priceDescending' }
  ]
  const [data, setData] = useState<FetchProducts>()
  const { request } = useFetch()

  useEffect(() => {
    async function getData() {
      const { url, options } = GET_PRODUCTS(`?orderBy=${params}`)

      const { json } = await request(url, options)

      setData(json)
    }

    getData()
  }, [request, params])

  function renderOptions() {
    return (
      <S.Options>
        <p>Showing 1-12 of 36 results</p>

        <div>
          <button>
            {params === 'assessment' ? 'Default sorting' : params}
            <IconChevronDown />
          </button>
          <ul className="shadow-md">
            {orderBy.map((order, i) => (
              <li key={order.name + i} onClick={() => setParams(order.params)}>
                {order.name}
              </li>
            ))}
          </ul>
        </div>
      </S.Options>
    )
  }

  function renderProduct() {
    return data?.products?.map((product, i) => (
      <Product key={product.name + product.id + i} {...product} />
    ))
  }

  return (
    <S.Container>
      <Heading title="Shop" options={renderOptions()} />
      <S.Body>{renderProduct()}</S.Body>
    </S.Container>
  )
}

export default ShopTemplate
