import React,{useEffect,useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import Products from './partials/Products'
import Slider from './partials/Slider'
import axios from "axios";
import {Button} from 'react-bootstrap';
const limit=3;
const Home = () => {
 
   // const [limit ,setLimit]=useState(3);
    const [page,setPage]=useState(0);
    const [products,setProducts]=useState([]);
useEffect(() => {
    axios.post("http://localhost:8081/api/user/data",{limit:limit,page:page}).then(data=>{
        setProducts([...data["data"].products]);

    }).catch(err=>{
        console.log(err);
    })
    
}, [page])

const decrement=()=>{
    if(page>0){
        setPage(page-1)
    }
 

}

const increment=()=>{
    setPage(page+1)
    
}
   
    return (
        <>
        <Row style={{marginTop:"50px"}}>
        <Col md={12}>
            <Slider/>
        </Col>
      </Row>

      <Row style={{marginTop:"50px"}}>
          {
              products.map(ele=>(

          <Products key={ele._id} data={ele}/>

              ))
          }


     
     
        
      </Row>
      <Row>
          <Col  md={{ span: 4}}>
          <Button variant="outline-primary" onClick={decrement}>Left</Button>
          </Col>

          <Col md={{ span: 4, offset: 4 }}>
          <Button variant="outline-primary" onClick={increment}>Right</Button>
          </Col>
      </Row>
    
      </>
    )
}

export default Home
