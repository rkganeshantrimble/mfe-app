import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pricing from './Pricing';
// import Product from './Product'
// import './styles.css'; // Include the CSS file

export default function PricingRouter({
  baseName,
  pricingText,
  pricingQuantity,
}: any) {
  return (
    <BrowserRouter basename={baseName}>
      <Routes>
        <Route
          path="/pricing"
          element={
            <Pricing text={pricingText} defaultCount={pricingQuantity} />
          }
        ></Route>
        <Route
          path="/"
          element={
            <Pricing text={pricingText} defaultCount={pricingQuantity} />
          }
        ></Route>

        {/* <Route path="/:id" element={<Product />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}
