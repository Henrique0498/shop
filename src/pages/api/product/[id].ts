// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'
import dbProducts from '../dbProducts'

export default function (req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id.toString()

  const product = dbProducts.find((product) => product.id === id)

  res.status(200).json(product)
}
