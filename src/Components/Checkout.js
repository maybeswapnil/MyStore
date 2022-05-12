import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCart } from "../features/userSlice";
import './Checkout.css'
import Product from "./Product";

export default function Checkout() {
  const cart = useSelector(selectCart)

  return (
    <div className="checkout">
      <div className="checkout-payment">
        <h1>Checkout</h1>
      </div>
      <div className="checkout-cart">
        <h1>Cart</h1>
       {cart.map((res) => {return(<Product res={res} from={'checkout'}/>)})}
      </div>
    </div>
  );
}
  