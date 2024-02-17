import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginPage from './screens/loginPage';
import HomePage from './screens/homePage';
import TalentIndexPage from './screens/talentIndexPage';
import SignInPage from './screens/signInPage';
import reportWebVitals from './reportWebVitals';
import ContactPage from './screens/contactPage';
import TalentShowPage from './screens/talentShowPage';
// import { Route, Navlink, HashRouter } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/talents" element={<TalentIndexPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/talents/:id" element={<TalentShowPage />} />
        <Route path="/talents/:id/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
