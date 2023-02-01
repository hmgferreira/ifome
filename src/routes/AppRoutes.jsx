import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import Orders from '../pages/Orders';
import Address from '../pages/Address';
import Payment from '../pages/Payment';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/address" element={<Address />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/finished" element={<Payment />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;