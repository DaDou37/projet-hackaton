function BooksNews() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='flex'>
                        <div>
                            <div className='alignRow'>
                                <img className='book' src="src/compotement/images/booksDetails/HarryPotter.jpg" />
                                <p className="title">All Good News</p>
                                <div className='alignRow positionRating'>
                                    <div className="restrictionSize"><img className='rating' src="src/compotement/images/booksDetails/RatingStars.png" /><p className='ratingText'>4.0</p></div>
                                    <div><img className='rating2' src="src/compotement/images/booksDetails/CommentLogo.png" /><p>235 Reviews</p></div>
                                    <div><img className='rating2' src="src/compotement/images/booksDetails/Like.png" /><p>456k Likes</p></div>
                                    <div className='facebook'><img src="src/compotement/images/booksDetails/FacebookLogo.png" /><p>Facebook</p></div>
                                    <div className='twitter'><img src="src/compotement/images/booksDetails/TwitterLogo.png" /><p>Twitter</p></div>
                                    <div className='whatsapp'><img src="src/compotement/images/booksDetails/WhatsappLogo.png" /><p>Whatsapp</p></div>
                                    <div className='email'><img src="src/compotement/images/booksDetails/EmailLogo.png" /><p>Email</p></div>
                                </div>
                            </div>
                            <div className='alignRow'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                                <p>
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                    id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                    doloremque laudantium.
                                </p>
                            </div>
                            <div>
                                <img className="profile" src="src/compotement/images/booksDetails/ProfilePlaceholder.png" />
                                <p>Written by</p>
                                <p>Kevin Smiley</p>
                                <p>Publisher</p>
                                <p>Prinarea Studio</p>
                                <p>Year</p>
                                <p>2019</p>
                                <div>
                                    <div className='shipping'><img className='shippingLogo' src="src/compotement/images/booksDetails/Shipping.png" /><p>Free Shipping</p></div>
                                    <div className='stocks'><img className='stocksLogo' src="src/compotement/images/booksDetails/Stocks.png" /><p>In Stock</p></div>
                                </div>

                            </div><div className='separator'></div>
                            <div className='alignRow'>
                                <p className='newPrice'>$15.63</p>
                                <p className='oldPrice'>$16.99</p>
                                <div className='reduction'>2%</div>
                                <div className="quantity">
                                    <button data-decrease="data-decrease">
                                        <i>-</i>
                                    </button>
                                    <input
                                        data-value="data-value"
                                        type="number"
                                        defaultValue={1}
                                    />
                                    <button data-increase="data-increase">
                                        <i>+</i>
                                    </button>
                                </div>
                                <button className='cart'>
                                    <img src="src/compotement/images/booksDetails/Cart.png" /> Add to cart
                                </button>
                                <button className='cartLike'>
                                    <img className='heart' src='src/compotement/images/booksDetails/Heart.png' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default BooksNews;