
import React from 'react'
import { Link } from 'react-router-dom'
import { Badge, Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import ShowImage from './ShowImage'

const CardC = ({product}) => {
  return (
    <div>
        <Card >
            <CardHeader>{product.name}</CardHeader>
            <ShowImage item={product} url="products/photo" className={'card-img-top img-card'}  />
            <CardBody>
              <p>{product.description}</p>
              <div> 
                <Badge  color='info'> ${product.price}</Badge>
                <br/>
                <Badge  color='danger' > {product.category ? product.category.name :''}</Badge>

              </div>
            
                <Row>
                  
                  <Col md={6}>

                <Link to='' >
              <Button   color={'warning'}   >{'View'}</Button>

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