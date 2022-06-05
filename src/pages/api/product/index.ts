import { NextApiRequest, NextApiResponse } from 'next'
import dbProducts from '../dbProducts'

type OrderByType = 'price' | 'assessment' | 'priceDescending'

export default function (req: NextApiRequest, res: NextApiResponse) {
  let orderBy: OrderByType = 'assessment'

  if (
    typeof req.query.orderBy === 'string' &&
    (req.query.orderBy === 'price' ||
      req.query.orderBy === 'assessment' ||
      req.query.orderBy === 'priceDescending')
  ) {
    orderBy = req.query.orderBy
  }

  dbProducts.sort(function (a, b) {
    if (orderBy !== 'priceDescending') {
      if (a[orderBy] < b[orderBy]) {
        return -1
      }
      if (a[orderBy] > b[orderBy]) {
        return 1
      }
      return 0
    } else {
      if (a.price < b.price) {
        return 1
      }
      if (a.price > b.price) {
        return -1
      }
      return 0
    }
  })

  const result = {
    totalProducts: dbProducts.length,
    products: dbProducts
  }

  res.status(200).json(result)
}
