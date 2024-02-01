import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewFakeProduct from './manufacturers/pages/ViewFakeProduct';
import ViewQrCodes from './manufacturers/pages/ViewQrCodes';
import LoginManufacturer from './manufacturers/pages/auth/LoginManufacturer';
import RegisterManufacturer from './manufacturers/pages/auth/RegisterManufacturer';
import GenerateQrCode from './manufacturers/pages/GenerateQrCode';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<ViewFakeProduct />} />   
        <Route path='/qrcodes' element={<ViewQrCodes />} />  
        <Route path='/generate-qrcode' element={<GenerateQrCode />} />  
        <Route path='/login' element={<LoginManufacturer />} /> 
        <Route path='/register' element={<RegisterManufacturer />} /> 
      </Routes>
    </Router>

  );
}

export default App;

