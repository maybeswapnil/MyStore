import React, { useEffect, useState } from 'react';
import './YourCart.css';
import { useSelector } from 'react-redux';
import { selectCart } from '../features/userSlice';
import ProductPage from './ProductPage';
import { useNavigate } from 'react-router-dom';

export default function Product(props) {
  const cart = useSelector(selectCart);
  const [added, setAdded] = useState(false);
  const [animationDelay, setAnimationDelay] = useState(0); // State for animation delay

  useEffect(() => {
    cart.forEach((item) => {
      if (item.name === props.res.name) setAdded(true);
    });

    // Set a staggered animation delay for the card based on its index
    const delay = props.index * 70; // Assuming props.index is passed
    setAnimationDelay(delay);
  }, [cart, props.res.name, props.index]);
  const navigate = useNavigate();

  const naviGate = (path) => {
    window.location.href = path; // This will reload the page
  }

  return (
    <div className="product-container" onClick={() => naviGate(`/product?sku=` +props.res.key)}>
      <div 
        className="product-card" 
        style={{ animationDelay: `${animationDelay}ms`, opacity: 0 }} // Apply animation delay
      >
        {/* Canvas-like frame around the image */}
        <div className="image-frame">
          <img className="product-image" src={props.res.url} alt={props.res.name} />
        </div>
        <h2 className="product-name">{props.res.name}</h2>
        <h4 className="product-price">₹ {props.res.price['Small (12inch*18inch)']}</h4>
      </div>
    </div>
  );
}
