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
          alt="Swapnil Sharma Print Company"
          className="navbar-logo"
        />
        <span className='right-navbar-text' onClick={() => window.open('https://www.instagram.com/hellochemo', '_blank')}>
          <img width="30" height="30" src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagram-new--v1" />
        </span>
        {/* Conditionally show Product or Collection adjacent to the logo */}
      </h1>

      <div className='right-navbar'>
        {/* Cart Link with Item Count */}
        {!view && (
          <span className='right-navbar-text' onClick={() => navigate('/checkout')}>
            <img width="30" height="30" src="https://img.icons8.com/emoji/48/shopping-cart-emoji.png" alt="shopping-cart-emoji" />
          </span>
        )}
      </div>
    </div>
  );
}
