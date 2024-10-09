import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart, selectUser } from '../features/userSlice';
import { useEffect, useState } from 'react';
import { logout } from "../features/userSlice";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current path
  const cart = useSelector(selectCart);
  const user = useSelector(selectUser);
  const [view, setView] = useState(false);
  const [viewTwo, setViewTwo] = useState(false);
  const dispatch = useDispatch();
  const cartLength = cart.length;

  useEffect(() => {
    if (cart.length === 0) {
      setView(true);
    } else {
      setView(false);
    }
    if (localStorage.pathname === '/cart') {
      setViewTwo(true);
    } else {
      setViewTwo(false);
    }
  }, [cart]);

  function navigateNicely() {
    if (user) {
      if (new Date(user.date) - new Date() < -200000) {
        localStorage.setItem('user', null);
        dispatch(logout());
      }
    }
    navigate('/account/user');
  }

  // Determine whether to show "Product" or "Collection"
  const pathLabel = location.pathname.includes('/product')
    ? 'Product'
    : location.pathname.includes('/collection')
    ? 'Collection'
    : location.pathname.includes('/checkout')
    ? 'Checkouts'
    : '';

  return (
    <div className="navbar">
      <h1 onClick={() => navigate('/')} className="navbar-name">
        <img
          src="https://i.imgur.com/xxsj5QF.png"
          alt="Swapnil Sharma"
          className="navbar-logo"
        />
        {/* Conditionally show Product or Collection adjacent to the logo */}
        {pathLabel && (
          <span className="navbar-path">
            {pathLabel} {/* This will show "Product" or "Collection" */}
          </span>
        )}
      </h1>

      <div className='right-navbar'>
        {/* Instagram Link */}
        <span className='right-navbar-text' onClick={() => window.open('https://www.instagram.com/hellochemo', '_blank')}>
          Instagram
        </span>

        {/* Cart Link with Item Count */}
        {!view && (
          <span className='right-navbar-text' onClick={() => navigate('/checkout')}>
            Cart {cartLength > 0 ? `(${cartLength})` : ''}
          </span>
        )}
      </div>
    </div>
  );
}
