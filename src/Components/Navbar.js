import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import mainLogo from '../Resources/main-logo.png'

export default function Navbar() {
  const navigate = useNavigate();
 
  return (
    <div className="navbar">
        <h1><img id='main-logo' onClick={() => navigate('/')} src={mainLogo} style={{width: '120px'}} id="headline"/></h1>
        <div className='right-navbar'>
          <img className='right-navbar-icon' src='https://img.icons8.com/dotty/50/000000/user.png' onClick={() => navigate('/account/user')}/>
          <img className='right-navbar-icon' src='https://img.icons8.com/dotty/50/000000/favorite-cart.png' onClick={() => navigate('/cart')}/>
        </div>
    </div>
  );
}
