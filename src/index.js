import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
import Marketplace from './components/marketplace.js';
import IndividualNFT from './components/individualNFT.js';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/nft" element={<IndividualNFT />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
