import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart, selectUser } from "../features/userSlice";
import { useEffect } from "react";
import Product from "./Product";
import './Cart.css'

export default function Cart() {
  const navigate = useNavigate()
  const cart = useSelector(selectCart)
  const user = useSelector(selectUser)

  useEffect(() => {
        console.log(cart)
  }, [])
  return (
    <div className="collection">
      <div className="collection-grid">
        {cart.map((res) => {return(<Product res={res} from={'cart'}/>)})}
      </div>
      <div className="cart-form">
      {!cart.length>0?<div>
         <h1 style={{height: '20px'}}>Your cart is empty</h1>
        </div>:<h1></h1>}
        <div className="cart-buttons">
            <button className="button-13 cart-header" style={{height: '60px', fontSize: '20px', width: '230px'}} onClick={() => navigate('/collection')}>Continue Shopping</button>
           
        </div>
        {!user?<div style={{height: '50px'}}>
          {cart?<h6>Have an account?</h6>:<h1></h1>}
        </div>:null}
        <div className="cart-buttons">
           
            {!user?<button style={{marginTop: '0vmin'}} className="button-13 cart-header" onClick={() => navigate('/account/user')}>Login to order</button>:<button className="button-13" onClick={() => navigate('/checkout')}>Check Out</button>}
        </div>
      </div>
    </div>
  );
}
  