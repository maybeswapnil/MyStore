import { useNavigate } from "react-router-dom";
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Video Background */}
      <video className="home-video-background" autoPlay loop muted>
        <source src="https://videos.pexels.com/video-files/29098991/12572038_2560_1440_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Home Content */}
      <div className="home-flex">
        <div className="home-colored-box">
          <h1>Your Walls Deserve More Than Just Color</h1>
          <h3>Each photograph I capture is a moment of discovery, now available as high-quality prints for your home or office. From vibrant cityscapes to serene nature scenes, every image reflects my passion for storytelling through the lens. Find the perfect print to add character and inspiration to your space.</h3>
          <br />
          <br />
          <button style={{ marginTop: '0vmin' }} className="button-89 cart-header" onClick={() => navigate('/collection')}>
            Shop Now
          </button>
        </div>
      </div>

      {/* Additional Sections */}
 
    </div>
  );
}
