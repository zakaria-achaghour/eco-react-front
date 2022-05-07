import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import {getProducts} from './ApiCore'
import CardC from './CardC';
import { Col, Row } from 'reactstrap';
const Home = () => {
   const [productsBestSellers, setProductsBestSellers] = useState([]);
   const [productsArrivals, setProductsArrivals] = useState([]);
   
   useEffect(() => {
   getProducts('sold','desc',6).then(products => setProductsBestSellers(products))
   getProducts('createdAt','desc',3).then(products =>  setProductsArrivals(products))

    
   }, []);
  return (
      <div>
        <Layout 
                title="Home page" 
                description="Node react Ecommerce app" 
                className="container">
            <h2>Arrivales</h2>
            <Row>
            {productsArrivals.map((product, i )=> (
              <Col md={4}>
                <CardC product={product} ></CardC>
              </Col>
            ))}

            </Row>

            <hr />
            <h2>Best Seller </h2>
           

            <Row>
            {productsBestSellers.map((product, i )=> (
              <Col md={4}>
                <CardC product={product} ></CardC>
              </Col>
            ))}

            </Row>
        </Layout>
             
      </div>
  )
}

export default Home