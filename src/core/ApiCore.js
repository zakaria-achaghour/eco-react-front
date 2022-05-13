import { API_URL } from "../config"
import { notify } from "../helpers/Toast"
import queryString from 'query-string'
export const getProducts = (params) =>{
    let query = queryString.stringify(params)
   return fetch(`${API_URL}/products?${query}`)
    .then(res =>res.json())
    .then(res =>res.products)
    .catch(err => console.log(err))
}

export const getCategories = () => {
  return  fetch(`${API_URL}/categories`)
    .then(res =>res.json() )
   .then(res =>res.categories)
   .catch(error =>
       notify('error','Internal Server Error')
   )
}

export const filterProducts = (skip, limit, filters) => {
    console.log(filters)
    const data = {
        skip,
        limit,
      filters
    }
    return  fetch(`${API_URL}/products/search`,{
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
      .then(res =>res.json() )
     .then(res =>res.products)

     .catch(error =>{
         console.log(error)
         notify('error','Internal Server Error')
        }
     )
  }