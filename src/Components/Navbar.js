import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import mainLogo from '../Resources/main-logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, selectCart, selectUser } from '../features/userSlice';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import axios from 'axios';

export default function Navbar() {
  const navigate = useNavigate();
  var cart = useSelector(selectCart)
  var user = useSelector(selectUser)
  const [view, setView] = useState(false)
  const [viewTwo, setViewTwo] = useState(false)
  const location = useLocation();
  const dispatch = useDispatch()

  useEffect(() => {
      
      var url = window.location.href
      if(url.includes('?')) {
        var string = url.split('?')[1];
        var data = JSON.stringify({
          "key": string.split(':')[1]
        });
        
        var config = {
          method: 'post',
          url: 'http://my-store-apis.herokuapp.com/mystore/check-session-key',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          if(string.split(':')[0]==='paymentsuccess') {
            dispatch(emptyCart())
          } 
          navigate('/checkout?'+string.split(':')[0])
        })
        .catch(function (error) {
          console.log('stop spamming');
        });
      }
      if(cart.length===0) {
        setView(true)
      } else {
        setView(false)
      }
      if(localStorage.pathname==='/cart') {
        setViewTwo(true)
      } else {
        setViewTwo(false)
      }
  }, [cart])
 
  return (
    <div className="navbar">
        <h1><img onClick={() => navigate('/')} src={mainLogo} style={{width: '120px'}} id="headline"/></h1>
        <div className='right-navbar'>
          {user==null?<img className='right-navbar-icon' src='https://img.icons8.com/dotty/50/000000/user.png' onClick={() => navigate('/account/user')}/>:<img className='right-navbar-icon' src='https://i.imgur.com/IGXS5UB.png' onClick={() => navigate('/account/user')}/>}
          {view?<img className='right-navbar-icon' src='https://img.icons8.com/dotty/50/000000/favorite-cart.png' onClick={() => navigate('/cart')}/>:<img className='right-navbar-icon' src='https://i.imgur.com/ZxmvIhX.png' onClick={() => navigate('/cart')}/>}
        </div>
    </div>
  );
}
