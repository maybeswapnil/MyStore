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
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="home-flex-two">
        <div className="home-icons">
            <img src="https://img.icons8.com/wired/64/000000/delivery.png"/>
            <h2>Shipping & Delivery</h2>
            <p className="para-description">Chipoichipoi!! Free shipping on orders over 100$ (within USA).</p>
        </div>
        <div className="home-icons">
            <img src="https://img.icons8.com/external-outline-juicy-fish/60/000000/external-damaged-cyber-crime-outline-outline-juicy-fish.png"/>
            <h2>Damaged item?</h2>
            <p className="para-description">No worries! Contact our customer support team and we'll make it right</p>
        </div>
        <div className="home-icons">
            <img src="https://img.icons8.com/wired/64/000000/wrong-pincode.png"/>
            <h2>Made the wrong order?</h2>
            <p className="para-description">Write us ASAP! We can correct your address/size in the first 24 hours :)</p>
        </div>
      </div>
    </div>
  );
}
  