import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="products">
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product:any) => (
          <div key={product?.id} className="product-card">
            <img src={product?.thumbnail} alt={product?.title} />
            <h2>{product?.title}</h2>
            <p>{product?.description}</p>
            <p>Price: ${product?.price}</p>
            <p>Rating: {product?.rating}</p>
            <Link to={`/${product?.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;