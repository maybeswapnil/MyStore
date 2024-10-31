import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './ProductPage.css';
import ImageForm from './ImageForm';
import Collection from './Collection';
import Loading from './Loading';
import NotFoundPage from './NotFoundPage';
import Description from './Description';

export default function ProductPage() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadCollection, setLoadCollection] = useState(false);
  const collectionRef = useRef(null); // Ref for Collection component

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const skuFromUrl = params.get('sku');

    if (skuFromUrl) {
      fetchProduct(skuFromUrl);
    }
  }, []);

  const fetchProduct = async (sku) => {
    const localStorageKey = `product_${sku}`; // Key for local storage
    const cachedData = localStorage.getItem(localStorageKey);
    
    // Check if cached data exists and is still valid
    if (cachedData) {
      const { timestamp, data } = JSON.parse(cachedData);
      const now = Date.now();

      // If the cached data is less than 15 minutes old, use it
      if (now - timestamp < 900000) {
        setProduct(data);
        setSelectedImage(data.images[0]); // Set selected image from cached data
        setLoading(false); // No need to set loading state again
        return; // Exit the function
      }
    }

    try {
      setLoading(true);
      const response = await axios.get(`https://mystore-apiset.onrender.com/mystore/getProduct?sku=${sku}`);
      
      // Store response in local storage with timestamp
      localStorage.setItem(localStorageKey, JSON.stringify({
        timestamp: Date.now(),
        data: response.data
      }));
      
      setProduct(response.data);
      setSelectedImage(response.data.url);
    } catch (err) {
      setError('Failed to fetch product details');
      console.error('Error fetching product:', err);
    } finally {
      setLoading(false);
    }
  };

  // This effect runs once the product data is loaded
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Collection is in view'); // Log when in view
          setLoadCollection(true);
          observer.disconnect(); // Stop observing after loading
        }
      });
    });

    if (collectionRef.current) {
      observer.observe(collectionRef.current);
      console.log('Observing:', collectionRef.current); // Log to check the ref
    }

    return () => {
      if (collectionRef.current) {
        observer.unobserve(collectionRef.current);
        console.log('Stopped observing:', collectionRef.current); // Log to confirm unobserving
      }
    };
  }, [product]); // Now runs when product is loaded

  if (loading) {
    return <div className="loadingCart"><Loading /></div>;
  }

  if (error) {
    return <NotFoundPage />;
  }

  if (!product) {
    return null;
  }

  return (
    <>
      <div className="full-window-container">
        <div className="product-page-container">
          <div className="product-container">
            <div className="product-card">
              <img className="product-image" src={selectedImage} alt={product.name} />

              {/* Thumbnail container */}
              <div className="thumbnail-container">
                {product.images?.map((image, index) => (
                  <img
                    key={index}
                    className={`thumbnail-image ${selectedImage === image ? 'active' : ''}`}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="product-page-details">
            <ImageForm res={product} />
          </div>
        </div>
      </div>
      <Description />
      <div 
        ref={collectionRef} 
        style={{ minHeight: '100vh', marginTop: '50px' }} // Ensure visibility for testing
      >
        {loadCollection && <Collection />} {/* Render Collection only when loaded */}
      </div>
    </>
  );
}
