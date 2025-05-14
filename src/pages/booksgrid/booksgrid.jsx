import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import Table from 'react-bootstrap/Table';
import { Card, ListGroup, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function BooksGrid() {

    const sections = [
        {
            title: "Thunder Stunt",
            items: ["ADVANTURE SIENCE COMEDY"]
        },
        {
            title: "ALL GOOD NEWS",
            items: ["BIOGRAPHY"]
        },
        {
            title: "Terrible Madness",
            items: ["ADVENTURE", "1:00"]
        },
        {
            title: "The Missadventure...",
            items: ["A Heavy Lift", "HORSEY BANK", "2:00"]
        },
        {
            title: "A Heavy Lift",
            items: ["RICHER BANK", "3:00"]
        },
        {
            title: "Battler Drive",
            items: ["SHOTTLE SMALL", "4:00"]
        },
        {
            title: "Take Out Tango",
            items: ["GRAIN, COSTOFF", "5:00"]
        },
        {
            title: "Pushing Clouds",
            items: ["THILLER", "6:00"]
        },
        {
            title: "SECONDS",
            items: ["DAMN, BROWNIE", "7:00"]
        },
        {
            title: "REWORK",
            items: ["THRILLER", "8:00"]
        },
        {
            title: "Such a Fun Age",
            items: ["GRAIN, BROWNIE", "9:00"]
        },
        {
            title: "Emily and The Back...",
            items: ["THRILLER", "8:00"]
        }
    ];

    return (
        <Container>
            <Row>
                <Col xs={6}>
                    <h1>FILTER OPTION</h1>

                    {/* Editor Picks Dropdown */}
                    <Dropdown autoClose={false}>
                        <Dropdown.Toggle id="dropdown-autoclose-false" variant="link">
                            Editor Picks
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Best Sales</Dropdown.Item>
                            <Dropdown.Item href="#">Most Recommended</Dropdown.Item>
                            <Dropdown.Item href="#">Newest Books</Dropdown.Item>
                            <Dropdown.Item href="#">Featured</Dropdown.Item>
                            <Dropdown.Item href="#">Watch History</Dropdown.Item>
                            <Dropdown.Item href="#">Best Books</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    {/* Publisher Dropdown */}
                    <Dropdown autoClose={false}>
                        <Dropdown.Toggle variant="success" id="dropdown-autoclose-false">
                            Choose Publisher
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Publisher 1</Dropdown.Item>
                            <Dropdown.Item href="#">Publisher 2</Dropdown.Item>
                            <Dropdown.Item href="#">Publisher 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    {/* Year Dropdown */}
                    <Dropdown autoClose={false}>
                        <Dropdown.Toggle id="dropdown-autoclose-false" variant="link">
                            Select Year
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#">2024</Dropdown.Item>
                            <Dropdown.Item href="#">2023</Dropdown.Item>
                            <Dropdown.Item href="#">2022</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    {/* Category Checkbox Dropdown */}
                    <Dropdown autoClose={false}>
                        <Dropdown.Toggle id="dropdown-autoclose-false" variant="link">
                            Shop by Category
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Form>
                                <div className="mb-3">
                                    {[
                                        "Action", "Fantasy", "Adventure", "History", "Animation",
                                        "Horror", "Biography", "Mystery", "Comedy", "Romance",
                                        "Crime", "Sci-fi", "Documentary", "Sport"
                                    ].map((genre, index) => (
                                        <Form.Check
                                            key={index}
                                            inline
                                            label={genre}
                                            name="categories"
                                            type="checkbox"
                                            id={`checkbox-${index}`}
                                        />
                                    ))}
                                </div>
                            </Form>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className="mb-3">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Price Range
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Form.Label>Range</Form.Label>
                            <Form.Range />
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>

                <Col xs={6}>
                    <h1>Books</h1>
                    <div className="d-flex gap-2 test4">
                        <Button variant="primary">Today</Button>
                        <Button variant="primary">This Week</Button>
                        <Button variant="primary">This Month</Button>
                    </div>

                    <div className="container my-4">
                        <Card className="custom-table" style={{ minWidth: '700px'}}>
                            <div className="row">
                                {sections.map((section, index) => (
                                    <div key={index} className="col-md-6 col-lg-4 p-3">
                                        <Card className="h-200 custom-card" style={{ minHeight: '250px'}}>
                                           
                                        </Card>
                                        <h5 className="mb-0">{section.title}</h5>
                                        <h5 className="mb-0">{section.items}</h5>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>

                    <Pagination>
                        <Pagination.Prev />
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Next />
                    </Pagination>
                </Col>
            </Row>
        </Container>
    );
}

export default BooksGrid;
