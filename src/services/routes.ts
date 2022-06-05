export const API_URL = 'http://localhost:3000/api/'

export function GET_PRODUCTS(params: string) {
  return {
    url: API_URL + 'product/' + params,
    options: {
      method: 'GET'
    }
  }
}

export function GET_PRODUCT_BY_ID(id: string) {
  return {
    url: API_URL + '/product/' + id,
    options: {
      method: 'GET'
    }
  }
}
