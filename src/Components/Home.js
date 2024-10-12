import { useNavigate } from "react-router-dom";
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Video Background */}
      <video className="home-video-background" autoPlay loop muted>
        <source src="https://videos.pexels.com/video-files/2763004/2763004-hd_1922_1080_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Home Content */}
      <div className="home-flex">
        <div className="home-colored-box">
          <h1>Your Walls Deserve More Than Just Color</h1>
          <p>Each photograph I capture is a moment of discovery, now available as high-quality prints for your home or office. From vibrant cityscapes to serene nature scenes, every image reflects my passion for storytelling through the lens. Find the perfect print to add character and inspiration to your space.</p>
          <br />
          <button style={{ marginTop: '0vmin' }} className="button-13 cart-header" onClick={() => navigate('/collection')}>
            Shop Now
          </button>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="home-flex-two">
        <div className="home-icons">
            <img className="home-icons-image" src="https://img.icons8.com/wired/64/000000/delivery.png"/>
            <h2>Shipping & Delivery</h2>
            <p className="para-description">Chipoichipoi!! Free shipping on orders over ₹ 5000 (within India).</p>
        </div>
        <div className="home-icons" >
            <img className="home-icons-image" src="https://img.icons8.com/external-outline-juicy-fish/60/000000/external-damaged-cyber-crime-outline-outline-juicy-fish.png"/>
            <h2>Damaged item?</h2>
            <p className="para-description">No worries! Contact our customer support team and we'll make it right</p>
        </div>
        <div className="home-icons">
            <img className="home-icons-image" src="https://img.icons8.com/wired/64/000000/wrong-pincode.png"/>
            <h2>Made the wrong order?</h2>
            <p className="para-description">Write us ASAP! We can correct your address/size in the first 24 hours :)</p>
        </div>
      </div>
    </div>
  );
}
