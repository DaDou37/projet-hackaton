import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faThumbsUp, faStar, faBolt, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import './home.css';


function Home() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (

    /* page Back to school */

    <Container fluid className="px-4 py-3">
      <Row className="gx-4">
        <Col md={8} className="promo-banner me-md-3 mb-4 mb-md-0">
          <div className="promo-content">
            <p className="back-to-school">BACK TO SCHOOL</p>
            <h1 className="promo-heading">Special 50% Off</h1>
            <h2 className="promo-subheading">for our student community</h2>
            <p className="promo-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="promo-buttons">
              <Button className="get-deal-btn">
                Get the deal <span className="btn-arrow">→</span>
              </Button>
              <Button className="see-promos-btn">See other promos</Button>
            </div>
            <div className="promo-indicators">
              <span className="indicator active"></span>
              <span className="indicator"></span>
              <span className="indicator"></span>
              <span className="indicator"></span>
            </div>
          </div>
          <div className="orange-circle"></div>
          <div className="purple-circle"></div>

          {/* best seller with carousel */}

        </Col>
        <Col md={3} className="best-seller">
          <div className="best-seller-content">
            <h2 className="seller-heading">Best Seller</h2>
            <p className="seller-subheading">Based on this week's sales</p>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/coursC.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/cours.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/coursA.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
            <h3 className="product-title">Pushing Clouds</h3>
            <p className="product-categories">ADVENTURE · SCIENCE · COMEDY</p>
            <div className="product-price">
              <span className="original-price">$60.00</span>
              <span className="discounted-price">USD 45.25</span>
            </div>
          </div>
        </Col>
      </Row>

      {/* bar with Font Awesome */}

      <div className="container py-5">
        <div className="row text-center">
          <div className="col-md-3 mb-4">
            <div className="icon-text">
              <FontAwesomeIcon icon={faBolt} size="2x" className="mb-2" id="icon" />
              <div className="text-content">
                <h5 className="fw-bold">Quick Delivery</h5>
                <p className="text-muted small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="icon-text">
              <FontAwesomeIcon icon={faShieldAlt} size="2x" className="mb-2" id="icon" />
              <div className="text-content">
                <h5 className="fw-bold">Secure Payment</h5>
                <p className="text-muted small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="icon-text">
              <FontAwesomeIcon icon={faThumbsUp} size="2x" className="mb-2" id="icon" />
              <div className="text-content">
                <h5 className="fw-bold">Best Quality</h5>
                <p className="text-muted small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="icon-text">
              <FontAwesomeIcon icon={faStar} size="2x" className="mb-2" id="icon" />
              <div className="text-content">
                <h5 className="fw-bold">Return Guarantee</h5>
                <p className="text-muted small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recomended with slider and cards */}

      <Row className="justify-content-center">
        <Col md={5} className="recomended me-md-5">
          <div className="recomended-content">
            <h1 className="title-recomended">Recomended For You</h1>
            <p className="recomended-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="slider-container">
            <Slider {...settings}>
              <div className="slick-slide">
                <Card className="card">
                  <img className="card-img card_img" src="/images/cours.jpg" />
                </Card>
              </div>
              <div className="slick-slide">
                <Card className="card">
                  <img className="card-img card_img" src="/images/cours.jpg" />
                </Card>
              </div><div className="slick-slide">
                <Card className="card">
                  <img className="card-img card_img" src="/images/cours.jpg" />
                </Card>
              </div><div className="slick-slide">
                <Card className="card">
                  <img className="card-img card_img" src="/images/cours.jpg" />
                </Card>
              </div><div className="slick-slide">
                <Card className="card">
                  <img className="card-img card_img" src="/images/cours.jpg" />
                </Card>
              </div><div className="slick-slide">
                <Card className="card">
                  <img className="card-img card_img" src="/images/cours.jpg" />
                </Card>
              </div><div className="slick-slide">
                <Card className="card">
                  <img className="card-img card_img" src="/images/cours.jpg" />
                </Card>
              </div><div className="slick-slide">
                <Card className="card">
                  <img className="card-img card_img" src="/images/cours.jpg" />
                </Card>
              </div>
            </Slider>
          </div>
          <div className="little-orange-circle"></div>
          <div className="little-orange-circle-bis"></div>
        </Col>

        {/* Popular with slider and cards */}

        <Col md={5} className="popular ms-md-5">
          <div className="blue-circle-bis"></div>
          <div className="popular-content">
            <h1 className="title-recomended">Popular in 2020</h1>
            <p className="recomended-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="slider-container">
            <Slider {...settings}>
              <div className="slick-slide">
                <Card className="card">
                  <img className="card-img card_img" src="/images/cours.jpg" />
                </Card>
              </div>
              <div className="slick-slide">
                <Card className="card">
                  <img className="card-img card_img" src="/images/cours.jpg" />
                </Card>
              </div><div className="slick-slide">
                <Card className="card">
                  <img className="card-img card_img" src="/images/cours.jpg" />
                </Card>
              </div><div className="slick-slide">
                <Card className="card">
                  <img className="card-img card_img" src="/images/cours.jpg" />
                </Card>
              </div><div className="slick-slide">
                <Card className="card">
                  <img className="card-img card_img" src="/images/cours.jpg" />
                </Card>
              </div><div className="slick-slide">
                <Card className="card">
                  <img className="card-img card_img" src="/images/cours.jpg" />
                </Card>
              </div><div className="slick-slide">
                <Card className="card">
                  <img className="card-img card_img" src="/images/cours.jpg" />
                </Card>
              </div><div className="slick-slide">
                <Card className="card">
                  <img className="card-img card_img" src="/images/cours.jpg" />
                </Card>
              </div>
            </Slider>
          </div>
          <div className="blue-circle"></div>
        </Col>
      </Row>

      {/* Special offers */}

      <div className="text-center py-8">
        <h2 className="text-3xl mb-3"><strong>Special Offers</strong></h2>
        <p className="text-gray-600 max-w-2xl mx-auto px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <Slider {...settings}>
      <Card className='offers' style={{ width: '512px', height: '690px' }}>
        <Card.Img variant="top" src="/images/cours.jpg" style={{ width: '512.3px', height: '306px' }} />
        <Card.Body>
          <Card.Title><strong>SECONDS [Part 1]</strong></Card.Title>
          <div className="card-links">
            <a href='Biography' className="link">BIOGRAPHY</a>
            <a href='Thriller' className="link">THRILLER</a>
            <a href='Horror' className="link">HORROR</a>
          </div>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <p className="name">Kevin Smiley</p>
          <div className="price-container">
            <Button variant="primary" className="add-to-cart">
              <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
              Add to cart
            </Button>
            <div className="prices">
              <h1 className="price-new">$18,78</h1>
              <p className="price-old">$25</p>
            </div>
          </div>
        </Card.Body>
      </Card>
      <Card className='offers' style={{ width: '512px', height: '690px' }}>
        <Card.Img variant="top" src="/images/cours.jpg" style={{ width: '512.3px', height: '306px' }} />
        <Card.Body>
          <Card.Title><strong>Terrible Madness</strong></Card.Title>
          <div className="card-links">
            <a href='Biography' className="link">BIOGRAPHY</a>
            <a href='Thriller' className="link">THRILLER</a>
            <a href='Horror' className="link">HORROR</a>
          </div>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <p className="name">David Here</p>
          <div className="price-container">
            <Button variant="primary" className="add-to-cart">
              <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
              Add to cart
            </Button>
            <div className="prices">
              <h1 className="price-new">$18,78</h1>
              <p className="price-old">$25</p>
            </div>
          </div>
        </Card.Body>
      </Card>
      <Card className='offers' style={{ width: '512px', height: '690px' }}>
        <Card.Img variant="top" src="/images/cours.jpg" style={{ width: '512.3px', height: '306px' }} />
        <Card.Body>
          <Card.Title><strong>REWORK</strong></Card.Title>
          <div className="card-links">
            <a href='Biography' className="link">BIOGRAPHY</a>
            <a href='Thriller' className="link">THRILLER</a>
            <a href='Horror' className="link">HORROR</a>
          </div>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <p className="name">Margaretha Helew</p>
          <div className="price-container">
            <Button variant="primary" className="add-to-cart">
              <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
              Add to cart
            </Button>
            <div className="prices">
              <h1 className="price-new">$18,78</h1>
              <p className="price-old">$25</p>
            </div>
          </div>
        </Card.Body>
      </Card>
</Slider>

{/* Flash sale */} 





    </Container>
  );
}

export default Home;
