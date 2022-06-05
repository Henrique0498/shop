import Heading from 'components/Heading'
import { ProductProps } from 'components/Product'
import useFetch from 'hooks/useFetch'
import { useEffect, useState } from 'react'
import { GET_PRODUCT_BY_ID } from 'services/routes'
import * as S from './styles'

interface ProductDetailsTemplateProps {
  id: string
}

const ProductDetailsTemplate = ({ id }: ProductDetailsTemplateProps) => {
  const [data, setData] = useState<ProductProps>()
  const { request } = useFetch()

  useEffect(() => {
    async function getData() {
      const { url, options } = GET_PRODUCT_BY_ID(id)

      const { json } = await request(url, options)

      setData(json)
    }

    getData()
  }, [id, request])

  function renderOptions() {
    return (
      <S.Options>
        <p>Showing 1-12 of 36 results</p>
      </S.Options>
    )
  }

  function renderProduct() {
    return null
  }

  return (
    <S.Container>
      <Heading title="Product Details" options={renderOptions()} />
      <S.Body>
        <S.Product>
          <div>a</div>
        </S.Product>
      </S.Body>
    </S.Container>
  )
}

export default ProductDetailsTemplate
