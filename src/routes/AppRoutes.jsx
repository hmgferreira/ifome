import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import Orders from '../pages/Orders';
import Address from '../pages/Address';
import Payment from '../pages/Payment';

import Categories from '../pages/Admin/Categories';
import Form from '../pages/Admin/Categories/Form';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/address" element={<Address />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/finished" element={<Payment />} />
                
                <Route path="/categories" element={<Categories />} />
                <Route path="/categories/new" element={<Form />} />
                
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;