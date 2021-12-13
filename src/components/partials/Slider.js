import React from 'react'
import { Carousel } from 'react-bootstrap'

const Slider = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            width="800px"
            height="400px"
            src="https://highlandcanine.com/wp-content/uploads/2020/09/golden-retriever-in-field-of-flowers.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="800px"
            height="400px"
            className="d-block w-100"
            src="https://highlandcanine.com/wp-content/uploads/2020/09/golden-retriever-in-field-of-flowers.jpg"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            width="800px"
            height="400px"
            src="https://highlandcanine.com/wp-content/uploads/2020/09/golden-retriever-in-field-of-flowers.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}

export default Slider
