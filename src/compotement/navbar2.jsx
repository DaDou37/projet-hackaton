import React from "react";
import { Navbar, Container, InputGroup, DropdownButton, Dropdown, Form, Button, Nav, Collapse } from 'react-bootstrap';
import "./navbar.css"
import { useState } from "react";



function Navbar2() {

   const [open, setOpen] = useState(false);

    return (
  
        <Container>
      {/* Mobile / tablette header */}
      <div className="d-md-none d-flex justify-content-between align-items-center py-2">
        <img src="/logo.png" alt="Logo" style={{ height: "40px" }} />

        <Button
          variant="outline-secondary"
          onClick={() => setOpen(!open)}
          aria-controls="mobile-collapse"
          aria-expanded={open}
        >
          ☰
        </Button>
      </div>

      {/* Mobile / tablette menu collapsé */}
      <Collapse in={open}>
        <div id="mobile-collapse" className="d-md-none">
          <div className="my-3">
            <InputGroup>
              <DropdownButton
                variant="outline-secondary"
                title={
                  <span>
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
                <Dropdown.Header>Books</Dropdown.Header>
                <Dropdown.Item href="#">Books</Dropdown.Item>
                <Dropdown.Item href="#">All good news</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Checkout</Dropdown.Item>
              </DropdownButton>
              <Form.Control placeholder="Search over 30 million book titles" />
              <Button variant="outline-secondary">
                <img src="/search1.png" alt="Search" style={{ width: "24px", height: "24px" }} />
              </Button>
            </InputGroup>
          </div>

          <Nav className="flex-column">
            <Nav.Link id="wishlist" href="#wishlist" className="d-flex align-items-center">
              {/* Garder le SVG à taille fixe */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.5204 4.27343C19.9935 3.74648 19.368 3.32848 18.6796 3.04329C17.9912 2.75811 17.2533 2.61132 16.5082 2.61132C15.763 2.61132 15.0252 2.75811 14.3368 3.04329C13.6483 3.32848 13.0228 3.74648 12.496 4.27343L11.9999 4.76952L11.5038 4.27343C10.9769 3.74648 10.3514 3.32848 9.66302 3.04329C8.9746 2.75811 8.23675 2.61132 7.49159 2.61132C6.74644 2.61132 6.00858 2.75811 5.32016 3.04329C4.63174 3.32848 4.00624 3.74648 3.47938 4.27343C1.77821 5.97411 1.48138 8.59423 2.68638 11.2827C4.15513 14.561 11.034 20.8608 11.326 21.1274C11.5102 21.2955 11.7505 21.3886 11.9999 21.3886C12.2492 21.3886 12.4895 21.2955 12.6737 21.1274C12.9657 20.8608 19.8446 14.561 21.3133 11.2822C22.5184 8.59423 22.2216 5.97411 20.5204 4.27343ZM19.4892 10.4644C18.5194 12.6274 14.2401 16.915 11.9999 19.0244C9.75966 16.915 5.48134 12.6289 4.51063 10.4648C4.10243 9.55224 3.32118 7.25976 4.89344 5.68749C5.58252 4.99843 6.5171 4.61132 7.49159 4.61132C8.46608 4.61132 9.40066 4.99843 10.0897 5.68749L11.2929 6.89062C11.3857 6.9835 11.4959 7.05718 11.6173 7.10745C11.7386 7.15771 11.8686 7.18359 11.9999 7.18359C12.1312 7.18359 12.2613 7.15771 12.3826 7.10745C12.5039 7.05718 12.6141 6.9835 12.707 6.89062L13.9101 5.68749C14.6102 5.01966 15.5406 4.64709 16.5082 4.64709C17.4758 4.64709 18.4062 5.01966 19.1063 5.68749C20.6786 7.25976 19.8974 9.55224 19.4892 10.4644Z"
                  fill="#11142D"
                />
              </svg>
              <span className="badge ms-2">35</span>
            </Nav.Link>

            <Nav.Link id="course" href="#course" className="d-flex align-items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17 20C17.551 20 18 20.448 18 21C18 21.552 17.551 22 17 22C16.448 22 16 21.552 16 21C16 20.448 16.448 20 17 20ZM11 20C11.551 20 12 20.448 12 21C12 21.552 11.551 22 11 22C10.448 22 10 21.552 10 21C10 20.448 10.448 20 11 20ZM21.889 5.458L17.894 13.447C17.725 13.786 17.378 14 17 14H9C8.447 14 8 14.448 8 15C8 15.552 8.447 16 9 16H19C19.551 16 20 16.448 20 17C20 17.552 19.551 18 19 18C19 18 12.413 18 9 18C7.343 18 6 16.657 6 15C6 13.793 6.71201 12.753 7.73901 12.277L5.25601 4H3C2.448 4 2 3.552 2 3C2 2.448 2.448 2 3 2H6C6.441 2 6.83 2.29 6.957 2.713L7.34403 4H20.988C21.067 3.999 21.147 4.007 21.225 4.026L21.233 4.028C21.326 4.05 21.413 4.085 21.494 4.131C21.644 4.216 21.765 4.335 21.85 4.474C21.936 4.613 21.989 4.774 21.998 4.947C22.003 5.039 21.995 5.133 21.974 5.226L21.972 5.234C21.953 5.313 21.925 5.388 21.889 5.458ZM19.382 6H7.944L9.74402 12H16.382L19.382 6Z"
                  fill="#11142D"
                />
              </svg>
              <span className="badge ms-2">4</span>
            </Nav.Link>

            {/* Ici tu peux ajouter d'autres liens, langue, profile, etc */}
            <Dropdown className="mt-3">
              <Dropdown.Toggle variant="success" id="langue">
                EN
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">FR</Dropdown.Item>
                <Dropdown.Item href="#/action-2">ESP</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </div>
      </Collapse>

      {/* Desktop */}
      <div className="row d-none d-md-flex align-items-center" id="navbar">
        <div className="col-3">
          <img src="/logo.png" alt="Logo" style={{ height: "50px" }} />
        </div>

        <div className="col-5">
          <InputGroup id="dropdown">
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
            <Form.Control
              aria-label="Text input with dropdown button"
              id="search"
              placeholder="Search over 30 million book titles"
            />
            <Button variant="outline-secondary" id="button-addon2">
              <img src="/search1.png" alt="Search" style={{ width: "24px", height: "24px" }} />
            </Button>
          </InputGroup>
        </div>

        <div className="col-4">
          <Nav className="ms-4 d-flex align-items-center justify-content-end">
            <Nav.Link id="wishlist" href="#wishlist" className="d-flex align-items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.5204 4.27343C19.9935 3.74648 19.368 3.32848 18.6796 3.04329C17.9912 2.75811 17.2533 2.61132 16.5082 2.61132C15.763 2.61132 15.0252 2.75811 14.3368 3.04329C13.6483 3.32848 13.0228 3.74648 12.496 4.27343L11.9999 4.76952L11.5038 4.27343C10.9769 3.74648 10.3514 3.32848 9.66302 3.04329C8.9746 2.75811 8.23675 2.61132 7.49159 2.61132C6.74644 2.61132 6.00858 2.75811 5.32016 3.04329C4.63174 3.32848 4.00624 3.74648 3.47938 4.27343C1.77821 5.97411 1.48138 8.59423 2.68638 11.2827C4.15513 14.561 11.034 20.8608 11.326 21.1274C11.5102 21.2955 11.7505 21.3886 11.9999 21.3886C12.2492 21.3886 12.4895 21.2955 12.6737 21.1274C12.9657 20.8608 19.8446 14.561 21.3133 11.2822C22.5184 8.59423 22.2216 5.97411 20.5204 4.27343ZM19.4892 10.4644C18.5194 12.6274 14.2401 16.915 11.9999 19.0244C9.75966 16.915 5.48134 12.6289 4.51063 10.4648C4.10243 9.55224 3.32118 7.25976 4.89344 5.68749C5.58252 4.99843 6.5171 4.61132 7.49159 4.61132C8.46608 4.61132 9.40066 4.99843 10.0897 5.68749L11.2929 6.89062C11.3857 6.9835 11.4959 7.05718 11.6173 7.10745C11.7386 7.15771 11.8686 7.18359 11.9999 7.18359C12.1312 7.18359 12.2613 7.15771 12.3826 7.10745C12.5039 7.05718 12.6141 6.9835 12.707 6.89062L13.9101 5.68749C14.6102 5.01966 15.5406 4.64709 16.5082 4.64709C17.4758 4.64709 18.4062 5.01966 19.1063 5.68749C20.6786 7.25976 19.8974 9.55224 19.4892 10.4644Z"
                  fill="#11142D"
                />
              </svg>
              <span className="badge ms-2">35</span>
            </Nav.Link>

            <Nav.Link id="course" href="#course" className="d-flex align-items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17 20C17.551 20 18 20.448 18 21C18 21.552 17.551 22 17 22C16.448 22 16 21.552 16 21C16 20.448 16.448 20 17 20ZM11 20C11.551 20 12 20.448 12 21C12 21.552 11.551 22 11 22C10.448 22 10 21.552 10 21C10 20.448 10.448 20 11 20ZM21.889 5.458L17.894 13.447C17.725 13.786 17.378 14 17 14H9C8.447 14 8 14.448 8 15C8 15.552 8.447 16 9 16H19C19.551 16 20 16.448 20 17C20 17.552 19.551 18 19 18C19 18 12.413 18 9 18C7.343 18 6 16.657 6 15C6 13.793 6.71201 12.753 7.73901 12.277L5.25601 4H3C2.448 4 2 3.552 2 3C2 2.448 2.448 2 3 2H6C6.441 2 6.83 2.29 6.957 2.713L7.34403 4H20.988C21.067 3.999 21.147 4.007 21.225 4.026L21.233 4.028C21.326 4.05 21.413 4.085 21.494 4.131C21.644 4.216 21.765 4.335 21.85 4.474C21.936 4.613 21.989 4.774 21.998 4.947C22.003 5.039 21.995 5.133 21.974 5.226L21.972 5.234C21.953 5.313 21.925 5.388 21.889 5.458ZM19.382 6H7.944L9.74402 12H16.382L19.382 6Z"
                  fill="#11142D"
                />
              </svg>
              <span className="badge ms-2">4</span>
            </Nav.Link>

            <Dropdown>
              <Dropdown.Toggle variant="success" id="langue">
                EN
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">FR</Dropdown.Item>
                <Dropdown.Item href="#/action-2">ESP</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </div>
      </div>
    </Container>
  );
}
  
  export default Navbar2;