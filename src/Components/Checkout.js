import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCart } from "../features/userSlice";
import './Checkout.css'
import CheckoutDiv from "./CheckoutDiv";
import CheckoutForm from "./CheckoutForm";
import PaymentStatus from "./PaymentStatus";
import YourCart from "./YourCart";

export default function Checkout() {
  const cart = useSelector(selectCart)
  const [price, setPrice] = useState(0)
  const navigate = useNavigate()
  const [view, setView] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
        var url = window.location.href
        if(url.includes('?')) {
          var string = url.split('?')[1];
          setView(true)
          setTimeout(() => {
            setView(false)
            navigate('/collection')
          }, 3000)
          setMessage(string)
        }
        var sum = 0;
        cart.map((r, c) => sum+=r.price[r.size]*r.quantity)
        setPrice(sum)
  }, [cart])

  return (
    <div className="checkout">
      {view?<PaymentStatus view={setView} message={message} />:null}
      <div className="checkout-payment">
        <CheckoutForm />
      </div>
      <div className="checkout-cart">
        <div className="cart" style={{marginTop: '0px'}}>
        <div className="cart-product-flex" id='bottom-border'>
        <div>
          <h1 style={{fontSize:'50px'}}>Your Cart</h1>
        </div>
        <div className="your-cart-product-grid-main" >
        </div>
        <div className="your-cart-product-grid-main" id='your-cart-price-header'>
            <h4><a id='underlined' onClick={() => navigate('/collection')}>Continue Shopping</a></h4>
        </div>
      </div>
        <div className="cart-grid">
          
          {cart.map((res) => {return(<YourCart res={res} from={'checkout'}/>)})}

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
            </div>
      </div>:null}
      <br/>
      <br/>
      <br/>
        </div>
      </div>
    </div>
  );
}
  