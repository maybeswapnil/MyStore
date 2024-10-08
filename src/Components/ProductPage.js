import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios for making API requests
import './ProductPage.css';
import ImageForm from './ImageForm';
import Collection from './Collection';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import NotFoundPage from './NotFoundPage';

export default function ProductPage() {
  const [product, setProduct] = useState(null); // Store the fetched product details
  const [loading, setLoading] = useState(true); // Manage loading state
  const [error, setError] = useState(null); // Manage error state
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const skuFromUrl = params.get('sku');

    if (skuFromUrl) {
      fetchProduct(skuFromUrl); // Fetch product details when SKU is present
    }
  }, []);

  const fetchProduct = async (sku) => {
    try {
      setLoading(true); // Start loading
      const response = await axios.get(`http://localhost:4000/mystore/getProduct?sku=${sku}`); // Make API request
      setProduct(response.data); // Set product details
    } catch (err) {
      setError('Failed to fetch product details'); // Handle errors
      console.error('Error fetching product:', err);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  if (loading) {
    return <Loading />; // Show loading indicator
  }

  if (error) {
    return <NotFoundPage />; // Error state
}

  if (!product) {
    return null; // Return null if no product found
  }

  return (
    <>
      <div className="full-window-container">
        
        <div className="product-page-container">
          <div className="product-container">
            <div className="product-card">
              <div className="image-frame">
                <img className="product-image" src={product.url} alt={product.name} /> {/* Use fetched product details */}
              </div>
            </div>
          </div>
          <div className="product-page-details">
            <ImageForm res={product} /> {/* Pass the fetched product details to ImageForm */}
          </div>
        </div>
      </div>
      <Collection />
    </>
  );
}
