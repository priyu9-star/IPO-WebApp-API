import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router';
import SignUp from './auth/SignUp';
import LoginPage from './auth/LoginPage';
import ForgotPassword from './auth/ForgotPassword';
import AdminDashboard from './admin/AdminDashboard';
import InvestorsApp from './investor/Investors';
import ManageIPO from './admin/ManageIPO';
import BrokerComparison from './investor/Comparebrokers';
import BrokersPage from './investor/brokerspage';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="" element = {<App />} />
            <Route path="/signup" element = {<SignUp />} />
            <Route path="/signin" element = {<LoginPage />} />
            <Route path="/reset-password" element = {<ForgotPassword/>} />
            <Route path="/admin/dashboard" element = {<AdminDashboard/>} />
            <Route path="/admin/manage" element = {<ManageIPO/>} />
            <Route path="/investors" element = {<InvestorsApp/>} />
            <Route path="/compare-broker" element = {<BrokerComparison/>} />
            <Route path="/brokers" element = {<BrokersPage/>} />
        </Routes>
    </BrowserRouter>
);

reportWebVitals();

