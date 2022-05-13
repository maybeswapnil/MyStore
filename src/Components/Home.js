import { useNavigate } from "react-router-dom";
import './Home.css'
export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="home">
      <div className="home-flex">
        <div className="home-colored-box">
          <h1>My planet friendly Collection</h1>
          <p>#LiveEpic also means to live responsibly. Give shape to your epic moments with our new sustainable clothing.</p>
          <br/>
          <button style={{marginTop: '0vmin'}} className="button-13 cart-header" onClick={() => navigate('/collection')}>Shop Now</button>
        </div>
        <div className="home-colored-image">
          <img className="home-colored-image" src='https://images.pexels.com/photos/10865105/pexels-photo-10865105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        </div>
      </div>
      <div className="home-flex">
        <div className="home-colored-box">
          
        </div>
        <div className="home-colored-image">
          
        </div>
      </div>
    </div>
  );
}
  