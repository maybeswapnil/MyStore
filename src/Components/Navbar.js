import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, selectCart, selectUser } from '../features/userSlice';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import instagram from '../Resources/instagram.png'
import { logout } from "../features/userSlice";

export default function Navbar(props) {
  const navigate = useNavigate();
  var cart = useSelector(selectCart)
  var user = useSelector(selectUser)
  const [view, setView] = useState(false)
  const [viewTwo, setViewTwo] = useState(false)
  const location = useLocation();
  const dispatch = useDispatch()

  useEffect(() => {
    if (cart.length === 0) {
      setView(true)
    } else {
      setView(false)
    }
    if (localStorage.pathname === '/cart') {
      setViewTwo(true)
    } else {
      setViewTwo(false)
    }
  }, [cart])

  function navigateNicely() {
    if (user) {
      if (new Date(user.date) - new Date() < -200000) {
        localStorage.setItem('user', null)
        dispatch(logout())
      }
    }
    navigate('/account/user')
  }

  return (
    <div className="navbar">
      <h1 onClick={() => navigate('/')} className="navbar-name"><img src="https://i.imgur.com/xxsj5QF.png"  alt="Swapnil Sharma"  style={{ width: "20%", maxWidth: '100%', height: 'auto' }} /></h1>
      <div className='right-navbar'>
        {!view ? <img className='right-navbar-icon' src='https://img.icons8.com/dotty/50/000000/favorite-cart.png' onClick={() => navigate('/checkout')} /> : null}
        <img className='right-navbar-icon' style={{width: "30px"}} src={instagram} onClick={() => navigate('/checkout')} /> 
      </div>
    </div>
  );
}
