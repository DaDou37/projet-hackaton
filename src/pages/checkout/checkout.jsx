import Navbar1 from '../../compotement/navbar1';
import BuyerInfo from './components/buyerInfo';
import Payment from './components/payment';
import Guarantee from './components/guarantee';
import ProgressBar from './components/progressBar';

function Checkout() {
    return (
        <>
            <Navbar1 />
            <ProgressBar />
            <div className='flex'>
                <BuyerInfo />
                <Payment />
            </div>
            <Guarantee />
        </>
    )
}

export default Checkout;