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
      </div>
      <div className="checkout-cart">
       {cart.map((res) => {return(<Product res={res} from={'checkout'}/>)})}
      </div>
    </div>
  );
}
  