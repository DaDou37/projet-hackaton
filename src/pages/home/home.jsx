import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col className='test' md={7}>
          <h2>Back to school</h2>
          <h1 style={{ margin: '3% 0%' }}>
            Special 50% off</h1>
          <h2>For ou student community</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris</h3>
          <button type="button" className="deal" style={{ margin: '0% 20%' }}>Get the deal</button>
          <button type="button" className="deal" style={{ margin: 'auto' }}>See other promos</button>

        </Col>
      </Row>
    </Container>
  );
}

export default Home; 
