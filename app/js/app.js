import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';

import AppRoot from './components/AppRoot';
import Home from './components/Home';
import Login from './components/Login';
import DonationList from './components/DonationList';

createRoot(document.getElementById('app-root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AppRoot/>}>
                <Route index element={<Home/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="donations" element={<DonationList/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);
