import { useSelector } from "react-redux";
import { selectCart } from "../features/userSlice";
import './Checkout.css'
import CheckoutDiv from "./CheckoutDiv";
import CheckoutForm from "./CheckoutForm";

export default function Checkout() {
  const cart = useSelector(selectCart)

  return (
    <div className="checkout">
      <div className="checkout-payment">
        <CheckoutForm />
      </div>
      <div className="checkout-cart">
      <div className="product-grid0cart-header" >
            <h1 className="cart-product-header">Cart</h1>
        </div>
       {cart.map((res) => {return(<CheckoutDiv res={res} from={'checkout'}/>)})}
      </div>
    </div>
  );
}
  