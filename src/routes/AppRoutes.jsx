import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import Orders from '../pages/Orders';
import Address from '../pages/Address';
import Payment from '../pages/Payment';

import CategoriesIndex from '../pages/Admin/Categories/CategoriesIndex';
import CategoriesForm from '../pages/Admin/Categories/CategoriesForm';
import RoutePrivate from './RoutePrivate';
import Login from '../pages/Login';
import Topbar from '../layouts/Topbar';
import {ThemeProvider} from '@mui/material'
import { ThemeDefault } from '../themes';

function AppRoutes() {

    const routes = [
        {
            path: '/',
            component: <Welcome />,
            isPrivate: false
        },
        {
            path: '/orders',
            component: <Orders />,
            isPrivate: false
        },
        {
            path: '/categories',
            component: <CategoriesIndex />,
            isPrivate: true
        }
    ];

    return (
        <ThemeProvider theme={ThemeDefault}>
            <BrowserRouter>
                <Topbar />
                <Routes>
                    {/* {routes.map((item) => (
                        <Route 
                            path={item.path} 
                            element={
                                <RoutePrivate isPrivate={item.isPrivate}>
                                    {item.component}
                                </RoutePrivate>
                            }
                        />
                    ))} */}

                    <Route path="/" element={<Welcome />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/address" element={<Address />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/finished" element={<Payment />} />
                    
                    <Route path="/login" element={<Login />} />
                    <Route path="/categories" element={
                        <RoutePrivate>
                            <CategoriesIndex />
                        </RoutePrivate>
                    } />
                    <Route path="/categories/new" element={
                        <RoutePrivate>
                            <CategoriesForm />
                        </RoutePrivate>
                    } />
                    <Route path="/categories/edit/:id" element={
                        <RoutePrivate>
                            <CategoriesForm />
                        </RoutePrivate>
                    } />
                    
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default AppRoutes;