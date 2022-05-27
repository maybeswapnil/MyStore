import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart, selectUser } from "../features/userSlice";
import { useEffect, useState } from "react";
import Product from "./Product";
import './Cart.css'
import YourCart from "./YourCart";
import InformationPopup from "./InformationPopup";

export default function Cart() {
  const navigate = useNavigate()
  const cart = useSelector(selectCart)
  const user = useSelector(selectUser)
  const [view, setView] = useState(false)

  function viewAdded() {
    setView(true);
    setTimeout(() => setView(false), 1000)
  }
  const [price, setPrice] = useState(0)

  useEffect(() => {
        var sum = 0;
        cart.map((r, c) => sum+=r.price[r.size]*r.quantity)
        setPrice(sum)
  }, [cart])

  return (
    <div className="cart">
        {view?<InformationPopup value='Added to cart'/>:null}

        {cart.length>0?<div className="cart-product-flex" id='bottom-border'>
        <div>
          <h1 style={{fontSize:'50px'}}>Your Cart</h1>
        </div>
        <div className="your-cart-product-grid-main" >
        </div>
        <div className="your-cart-product-grid-main" id='your-cart-price-header'>
            <h4><a id='underlined' onClick={() => navigate('/collection')}>Continue Shopping</a></h4>
        </div>
      </div>:null}
      <div className="cart-grid">
        {cart.map((res) => {return(<YourCart res={res} from={'cart'} view={viewAdded}/>)})}
      </div>
      {cart.length>0?<div className="cart-product-flex" >
        <div>
          <h1 style={{fontSize:'50px'}}></h1>
        </div>
        <div className="your-cart-product-grid-main" >
        </div>
        <div className="your-cart-product-grid-main" id='your-cart-price' style={{textAlign: 'right'}}>
            <h2><span id='bolder'>Subtotal</span> ${price}.00 USD</h2>
            <p>Taxes and shipping <a id='underlined'>calculated</a> at checkout</p>
            <button className="button-13" style={{marginLeft: '0px'}} id='submit-button' role="button" onClick={() => navigate('/checkout')}>Checkout</button>
            <br/>
            <button className="button-13" style={{marginLeft: '0px', marginTop: '10px', backgroundColor: 'black'}} id='submit-button' role="button" >Google pay</button>
        </div>
      </div>:null}
      <br/>
      <br/><br/>
      <br/>

      <div className="cart-form">
      {!cart.length>0?<div>
         <h1 id='cart-empty' style={{height: '20px'}}>Your cart is empty</h1>
        </div>:<h1></h1>}
        {!cart.length>0?<div className="cart-buttons">
            <button className="button-13 cart-header" style={{height: '60px', fontSize: '20px', width: '230px'}} onClick={() => navigate('/collection')}>Continue Shopping</button>
        </div>:null}
        {!user?<div style={{height: '50px'}}>
          {cart?<h6>Have an account?</h6>:<h1></h1>}
        </div>:null}
        <div className="cart-buttons">
            {!user?<button style={{marginTop: '0vmin'}} className="button-13 cart-header" onClick={() => navigate('/account/user')}>Login to order</button>:null}
        </div>
      </div>
    </div>
  );
}
  