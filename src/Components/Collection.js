import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCart } from "../features/userSlice";
import './Collection.css'
import Product from "./Product";
const image = [
    {
        name: 'Cassett In the Sky',
        url: 'https://images.unsplash.com/photo-1588417446723-884e75a48432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
        description: 'Front-end for project-specific portals. The Application was made using ReactJS to extract data from server logs and display it in readable form for analysis. Developed login interface along with backend architecture using Express, it allows storing user activity in MySQL database. Worked on various REST APIs and have an understanding of various headers used. Used UNIX to monitor the server logs for API requests made.',
        smallurl: 'https://i.imgur.com/MOuVb5C.jpg',
        price: {
            'Small (12inch*18inch)': 20,
            'Medium (24inch*36inch)': 25,
            'Large (40inch*60inch)': 30
        },
        size: 'Small (12inch*18inch)',
        quantity: 1
    },
    {
        name: 'Greany Leaf',
        url: 'https://images.unsplash.com/photo-1588417446123-e7202e88f934?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=308&q=80',
        description: 'Front-end for project-specific portals. The Application was made using ReactJS to extract data from server logs and display it in readable form for analysis. Developed login interface along with backend architecture using Express, it allows storing user activity in MySQL database. Worked on various REST APIs and have an understanding of various headers used. Used UNIX to monitor the server logs for API requests made.',
        smallurl: 'https://i.imgur.com/cFwWwUy.jpg',
        price: {
            'Small (12inch*18inch)': 20,
            'Medium (24inch*36inch)': 25,
            'Large (40inch*60inch)': 30
        },
        size: 'Small (12inch*18inch)',
        quantity: 1
    },
    {
        name: 'Blue Cassett',
        url: 'https://images.unsplash.com/photo-1588417321386-fc6426526b64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
        description: 'Front-end for project-specific portals. The Application was made using ReactJS to extract data from server logs and display it in readable form for analysis. Developed login interface along with backend architecture using Express, it allows storing user activity in MySQL database. Worked on various REST APIs and have an understanding of various headers used. Used UNIX to monitor the server logs for API requests made.',
        smallurl: 'https://i.imgur.com/X9gqYOh.jpg',
        price: {
            'Small (12inch*18inch)': 20,
            'Medium (24inch*36inch)': 25,
            'Large (40inch*60inch)': 30
        },
        size: 'Small (12inch*18inch)',
        quantity: 1
    },
    {
        name: 'Contrasty Leaf',
        url: 'https://images.unsplash.com/photo-1588417221066-8b8184004cab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
        description: 'Front-end for project-specific portals. The Application was made using ReactJS to extract data from server logs and display it in readable form for analysis. Developed login interface along with backend architecture using Express, it allows storing user activity in MySQL database. Worked on various REST APIs and have an understanding of various headers used. Used UNIX to monitor the server logs for API requests made.',
        smallurl: 'https://i.imgur.com/Qlbwbib.jpg',
        price: {
            'Small (12inch*18inch)': 20,
            'Medium (24inch*36inch)': 25,
            'Large (40inch*60inch)': 30
        },
        size: 'Small (12inch*18inch)',
        quantity: 1
    },
    {
        name: 'Pretty White Duck',
        url: 'https://images.unsplash.com/photo-1588417220543-160f591512cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
        description: 'Front-end for project-specific portals. The Application was made using ReactJS to extract data from server logs and display it in readable form for analysis. Developed login interface along with backend architecture using Express, it allows storing user activity in MySQL database. Worked on various REST APIs and have an understanding of various headers used. Used UNIX to monitor the server logs for API requests made.',
        smallurl: 'https://i.imgur.com/yihklXO.jpg',
        price: {
            'Small (12inch*18inch)': 20,
            'Medium (24inch*36inch)': 25,
            'Large (40inch*60inch)': 30
        },
        size: 'Small (12inch*18inch)',
        quantity: 1
    },
    {
        name: 'Orange Container',
        url: 'https://images.unsplash.com/photo-1588417099597-fb0b248d6c35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
        description: 'Front-end for project-specific portals. The Application was made using ReactJS to extract data from server logs and display it in readable form for analysis. Developed login interface along with backend architecture using Express, it allows storing user activity in MySQL database. Worked on various REST APIs and have an understanding of various headers used. Used UNIX to monitor the server logs for API requests made.',
        smallurl: 'https://i.imgur.com/zWry6uz.jpg',
        price: {
            'Small (12inch*18inch)': 20,
            'Medium (24inch*36inch)': 25,
            'Large (40inch*60inch)': 30
        },
        size: 'Small (12inch*18inch)',
        quantity: 1
    }	
]
export default function Collection() {
  const cart = useSelector(selectCart)

  return (
    <div className="cart">
        <div className="cart-product-flex" id='bottom-border'>
        <div>
          <h1 style={{fontSize:'50px'}}>Collection</h1>
        </div>
        <div className="your-cart-product-grid-main" >
        </div>
        <div className="your-cart-product-grid-main" id='your-cart-price-header'>
            {/* <h4><a id='underlined'>Continue Shopping</a></h4> */}
        </div>
      </div>
      <div className="cart-grid">
          {image.map((res) => {
              return(
                <Product res={res} from={'collection'}/>
              )
          })}
      </div>
      <br/>
      <br/>
    </div>
  );
}
  