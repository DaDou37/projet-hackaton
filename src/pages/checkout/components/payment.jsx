function Payment() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-6'>
                    <div>
                        <label className="paymentTitle">Payment</label>
                        <div className="flex">
                            <button className="paymentOption"><img className='paymentImage' src='src/compotement/images/checkout/BankTransfer.png' /></button>
                            <button className="paymentOption"><img className='paymentImage' src='src/compotement/checkout/images/CreditCard.jpg' /></button>
                            <button className="paymentOption"><img className='paymentImage' src='src/compotement/checkout/images/PayPal.jpg' /></button>
                        </div>
                    </div>
                    <div className="separator"></div>
                    <div>
                        <label>Name on Card</label>
                        <div>
                            <input className="paymentName" />
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <label className="positionNumber">Card Number</label>
                            <div>
                                <input className="paymentNumber" />
                            </div>
                        </div>
                        <div>
                            <label className="positionCVV">CVV</label>
                            <div>
                                <input className='paymentCVV' />
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="form-group paymentMonth">
                            <label>Month</label>
                            <select className="form-control">
                                <option>January</option>
                                <option>Febuary</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                            </select>
                        </div>
                        <div className="form-group paymentYear">
                            <label>Year</label>
                            <select className="form-control">
                                <option>2025</option>
                                <option>2026</option>
                                <option>2027</option>
                                <option>2028</option>
                                <option>2029</option>
                                <option>2030</option>
                                <option>2031</option>
                                <option>2032</option>
                                <option>2033</option>
                                <option>2034</option>
                                <option>2035</option>
                                <option>2036</option>
                            </select>
                        </div>
                    </div>
                    <button className="paymentButton btn btn-primary">Place Order</button>
                </div>
            </div>
        </div>
    );
}

export default Payment; 