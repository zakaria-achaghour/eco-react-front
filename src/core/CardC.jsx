
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import ShowImage from './ShowImage'

const CardC = ({product}) => {
  return (
    <div>
        <Card>
            <CardHeader>{product.name}</CardHeader>
            <ShowImage item={product} url="products/photo" className={'card-img-top'}  />
            <CardBody>
              <p>{product.description}</p>
              <p>${product.price}</p>
            
                <Row>
                  
                  <Col md={6}>

                <Link to='' >
              <Button   color={'warning'}   >{'View Product'}</Button>

              </Link>
                  </Col>
                  <Col md={6}>
              <Button  color={'success'}   >{'Add To Cart'}</Button>
                    </Col>
                </Row>

            </CardBody>
        </Card>
    </div>
  )
}

export default CardC