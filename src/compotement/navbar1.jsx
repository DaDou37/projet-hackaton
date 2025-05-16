import React from "react";
import { Navbar, Container, InputGroup, DropdownButton, Dropdown, Form, Button, Nav } from 'react-bootstrap';
import "./navbar.css"



function Navbar1() {
    return (
  
        <Container >
          <div className="row" id="navbar">
  
            {/* Logo */}
            <div className="col-3">

              <img src="/logo.png" alt="Logo"/>
            </div>
  
            <div className="col-6">

              <InputGroup id="dropdown" >

              <DropdownButton
              
                variant="outline-secondary"
                title={
                    <span id="menu2">
                      <img
                        src="/menu1.png"
                        alt="Menu Icon"
                        style={{ width: "20px", height: "20px", marginRight: "8px" }}
                      />
                      Menus
                    </span>
                  }
              > 
                <Dropdown.Item href="#">Home</Dropdown.Item>
                <h5 className="dropdown-header">Books</h5>
                <Dropdown.Item href="#">Books</Dropdown.Item>
                <Dropdown.Item href="#">All good news</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Checkout</Dropdown.Item>
              </DropdownButton>
              <Form.Control  aria-label="Text input with dropdown button" id="search" placeholder="Search over 30 million book titles"/>
              <Button variant="outline-secondary" id="button-addon2">
                <img src="/search1.png" alt="" />
              </Button>
            </InputGroup>
            </div>
            
            <div className="col-3">
              <Nav className="ms-4">
              <Nav.Link id="login" href="#deets">Log in</Nav.Link>
              <Nav.Link id="signup" eventKey={2} href="#memes">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{  marginRight: "20px" }} >
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 13C8.13401 13 5 16.134 5 20V22C5 22.5523 4.55228 23 4 23C3.44772 23 3 22.5523 3 22V20C3 15.0294 7.02944 11 12 11C16.9706 11 21 15.0294 21 20V22C21 22.5523 20.5523 23 20 23C19.4477 23 19 22.5523 19 22V20C19 16.134 15.866 13 12 13Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 11C14.2091 11 16 9.20916 16 7.00002C16 4.79088 14.2091 3.00002 12 3.00002C9.79086 3.00002 8 4.79088 8 7.00002C8 9.20916 9.79086 11 12 11ZM12 13C15.3137 13 18 10.3137 18 7.00002C18 3.68631 15.3137 1.00002 12 1.00002C8.68629 1.00002 6 3.68631 6 7.00002C6 10.3137 8.68629 13 12 13Z" fill="white"/>
</svg>
                Sign up
              </Nav.Link>
            </Nav>
            </div>
            

          </div>
        </Container>
    );
  }
  
  export default Navbar1;