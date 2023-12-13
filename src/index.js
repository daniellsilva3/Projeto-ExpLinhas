import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Routes/Home';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { StrictMode } from "react";



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BrowserRouter>
<Routes>
<Route path="/cadastro" element={<p>Oi!</p>}/>
<Route path="/" element={<App />} />
</Routes>
</BrowserRouter>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
