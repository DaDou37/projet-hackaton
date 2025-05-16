
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faThumbsUp, faStar, faBolt, faCartShopping, faBookmark, faCircle, faUsers, faBook, faStore, faFeather } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Countdown from 'react-countdown';


import Books from '../../compotement/books';
import Navbar1 from '../../compotement/navbar1';
import Footer from '../../compotement/footer';
import NewsletterSubscription from '../../compotement/newsletterSubscription';

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
  /* Flash sold for countdown */

  const deadline = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000);

  /* const Setting for Testimonials */

  const settingsB = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <>
      <Navbar1 />

      {/* page Back to school */}

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

        <div className="text-center py-3">
          <h2 className="display-5 mb-3"><strong>Special Offers</strong></h2>
          <p className="text-muted w-75 mx-auto px-3">
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
                <Link to='/Biography' className="link">BIOGRAPHY</Link>
                <Link to='/Thriller' className="link">THRILLER</Link>
                <Link to='/Horror' className="link">HORROR</Link>
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

        {/* Flash sale + countdown */}
        <div className="text-center py-5">
          <h2 className="display-5 mb-3"><strong>Flash sale</strong></h2>
          <p className="text-muted w-75 mx-auto px-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <Countdown
          date={deadline}
          renderer={({ days, hours, minutes, seconds, completed }) =>
            completed ? (
              <span>Hello</span>
            ) : (
              <div className="countdown-container d-flex gap-3 justify-content-center">
                {[
                  { label: "Days", value: days },
                  { label: "Hours", value: hours },
                  { label: "Minutes", value: minutes },
                  { label: "Seconds", value: seconds },
                ].map(({ label, value }) => (
                  <div className="countdown-item text-center" key={label}>
                    <div className="time text-2xl font-bold">
                      {String(value).padStart(2, "0")}
                    </div>
                    <div className="label text-sm">{label}</div>
                  </div>
                ))}
              </div>
            )
          }
        />
        {/* Carte flip */}
        <div className="d-flex flex-wrap justify-content-center gap-5">
          <div className="d-flex flex-column align-items-center mb-4 mt-5">

            <div className="cards">
              <div className="cards-inner">
                <div className="cards-front">
                  <img src="/images/harry.jpg" />
                </div>
                <div className="cards-back">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </div>
              </div>
            </div>
            {/* Infos sous la carte */}
            <h5 className="fw-bold mt-3 text-center">SECONDS</h5>
            <p className="small mb-1 text-center" id='categories'>THRILLER</p>

            <div className="d-flex justify-content-center align-items-baseline gap-2">
              <span className=" fw-bold fs-4" id='flash-new-price' >$54.78</span>
              <span className="text-muted text-decoration-line-through small" id='flash-old-price'>$70.00</span>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center mb-4 mt-5">

            <div className="cards">
              <div className="cards-inner">
                <div className="cards-front">
                  <img src="/images/harry2.jpg" />
                </div>
                <div className="cards-back">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </div>
              </div>
            </div>
            <h5 className="fw-bold mt-3 text-center">REWORK</h5>
            <p className="small mb-1 text-center" id='categories'>DRAMA,BIOGRAPHY</p>

            <div className="d-flex justify-content-center align-items-baseline gap-2">
              <span className=" fw-bold fs-4" id='flash-new-price' >$34.56</span>
              <span className="text-muted text-decoration-line-through small" id='flash-old-price'>$50.00</span>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center mb-4 mt-5">
            <div className="cards">
              <div className="cards-inner">
                <div className="cards-front">
                  <img src="/images/harry3.jpg" />
                </div>
                <div className="cards-back">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </div>
              </div>
            </div>
            <h5 className="fw-bold mt-3 text-center">Such a Fun Age</h5>
            <p className="small mb-1 text-center" id='categories'>THRILLER</p>

            <div className="d-flex justify-content-center align-items-baseline gap-2">
              <span className=" fw-bold fs-4" id='flash-new-price' >$14.56</span>
              <span className="text-muted text-decoration-line-through small" id='flash-old-price'>$20.00</span>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center mb-4 mt-5">

            <div className="cards">
              <div className="cards-inner">
                <div className="cards-front">
                  <img src="/images/harry4.jpg" />
                </div>
                <div className="cards-back">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </div>
              </div>
            </div>
            <h5 className="fw-bold mt-3 text-center">Emily and The Back..</h5>
            <p className="small mb-1 text-center" id='categories'>DRAMA,BIOGRAPHY</p>

            <div className="d-flex justify-content-center align-items-baseline gap-2">
              <span className=" fw-bold fs-4" id='flash-new-price' >$76.12</span>
              <span className="text-muted text-decoration-line-through small" id='flash-old-price'>$99.00</span>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center mb-4 mt-5">

            <div className="cards">
              <div className="cards-inner">
                <div className="cards-front">
                  <img src="/images/harry5.jpg" />
                </div>
                <div className="cards-back">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </div>
              </div>
            </div>
            <h5 className="fw-bold mt-3 text-center">Battle Drive</h5>
            <p className="small mb-1 text-center" id='categories'>DRAMA,BIOGRAPHY</p>

            <div className="d-flex justify-content-center align-items-baseline gap-2">
              <span className=" fw-bold fs-4" id='flash-new-price' >$76.12</span>
              <span className="text-muted text-decoration-line-through small" id='flash-old-price'>$99.00</span>
            </div>
          </div>
        </div>
        {/* Books on Sale */}

        <Books />

        {/* Featured Books */}
        <Row className="gx-5">
          <Col md={11} className="promo-banner mt-5 me-md-3 mb-2 mb-md-0">
            <div className="promo-content">
              <h1 className="promo-heading mb-3">Featured Books</h1>
              <p className="promo-description mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <Row className="gx-4">
                {/* Bloc Battle Drive (prend plus de largeur) */}
                <Col md={6}>
                  <div className="battle-drive bg-white p-4 rounded shadow-sm h-100">
                    <Row>
                      {/* Image */}
                      <Col md={5}>
                        <div className="cards">
                          <div className="cards-inner">
                            <div className="cards-front">
                              <img src="/images/harry.jpg" className="img-fluid rounded" />
                            </div>
                            <div className="cards-back">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                            </div>
                          </div>
                        </div>
                      </Col>

                      {/* Texte */}
                      <Col md={6}>
                        <div className="battle-content">
                          <h2 className="title-battle text-violet h5 mb-2 d-flex align-items-center">
                            <FontAwesomeIcon icon={faBookmark} className="icon-violet me-2" />
                            Battle Drive
                          </h2>

                          <p className="battle-class small mb-3">SPORTS, DRAMA</p>

                          <h6 className="battle-title-description text-uppercase fw-semibold mb-2">Synopsis</h6>
                          <p className="battle-description small mb-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </p>

                          <div className="d-flex justify-content-between text-muted small mb-3">
                            <span>Writen by <span className="fw-bold text-dark">Kevin Smiley</span></span>
                            <span>Year <span className="fw-bold text-dark">2019</span></span>
                          </div>

                          <div className="d-flex justify-content-between align-items-center mt-3">
                            <div className="price-book">
                              <p className="price-book-n fw-bold mb-1">$84.78</p>
                              <p className="price-book-new text-muted text-decoration-line-through small mb-0">$90.00</p>
                            </div>

                            <Button variant="primary" className="add-to-cart">
                              <FontAwesomeIcon icon={faCartShopping} className="cart-icon me-2" />
                              Add to cart
                            </Button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                {/* Right cards */}
                <Col md={6}>
                  <Row className="gx-3 gy-4 ">
                    {[...Array(6)].map((_, idx) => (
                      <Col md={4} key={idx} className='mt-4'>
                        <img
                          src="/images/harry2.jpg"
                          className="img-fluid rounded"
                          style={{ height: '200px', width: '130px', objectFit: 'cover' }}
                          alt="Harry Potter book cover"
                        />
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* Testimonials */}
        <div className="text-center py-5">
          <h2 className="display-5 mb-3"><strong>Testimonials</strong></h2>
          <p className="text-muted w-75 mx-auto px-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <Row className="circle-counter-container my-4">
          <Col className="d-flex align-items-center justify-content-center">
            <div className="circle empty-circle"></div>
            <div className="circle empty-circle"></div>
            <div className="circle empty-circle"></div>
            <div className="circle empty-circle"></div>
            <div className="circle filled-circle">
              <span className="counter-text">21k+</span>
            </div>
          </Col>
        </Row>

        <div className="slider-container-testi">
          <Slider {...settingsB}>
            <div className="testimonial-slide">
              <div className="testimonial-content">
                <h3 className="testimonial-text">Shoping book in Bookoe is very easy. Quick delivery and fast respon. They services is awesome!</h3>
                <div className="testimonial-author">
                  <div className="author-info">
                    <FontAwesomeIcon icon={faCircle} className="author-avatar" />
                    <div className="author-details">
                      <p className="author-name">Steve Henry</p>
                      <p className="author-title">Book Lovers</p>
                    </div>
                  </div>
                  <div className="rating">
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-slide">
              <div className="testimonial-content">
                <h3 className="testimonial-text">Shoping book in Bookoe is very easy. Quick delivery and fast respon. They services is awesome!</h3>
                <div className="testimonial-author">
                  <div className="author-info">
                    <FontAwesomeIcon icon={faCircle} className="author-avatar" />
                    <div className="author-details">
                      <p className="author-name">Steve Henry</p>
                      <p className="author-title">Book Lovers</p>
                    </div>
                  </div>
                  <div className="rating">
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-slide">
              <div className="testimonial-content">
                <h3 className="testimonial-text">Shoping book in Bookoe is very easy. Quick delivery and fast respon. They services is awesome!</h3>
                <div className="testimonial-author">
                  <div className="author-info">
                    <FontAwesomeIcon icon={faCircle} className="author-avatar" />
                    <div className="author-details">
                      <p className="author-name">Steve Henry</p>
                      <p className="author-title">Book Lovers</p>
                    </div>
                  </div>
                  <div className="rating">
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        {/* Latest news */}
        <Row className="gx-5">
          <Col className="latest mt-5 me-md-3 mb-2 mb-md-0">
            <div className="latest-content">
              <h1 className="latest-heading mb-3"><strong>latest News</strong></h1>
              <p className="latest-description mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </Col>
        </Row>
        <Slider {...settings}>
          {[1, 2, 3, 4].map((index) => (
            <div key={index}>
              <Card className='latest' style={{ width: '372px', height: '426px' }}>
                <Card.Img variant="top" src="/images/books.jpg" style={{ width: '100%' }} />
                <Card.Body>
                  <Card.Title>Why reading is important for our children</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  <Link to='/reading' className="link">Continue reading</Link>
                  <p className="name-user">
                    <FontAwesomeIcon icon={faCircle} className="author-avatar" />
                    Lidya Humble
                  </p>
                  <p className="date-publication">2days ago</p>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>

        {/* bar */}
        <div className="container  rounded p-4 my-4">
          <div className="row text-center">
            <div className="col-12 col-md-3 mb-4">
              <div className="icon-media mb-4">
                <FontAwesomeIcon icon={faUsers} size="3x" />
              </div>
              <h2 className="h1 fw-bold mb-1">125,663</h2>
              <p className="text-muted">Happy Customers</p>
            </div>
            <div className="col-12 col-md-3 mb-4">
              <div className="icon-media mb-4">
                <FontAwesomeIcon icon={faBook} size="3x" />
              </div>
              <h2 className="h1 fw-bold mb-1">50,672+</h2>
              <p className="text-muted">Book Collections</p>
            </div>
            <div className="col-12 col-md-3 mb-4">
              <div className="icon-media mb-4">
                <FontAwesomeIcon icon={faStore} size="3x" />
              </div>
              <h2 className="h1 fw-bold mb-1">1,562</h2>
              <p className="text-muted">Our Stores</p>
            </div>
            <div className="col-12 col-md-3 mb-4">
              <div className="icon-media mb-4">
                <FontAwesomeIcon icon={faFeather} size="3x" />
              </div>
              <h2 className="h1 fw-bold mb-1">457</h2>
              <p className="text-muted">Famous Writers</p>
            </div>
          </div>
        </div>
      </Container>
      <NewsletterSubscription />
      <Footer />
    </>
  );
}

export default Home;
