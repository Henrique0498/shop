import { IconArrowsExpand, IconShoppingBag } from 'components/Icon'
import Image from 'next/image'
import Link from 'next/link'
import * as S from './styles'

export interface ProductProps {
  id: string
  image: {
    src: string
    alt: string
  }
  name: string
  price: string
  color: string
  assessment: number
}

const Product = ({ name, price, image, color, id }: ProductProps) => {
  return (
    <S.Container className="shadow-md">
      <S.Heading className="text-slate-900">
        <Link href={`product/${id}`}>
          <a>
            <IconArrowsExpand />
          </a>
        </Link>
        <button>
          <IconShoppingBag />
        </button>
      </S.Heading>

      <S.Body color={color}>
        <div className="icon" />
        <div className="image">
          <Image src={image.src} width={140} height={140} objectFit="cover" />
        </div>
      </S.Body>

      <S.Footer className="text-purple-700 font-medium flex items-center">
        <p>{name}</p>
        <p>{'$' + price}</p>
      </S.Footer>
    </S.Container>
  )
}

export default Product
