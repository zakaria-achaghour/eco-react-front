import React from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../helpers/IsAuthenticated'

const Checkout = ({products}) => {
    const totalToCheckout = (products) => {
      return  products.reduce((total, product) => total +(product.count * product.price),0 )
    }
    const showBtnToCheckout = () => {
        if(isAuthenticated()) {
            return (<button className="btn btn-success btn-block">
                checkout
            </button>)
        }else{
            return (
            <Link to={'/signin'}>
                <button className="btn btn-warning btn-block">
            sign to checkout
        </button>

            </Link>)
        }
    }
  return (
    <div>
        <h2>Total : {totalToCheckout(products)} </h2>
        {showBtnToCheckout()}
    </div>
  )
}

export default Checkout