import React from 'react'
import { Col } from 'react-bootstrap'

const Products = (props) => {
    return (
        <Col md={4}>
               <img
            className="d-block w-100"
            width="400px"
            height="400px"
         
            src={props.data.image}
            alt="First slide"
          />
       
        </Col>
    )
}

export default Products
