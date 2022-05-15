
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

  const addToCart = () => {
    var cart = JSON.parse(localStorage.getItem('cart'))||[]
    cart.push(props.res)
    localStorage.setItem('cart', JSON.stringify(cart))
    dispatch(addCart(props.res))
    console.log(cart)
  }

  const RemoveFromCart = () => {
    var cart = JSON.parse(localStorage.getItem('cart'))||[]
    for(var j = 0;j<cart.length;j++) {
        if(cart[j].name===props.res.name) cart.splice(j, 1)
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    dispatch(removeCart(props.res))
    console.log(cart)
  }
  return (
    <div className="your-cart-product" >
      <div className="your-cart-product-flex" >
        <div style={{borderBottom: '2px solid black'}}>
          <img className="your-cart-cart-image" src={props.res.smallurl} />
        </div>
        <div className="your-cart-product-grid-main">
            <h1 style={{borderBottom: '2px solid black'}} className="your-cart-cart-product-header" >{props.res.name}</h1>
            <h4>$20</h4>
            <h4>Size: S</h4>
            <img src="https://img.icons8.com/wired/64/000000/filled-trash.png" id='delete-button' onClick={() => RemoveFromCart()}/>
        </div>
        <div className="your-cart-product-grid-main" id='your-cart-price'  >
            <h4>${props.res.price}.00</h4>
        </div>
        

      {view?<ProductPage res={props.res} view={setView} from={props.from}/>:<h1></h1>}

      </div>

    </div>
  );
}
  