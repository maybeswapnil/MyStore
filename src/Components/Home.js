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
          <h1>My planet friendly Collection</h1>
          <p>#LiveEpic also means to live responsibly. Give shape to your epic moments with our new sustainable canvas prints.</p>
          <br/>
          <button style={{marginTop: '0vmin'}} className="button-13 cart-header" onClick={() => navigate('/collection')}>Shop Now</button>
        </div>
        <div className="home-colored-image">
          <img className="home-colored-image" src='https://images.pexels.com/photos/10865105/pexels-photo-10865105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        </div>
      </div>
      <div className="home-description-two">
          <div>
            <h1 id='description-header-two'>Water-based inks</h1>
            <h3 id='description-para-two'>We are about partnering with sustainable suppliers in order to provide you with ethically produced, sustainably made custom apparels made from ecofriendly materials like organic cotton and hemp.</h3>     
          </div>
          <div className="home-description-image">
            <img src='https://cdn.shopify.com/s/files/1/0631/4934/2952/files/close-up-silk-screen-printing-ink_750x.jpg?v=1649703517'/>
          </div>
      </div>
      <div className="home-description">
            <h1 id='description-header'>Eco-friendly canvas prints</h1>
            <h3 id='description-para'>We are about partnering with sustainable suppliers in order to provide you with ethically produced, sustainably made custom apparels made from ecofriendly materials like organic cotton and hemp.</h3>
            <button style={{marginTop: '0vmin', marginLeft: 'auto', marginRight: 'auto'}} className="button-13 cart-header" onClick={() => navigate('/collection')}>Shop Now</button>
      </div>
      
      <br/>
      <br/>
      <div className="home-flex-two">
        <div className="home-icons">
            <img className="home-icons-image" src="https://img.icons8.com/wired/64/000000/delivery.png"/>
            <h2>Shipping & Delivery</h2>
            <p className="para-description">Chipoichipoi!! Free shipping on orders over 100$ (within USA).</p>
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
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      {/* <div className="home-collection" style={{width: '100%', marginTop: '0px', marginBottom: '-70px'}}>
      <div className="home-collection-grid">
        <div>
          <div className='home-image1'>
              <img  id='box1' src={imageTwo[0].url} />
          </div>
          <div className='home-image3'>
              <img  id='box3' src={imageTwo[2].url} />
          </div>
        </div>
        <div>
          <div className='home-image1'>
              <img  id='box1' src={image[0].url} />
          </div>
          <div className='home-image3'>
              <img  id='box3' src={image[1].url} />
          </div>
        </div>
        <div className='home-image2'>
            <img  id='box2' src={imageTwo[1].url} />
        </div>
        
      </div>
      </div> */}
    </div>
  );
}
  