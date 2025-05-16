import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Card, Badge, ListGroup, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function BooksGrid() {
    const [hoveredBook, setHoveredBook] = useState(null);
    const [viewMode, setViewMode] = useState('grid');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages] = useState(3);
    const [priceRange, setPriceRange] = useState([145, 410]);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState({
        publisher: '',
        year: '',
        categories: []
    });
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const sections = [
        {
            title: "Thunder Stunt",
            items: ["ADVANTURE", "SCIENCE", "COMEDY"],
            price: 84.78,
            originalPrice: 90.00,
            discount: 20,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            screenBy: "Kevin Smiley",
            publisher: "Printarea Studios",
            year: "2019"
        },
        {
            title: "ALL GOOD NEWS",
            items: ["BIOGRAPHY"],
            price: 54.78,
            originalPrice: 70.00,
            discount: 20
        },
        {
            title: "Terrible Madness",
            items: ["ADVENTURE", "1:00"],
            price: 54.78,
            originalPrice: 70.00,
            discount: 20
        },
        {
            title: "The Missadventure...",
            items: ["A Heavy Lift", "HORSEY BANK", "2:00"],
            price: 54.78,
            originalPrice: 70.00,
            discount: 20
        },
        {
            title: "A Heavy Lift",
            items: ["RICHER BANK", "3:00"],
            price: 54.78,
            originalPrice: 70.00,
            discount: 20
        },
        {
            title: "Battler Drive",
            items: ["SHOTTLE SMALL", "4:00"],
            price: 54.78,
            originalPrice: 70.00,
            discount: 20
        },
        {
            title: "Take Out Tango",
            items: ["GRAIN, COSTOFF", "5:00"],
            price: 54.78,
            originalPrice: 70.00,
            discount: 20
        },
        {
            title: "Pushing Clouds",
            items: ["THILLER", "6:00"],
            price: 54.78,
            originalPrice: 70.00,
            discount: 20
        },
        {
            title: "SECONDS",
            items: ["DAMN, BROWNIE", "7:00"],
            price: 54.78,
            originalPrice: 70.00,
            discount: 20
        },
        {
            title: "REWORK",
            items: ["THRILLER", "8:00"],
            price: 54.78,
            originalPrice: 70.00,
            discount: 20
        },
        {
            title: "Such a Fun Age",
            items: ["GRAIN, BROWNIE", "9:00"],
            price: 54.78,
            originalPrice: 70.00,
            discount: 20
        },
        {
            title: "Emily and The Back...",
            items: ["THRILLER", "8:00"],
            price: 54.78,
            originalPrice: 70.00,
            discount: 20
        }
    ];

    const filterOptions = {
        editorPicks: {
            "Best Sales (105)": ["Alone Here", "Allen Invassion", "Bullo The Cat", "Cut That Hair!", "Dragon Of The King"],
            "Most Commented (21)": [],
            "Newest Books (32)": [],
            "Featured (129)": [],
            "Watch History (21)": [],
            "Best Books (44)": []
        },
        publishers: ["Publisher A", "Publisher B", "Publisher C", "Publisher D"],
        years: ["2023", "2022", "2021", "2020"],
    };

    const categories = [
        "Action", "Fantasy", "Adventure", "History",
        "Animation", "Horror", "Biography", "Mystery",
        "Comedy", "Romance", "Crime", "Sci-fi",
        "Documentary", "Sport"
    ];

    const toggleCategory = (category) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const toggleDropdown = (dropdownName) => {
        setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    };

    const handlePriceChange = (e, index) => {
        const newValue = parseInt(e.target.value);
        const newRange = [...priceRange];
        newRange[index] = newValue;
        setPriceRange(newRange);
    };

    const handleFilterSelect = (filterType, value) => {
        if (filterType === 'categories') {
            const updatedCategories = selectedFilters.categories.includes(value)
                ? selectedFilters.categories.filter(cat => cat !== value)
                : [...selectedFilters.categories, value];
            setSelectedFilters({
                ...selectedFilters,
                categories: updatedCategories
            });
        } else {
            setSelectedFilters({
                ...selectedFilters,
                [filterType]: selectedFilters[filterType] === value ? '' : value
            });
        }
    };

    return (
        <Container>
            <Row>
                <Col style={{ marginLeft: '-100px', maxWidth: '500px' }}>
                    <h1>FILTER OPTION</h1>
                    <div className="filter-system">
                        {/* Section Editor Picks */}
                        <div className="filter-section">
                            <h2>Editor Picks</h2>
                            <div className="editor-picks-menu">
                                <div className="menu-category">
                                    <div className="category-header" onClick={() => toggleDropdown('Best Sales')}>
                                        <span>Best Sales (105)</span>
                                        <span className={`dropdown-icon ${activeDropdown === 'Best Sales' ? 'open' : ''}`}>
                                            {activeDropdown === 'Best Sales' ? '−' : '+'}
                                        </span>
                                    </div>
                                    {activeDropdown === 'Best Sales' && (
                                        <ul className="sub-items">
                                            <li>Alone Here</li>
                                            <li>Allen Invasion</li>
                                            <li>Bulo The Cat</li>
                                            <li>Cut That Hair</li>
                                            <li>Dragon Of The King</li>
                                        </ul>
                                    )}
                                </div>

                                {['Most Commenced (21)', 'Newest Books (23)', 'Featured (129)', 'Watch History (21)', 'Best Books (44)'].map((title) => (
                                    <div key={title} className="menu-category">
                                        <div className="category-header" onClick={() => toggleDropdown(title)}>
                                            <span>{title}</span>
                                            <span className={`dropdown-icon ${activeDropdown === title ? 'open' : ''}`}>
                                                {activeDropdown === title ? '−' : '+'}
                                            </span>
                                        </div>
                                    </div>
                                ))}

                                <div className="view-more-link">
                                    View more ➤
                                </div>
                            </div>
                        </div>

                        {/* Dropdown pour Choose Publisher */}
                        <div className="filter-section">
                            <div className="filter-group">
                                <div className="filter-header" onClick={() => toggleDropdown('publisher')}>
                                    <h3>Choose Publisher</h3>
                                    <span className={`dropdown-icon ${activeDropdown === 'publisher' ? 'open' : ''}`}>▼</span>
                                </div>
                                {activeDropdown === 'publisher' && (
                                    <div className="dropdown-content">
                                        {filterOptions.publishers.map(publisher => (
                                            <div
                                                key={publisher}
                                                className={`dropdown-item ${selectedFilters.publisher === publisher ? 'selected' : ''}`}
                                                onClick={() => handleFilterSelect('publisher', publisher)}
                                            >
                                                {publisher}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Dropdown pour Select Year */}
                        <div className="filter-section">
                            <div className="filter-group">
                                <div className="filter-header" onClick={() => toggleDropdown('year')}>
                                    <h3>Select Year</h3>
                                    <span className={`dropdown-icon ${activeDropdown === 'year' ? 'open' : ''}`}>▼</span>
                                </div>
                                {activeDropdown === 'year' && (
                                    <div className="dropdown-content">
                                        {filterOptions.years.map(year => (
                                            <div
                                                key={year}
                                                className={`dropdown-item ${selectedFilters.year === year ? 'selected' : ''}`}
                                                onClick={() => handleFilterSelect('year', year)}
                                            >
                                                {year}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="category-filter">
                            <h2>Shop by Category</h2>
                            <ul className="category-list">
                                {categories.map(category => (
                                    <li key={category}>
                                        <label className="category-item">
                                            <input
                                                type="checkbox"
                                                checked={selectedCategories.includes(category)}
                                                onChange={() => toggleCategory(category)}
                                                className="category-checkbox"
                                            />
                                            <span className="category-label">{category}</span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Slider pour Price Range */}
                        <div className="filter-section">
                            <h3>Price Range</h3>
                            <div className="price-slider-container">
                                <div className="slider-track"></div>
                                <input
                                    type="range"
                                    min="0"
                                    max="500"
                                    value={priceRange[0]}
                                    onChange={(e) => handlePriceChange(e, 0)}
                                    className="slider-thumb thumb--left"
                                />
                                <input
                                    type="range"
                                    min="0"
                                    max="500"
                                    value={priceRange[1]}
                                    onChange={(e) => handlePriceChange(e, 1)}
                                    className="slider-thumb thumb--right"
                                />
                            </div>
                            <div className="price-values">
                                <span>${priceRange[0]}</span>
                                <span>${priceRange[1]}</span>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col xs={8} className="ms-auto">
                    <h1>Books</h1>
                    <div className="d-flex gap-2 test4">
                        <Button variant="primary">Today</Button>
                        <Button variant="primary">This Week</Button>
                        <Button variant="primary">This Month</Button>

                        <div className="d-flex gap-2" style={{ marginLeft: '300px', marginTop: '5px' }}>
                            <Button variant={viewMode === 'detailed' ? 'dark' : 'light'} onClick={() => setViewMode('detailed')}>
                                <img src="images/open-menu 1.png" alt="List View" style={{ width: '20px', height: '20px' }} />
                            </Button>
                            <Button variant={viewMode === 'grid' ? 'dark' : 'light'} onClick={() => setViewMode('grid')}>
                                <img src="images/ic_gridView.png" alt="Grid View" style={{ width: '20px', height: '20px' }} />
                            </Button>
                            <button
                                src="images/ic_sidebarView.png"
                                style={{ width: '20px', height: '20px' }}
                                alt="Sidebar View"
                            />
                        </div>
                        <div className="d-flex gap-2" style={{ marginLeft: 'auto' }}>
                            <button
                                src="images/sortBy.png"
                                style={{ width: '100px', height: '30px' }}
                            />
                        </div>
                    </div>

                    <div style={{ margin: '50px -10px' }}>
                        <div className="row">
                            {sections.map((section, index) => (
                                <div 
                                    key={index}
                                    className={viewMode === 'grid' ? "col-sm-6 col-md-4 col-lg-3 p-3" : "col-12 mb-3"}
                                    onMouseEnter={() => setHoveredBook(index)}
                                    onMouseLeave={() => setHoveredBook(null)}
                                >
                                    {viewMode === 'grid' ? (
                                        <Card className="h-100 border-0 shadow-sm" style={{ 
                                            transition: 'all 0.3s ease',
                                            transform: hoveredBook === index ? 'translateY(-5px)' : 'none'
                                        }}>
                                            <Button
                                                variant="link"
                                                className="position-absolute top-0 end-0 p-2"
                                                style={{ zIndex: 1 }}
                                            >
                                                <img
                                                    src="images/favorite.png"
                                                    alt="Favori"
                                                    style={{width: '35px', height: '35px', borderRadius: '30%', marginTop: '5px', marginRight: '5px'}}
                                                />
                                            </Button>

                                            <div style={{
                                                height: '250px',
                                                backgroundColor: '#C4C4C4',
                                                borderRadius: '10%',
                                            }} />

                                            <Card.Body className="d-flex flex-column" style={{ padding: '1rem' }}>
                                                <div>
                                                    <Card.Title className="mb-1" style={{ 
                                                        fontSize: '0.9rem',
                                                        fontWeight: 'bold',
                                                        whiteSpace: 'nowrap',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis'
                                                    }}>
                                                        {section.title}
                                                    </Card.Title>
                                                    <Card.Text className="text-muted mb-2" style={{ fontSize: '0.75rem' }}>
                                                        {section.items[0]}
                                                    </Card.Text>
                                                </div>

                                                {hoveredBook === index && (
                                                    <div className="mt-auto">
                                                        <div className="d-flex align-items-center mb-2">
                                                            <span className="text-danger fw-bold">${section.price.toFixed(2)}</span>
                                                            <span className="text-muted text-decoration-line-through ms-2">${section.originalPrice.toFixed(2)}</span>
                                                        </div>
                                                        <Button 
                                                            variant="primary" 
                                                            size="sm" 
                                                            className="w-100"
                                                            style={{ fontSize: '0.75rem', padding: '0.25rem' }}
                                                        >
                                                            Add to cart
                                                        </Button>
                                                    </div>
                                                )}
                                            </Card.Body>
                                        </Card>
                                    ) : (
                                        <Card className="d-flex flex-row h-100 p-3 border-0 shadow-sm">
                                            <div style={{
                                                width: '100px',
                                                height: '130px',
                                                backgroundColor: '#f5f5f5',
                                                backgroundImage: 'linear-gradient(to bottom right, #eeeeee, #e0e0e0)',
                                                marginRight: '20px'
                                            }} />

                                            <div className="d-flex flex-column flex-grow-1">
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <div>
                                                        <h5 className="mb-1" style={{ fontSize: '1rem' }}>{section.title}</h5>
                                                        <p className="text-muted small mb-2">{section.items.join(' • ')}</p>
                                                    </div>
                                                    <Button variant="link" className="p-0">
                                                        <img
                                                            src="images/favorite.png"
                                                            alt="Favori"
                                                        />
                                                    </Button>
                                                </div>

                                                <div className="mt-auto">
                                                    <div className="d-flex align-items-center mb-2">
                                                        <span className="text-danger fw-bold">${section.price.toFixed(2)}</span>
                                                        <span className="text-muted text-decoration-line-through ms-2">${section.originalPrice.toFixed(2)}</span>
                                                        <Badge bg="warning" text="dark" className="ms-2">{section.discount}% OFF</Badge>
                                                    </div>
                                                    <Button 
                                                        variant="primary" 
                                                        size="sm" 
                                                        style={{ width: '120px' }}
                                                    >
                                                        Add to cart
                                                    </Button>
                                                </div>
                                            </div>
                                        </Card>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="custom-pagination" style={{ marginLeft: '650px' }}>
                        <button
                            className="custom-pagination-button custom-pagination-prev-next"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            &lt; Previous
                        </button>

                        {[1, 2, 3].map(page => (
                            <button
                                key={page}
                                className={`custom-pagination-button custom-pagination-page ${currentPage === page ? 'active' : ''}`}
                                onClick={() => handlePageChange(page)}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            className="custom-pagination-button custom-pagination-prev-next"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Next &gt;
                        </button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default BooksGrid;