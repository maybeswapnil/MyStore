import { useSelector } from "react-redux";
import { selectCart } from "../features/userSlice";
import './Checkout.css'
import CheckoutDiv from "./CheckoutDiv";
import CheckoutForm from "./CheckoutForm";
import YourCart from "./YourCart";

export default function Checkout() {
  const cart = useSelector(selectCart)

  return (
    <div className="checkout">
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
            <h4><a id='underlined'>Continue Shopping</a></h4>
        </div>
      </div>
        <div className="cart-grid">
          
          {cart.map((res) => {return(<YourCart res={res} from={'checkout'}/>)})}

          </div>
        </div>
      </div>
    </div>
  );
}
  