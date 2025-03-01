import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router';
import SignUp from './SignUp';
import LoginPage from './LoginPage';
import AdminDashboard from './adminDashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="" element = {<App />} />
            <Route path="/signup" element = {<SignUp />} />
            <Route path="/signin" element = {<LoginPage />} />
            <Route path="/admin/dashboard" element = {<AdminDashboard/>} />
        </Routes>
    </BrowserRouter>
);

reportWebVitals();

