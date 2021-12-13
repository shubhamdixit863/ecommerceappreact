import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { Navbar ,Container,Nav} from 'react-bootstrap'

const Header = () => {
    return (

      <Navbar>
  <Container>
    <Navbar.Brand href="#home">Mobile Shop</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
      <FontAwesomeIcon icon={faCartArrowDown}  size = '2x'/>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
    

    )
}

export default Header
