import { useNavigate } from "react-router-dom";
import './Home.css'
import Loading from "./Loading";
import Product from "./Product";
const image = [
  {
      name: 'Cassett In the Sky',
      url: 'https://images.unsplash.com/photo-1588417446723-884e75a48432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
      description: 'Front-end for project-specific portals. The Application was made using ReactJS to extract data from server logs and display it in readable form for analysis. Developed login interface along with backend architecture using Express, it allows storing user activity in MySQL database. Worked on various REST APIs and have an understanding of various headers used. Used UNIX to monitor the server logs for API requests made.'
  },
  {
      name: 'Greany Leaf',
      url: 'https://images.unsplash.com/photo-1588417446123-e7202e88f934?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=308&q=80',
      description: 'Front-end for project-specific portals. The Application was made using ReactJS to extract data from server logs and display it in readable form for analysis. Developed login interface along with backend architecture using Express, it allows storing user activity in MySQL database. Worked on various REST APIs and have an understanding of various headers used. Used UNIX to monitor the server logs for API requests made.'
  }
]

const imageTwo = [
  {
      name: 'Contrasty Leaf',
      url: 'https://images.unsplash.com/photo-1588417221066-8b8184004cab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=707&q=80',
      description: 'Front-end for project-specific portals. The Application was made using ReactJS to extract data from server logs and display it in readable form for analysis. Developed login interface along with backend architecture using Express, it allows storing user activity in MySQL database. Worked on various REST APIs and have an understanding of various headers used. Used UNIX to monitor the server logs for API requests made.'
  },
  {
      name: 'Pretty White Duck',
      url: 'https://images.unsplash.com/photo-1588417220543-160f591512cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=707&q=80',
      description: 'Front-end for project-specific portals. The Application was made using ReactJS to extract data from server logs and display it in readable form for analysis. Developed login interface along with backend architecture using Express, it allows storing user activity in MySQL database. Worked on various REST APIs and have an understanding of various headers used. Used UNIX to monitor the server logs for API requests made.'
  },
  {
      name: 'Very Orange Container',
      url: 'https://images.unsplash.com/photo-1588417099597-fb0b248d6c35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=707&q=80',
      description: 'Front-end for project-specific portals. The Application was made using ReactJS to extract data from server logs and display it in readable form for analysis. Developed login interface along with backend architecture using Express, it allows storing user activity in MySQL database. Worked on various REST APIs and have an understanding of various headers used. Used UNIX to monitor the server logs for API requests made.'
  }	
]
export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="home">
      <div className="home-flex">
        <div className="home-colored-box">
          <h1>Your Walls Deserve More Than Just Color</h1>
          <p>Each photograph I capture is a moment of discovery, now available as high-quality prints for your home or office. From vibrant cityscapes to serene nature scenes, every image reflects my passion for storytelling through the lens. Find the perfect print to add character and inspiration to your space.</p>
          <br/>
          <button style={{marginTop: '0vmin'}} className="button-13 cart-header" onClick={() => navigate('/collection')}>Shop Now</button>
        </div>
        <div className="home-colored-image">
          <img className="home-colored-image" src='https://images.pexels.com/photos/28738431/pexels-photo-28738431/free-photo-of-bustling-street-market-scene-in-manali-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 '/>
        </div>
      </div>
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
  