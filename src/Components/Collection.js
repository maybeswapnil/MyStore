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
        name: 'Cassett In the Sky',
        url: 'https://images.unsplash.com/photo-1588417446723-884e75a48432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
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
  const [view, setView] = useState(false)

  function viewAdded() {
    setView(true);
    setTimeout(() => setView(false), 1000)
    console.log('askdkasdkaskdkas')
  }

  return (
    <div className="cart">
        {view?<InformationPopup value='Added to cart'/>:null}
        <div className="cart-product-flex collection-border" id='bottom-border'>
        <div>
          <h1 style={{fontSize:'50px'}}>Collection</h1>
        </div>
      </div>
      <div className="col-grid">
          {image.map((res) => {
              return(
                <Product res={res} m='true' from={'collection'} view={viewAdded}/>
              )
          })}
      </div>
      <br/>
      <br/>
      <br/>
      <div className="cart-product-flex collection-border" id='top-border'>
        <div>
          <h3 style={{fontSize:'15px'}}>We are about partnering with sustainable suppliers in order to provide you with ethically produced, sustainably made custom apparels made from ecofriendly materials like organic cotton and hemp.</h3>
        </div>
      </div>
    </div>
  );
}
  