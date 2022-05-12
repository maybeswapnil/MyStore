import { useNavigate } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
  const navigate = useNavigate();
 

  return (
    <div className="navbar">
        <h1><a onClick={() => navigate('/')}>MyStore</a></h1>
        <div>
            <button onClick={() => navigate('/account/user')}>User</button>
            <button onClick={() => navigate('/cart')}>Cart</button>
        </div>
        
    </div>
  );
}
