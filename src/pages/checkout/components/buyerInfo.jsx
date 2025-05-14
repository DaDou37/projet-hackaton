function BuyerInfo() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-6'>
                    <label className='buyerTitle'>Buyer Info</label>
                    <div className='flex'>
                        <div>
                            <label className='positionLeft'>First Name</label>
                            <div>
                                <input className='buyerInfo' />
                            </div>
                        </div>
                        <div>
                            <label className='positionLeft'>Last Name</label>
                            <div>
                                <input className='buyerInfo' />
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <label className='positionLeft'>Email Address</label>
                            <div>
                                <input className='buyerInfo' />
                            </div>
                        </div>
                        <div>
                            <label className='positionLeft'>Mobile Phone Number</label>
                            <div>
                                <input className='buyerInfo' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className='longPositionLeft'>Adress</label>
                        <div>
                            <input className='longBuyerInfo' />
                        </div>
                    </div>
                    <div className='flex'>
                        <div className="form-group stateInfo">
                            <label>State</label>
                            <select className="form-control">
                                <option>England</option>
                                <option>France</option>
                                <option>Germany</option>
                                <option>Spain</option>
                                <option>Italy</option>
                            </select>
                        </div>
                        <div>
                            <label className='zipPosition'>ZIP Code</label>
                            <div>
                                <input className='buyerInfo zipInfo' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className='positionLeft2'>Town/City</label>
                        <div>
                            <input className='buyerInfo' />
                        </div>
                    </div>
                    <div>
                        <label className='notePositionLeft'>Note</label>
                        <div>
                            <input className='buyerNote' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BuyerInfo; 