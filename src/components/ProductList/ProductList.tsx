import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './Products'
import Product from './Product'
import './styles.css'; // Include the CSS file

export default function ProductList({baseName}:any) {
    return (
        <BrowserRouter basename={baseName}>
            <Routes>
                <Route path="/" element={<Products />}></Route>
                <Route path="/:id" element={<Product />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
