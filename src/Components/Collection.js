import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCart } from "../features/userSlice";
import './Collection.css'
import InformationPopup from "./InformationPopup";
import PaymentStatus from "./PaymentStatus";
import Product from "./Product";
const image = [
    {
        name: 'Walking Monk',
        url: 'https://images.pexels.com/photos/18347410/pexels-photo-18347410/free-photo-of-pedestrians-walking-along-a-decorated-street.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
        smallurl: 'https://i.imgur.com/MOuVb5C.jpg',
        price: {
            'Small (12inch*18inch)': 2000,
            'Medium (24inch*36inch)': 2500,
            'Large (40inch*60inch)': 3000
        },
        size: 'Small (12inch*18inch)',
        quantity: 1
    },
    {
        name: 'Ghuiyan',
        url: 'https://images.pexels.com/photos/3039072/pexels-photo-3039072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        smallurl: 'https://i.imgur.com/MOuVb5C.jpg',
        price: {
            'Small (12inch*18inch)': 2000,
            'Medium (24inch*36inch)': 2500,
            'Large (40inch*60inch)': 3000
        },
        size: 'Small (12inch*18inch)',
        quantity: 1
    },
    {
        name: 'Ladakh Chal',
        url: 'https://images.pexels.com/photos/17615049/pexels-photo-17615049/free-photo-of-scenery-of-barren-mountains.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
        smallurl: 'https://i.imgur.com/MOuVb5C.jpg',
        price: {
            'Small (12inch*18inch)': 2000,
            'Medium (24inch*36inch)': 2500,
            'Large (40inch*60inch)': 3000
        },
        size: 'Small (12inch*18inch)',
        quantity: 1
    },
    {
        name: 'Bangalore',
        url: 'https://images.pexels.com/photos/18466770/pexels-photo-18466770/free-photo-of-crowns-of-trees-seen-from-below.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
        smallurl: 'https://i.imgur.com/MOuVb5C.jpg',
        price: {
            'Small (12inch*18inch)': 2000,
            'Medium (24inch*36inch)': 2500,
            'Large (40inch*60inch)': 3000
        },
        size: 'Small (12inch*18inch)',
        quantity: 1
    },
    {
        name: 'Banaras',
        url: 'https://images.pexels.com/photos/27556831/pexels-photo-27556831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        smallurl: 'https://i.imgur.com/MOuVb5C.jpg',
        price: {
            'Small (12inch*18inch)': 2000,
            'Medium (24inch*36inch)': 2500,
            'Large (40inch*60inch)': 3000
        },
        size: 'Small (12inch*18inch)',
        quantity: 1
    },
    {
        name: 'Corupted',
        url: 'https://images.pexels.com/photos/28736029/pexels-photo-28736029/free-photo-of-majestic-mountain-landscape-with-verdant-valleys.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
        smallurl: 'https://i.imgur.com/MOuVb5C.jpg',
        price: {
            'Small (12inch*18inch)': 2000,
            'Medium (24inch*36inch)': 2500,
            'Large (40inch*60inch)': 3000
        },
        size: 'Small (12inch*18inch)',
        quantity: 1
    },
    {
        name: 'Clevage',
        url: 'https://images.pexels.com/photos/28737029/pexels-photo-28737029/free-photo-of-breathtaking-mountain-valley-landscape-view.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
        smallurl: 'https://i.imgur.com/MOuVb5C.jpg',
        price: {
            'Small (12inch*18inch)': 2000,
            'Medium (24inch*36inch)': 2500,
            'Large (40inch*60inch)': 3000
        },
        size: 'Small (12inch*18inch)',
        quantity: 1
    },
    {
        name: 'Cassett',
        url: 'https://images.pexels.com/photos/1745936/pexels-photo-1745936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        smallurl: 'https://i.imgur.com/X9gqYOh.jpg',
        price: {
            'Small (12inch*18inch)': 2000,
            'Medium (24inch*36inch)': 2500,
            'Large (40inch*60inch)': 3000
        },
        size: 'Small (12inch*18inch)',
        quantity: 1
    },
    {
        name: 'Contrasty Leaf',
        url: 'https://images.unsplash.com/photo-1588417221066-8b8184004cab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
        smallurl: 'https://i.imgur.com/Qlbwbib.jpg',
        price: {
            'Small (12inch*18inch)': 2000,
            'Medium (24inch*36inch)': 2500,
            'Large (40inch*60inch)': 3000
        },
        size: 'Small (12inch*18inch)',
        quantity: 1
    },
    {
        name: 'Cassett In the Sky',
        url: 'https://images.pexels.com/photos/6064637/pexels-photo-6064637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        smallurl: 'https://i.imgur.com/MOuVb5C.jpg',
        price: {
            'Small (12inch*18inch)': 2000,
            'Medium (24inch*36inch)': 2500,
            'Large (40inch*60inch)': 3000
        },
        size: 'Small (12inch*18inch)',
        quantity: 1
    },
    {
        name: 'Pretty White Duck',
        url: 'https://images.unsplash.com/photo-1588417220543-160f591512cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
        smallurl: 'https://i.imgur.com/yihklXO.jpg',
        price: {
            'Small (12inch*18inch)': 2000,
            'Medium (24inch*36inch)': 2500,
            'Large (40inch*60inch)': 3000
        },
        size: 'Small (12inch*18inch)',
        quantity: 1
    },
    {
        name: 'Flower',
        url: 'https://images.pexels.com/photos/1785271/pexels-photo-1785271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        smallurl: 'https://i.imgur.com/zWry6uz.jpg',
        price: {
            'Small (12inch*18inch)': 2000,
            'Medium (24inch*36inch)': 2500,
            'Large (40inch*60inch)': 3000
        },
        size: 'Small (12inch*18inch)',
        quantity: 1
    }	
]
export default function Collection() {
  const cart = useSelector(selectCart)
  const [view, setView] = useState(false)

  function viewAdded() {
    setView(true);
    setTimeout(() => setView(false), 1000)
  }

  return (
    <div className="cart">
        {view?<InformationPopup value='Added to cart'/>:null}
       
      <div className="col-grid">
          {image.map((res, index) => {
              return(
                <Product res={res} m='true' from={'collection'} index={index} view={viewAdded}/>
              )
          })}
      </div>
      <br/>
      <br/>
      <br/>
    </div>
  );
}
  