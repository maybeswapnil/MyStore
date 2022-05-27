
import { useEffect, useState } from "react";
import ProductPage from './ProductPage'
import './YourCart.css'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart, selectUser } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { addCart, removeCart } from "../features/userSlice";

export default function YourCart(props) {
  const [view, setView] = useState(false)
  const navigate = useNavigate()
  const cart = useSelector(selectCart)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const [added, setAdded] = useState(false)

  const addToCart = () => {
    var cart = JSON.parse(localStorage.getItem('cart'))||[]
    cart.push(props.res)
    localStorage.setItem('cart', JSON.stringify(cart))
    dispatch(addCart(props.res))
  }

  const RemoveFromCart = () => {
    setAdded(true)
    setTimeout(() =>{
      setAdded(false)
      var cart = JSON.parse(localStorage.getItem('cart'))||[];
      if(cart.length===1) navigate('/cart')
      for(var j = 0;j<cart.length;j++) {
          if(cart[j].name===props.res.name) cart.splice(j, 1)
      }
      localStorage.setItem('cart', JSON.stringify(cart))
      dispatch(removeCart(props.res))
    }, 500)
  }
  return (
    <div className="your-cart-product" >
      <div className="your-cart-product-flex" >
        <div style={!added?{borderBottom: '2px solid black'}:{borderBottom: '2px solid red'}}>
          <img className="your-cart-cart-image" src={props.res.smallurl} />
        </div>
        <div className="your-cart-product-grid-main">
            <h1 style={{borderBottom: '2px solid black'}} className="your-cart-cart-product-header" >{props.res.name}</h1>
            <h4 id='cart-info-mobile'>${props.res.price[props.res.size]} per canvas</h4>
            <h4 id='cart-info-mobile'>Size: {props.res.size}</h4>
            <h4 id='cart-info-mobile'>Quantity: x{props.res.quantity}</h4>
            {!added?<img src="https://img.icons8.com/wired/204/000000/filled-trash.png" id='delete-button' onClick={() => RemoveFromCart()}/>:<img src="https://i.imgur.com/2RoMH1O.png" id='delete-button' onClick={() => RemoveFromCart()}/>}
        </div>
        <div className="your-cart-product-grid-main" id='your-cart-price'  >
            <h4>${props.res.price[props.res.size]*props.res.quantity}.00</h4>
        </div>
        

      {view?<ProductPage res={props.res} view={setView} from={props.from} />:<h1></h1>}

      </div>

    </div>
  );
}
  