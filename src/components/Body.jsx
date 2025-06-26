import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx"
import HomePage from "./HomePage/Body.jsx";
import PropertyListPage from "./PropertyListPage/Body.jsx";
import PropertyDetailPage from "./PropertyDetailPage/Body.jsx";
import UserLoginPage from "./UserLoginPage/Body.jsx";
import UserRegisterPage from "./UserRegisterPage/Body.jsx";
import UserDashboardPage from "./UserDashboardPage/Body.jsx";
import AddPropertyPage from "./AddPropertyPage/Body.jsx";
import EditPropertyPage from "./EditPropertyPage/Body.jsx";

const Body = () => {
    return (
        <Router>
        <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/propertylistpage" element={<PropertyListPage />} />
        <Route path="/propertydetailpage" element={<PropertyDetailPage />} />
        <Route path="/userloginpage" element={<UserLoginPage />} />
        <Route path="/userregisterpage" element={<UserRegisterPage />} />
        <Route path="/userdashboardpage" element={<UserDashboardPage />} />
        <Route path="/addpropertypage" element={<AddPropertyPage />} />
        <Route path="/editpropertypage" element={<EditPropertyPage />} />
            </Routes>
        </Router>
    );
};

export default Body;