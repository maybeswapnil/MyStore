import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart, selectUser } from "../features/userSlice";
import { useEffect } from "react";
import Product from "./Product";

export default function Cart() {
  const navigate = useNavigate()
  const cart = useSelector(selectCart)
  const user = useSelector(selectUser)

  useEffect(() => {
        console.log(cart)
  }, [])
  return (
    <div className="cart">
      <h1>Cart</h1>
      <div className="cart-body">
      {cart.map((res) => {return(<Product res={res} from={'cart'}/>)})}
      </div>
      <button onClick={() => navigate('/collection')}>Collection</button>
      {!user?<button onClick={() => navigate('/account/user')}>Login to order</button>:<button onClick={() => navigate('/checkout')}>Check Out</button>}
    </div>
  );
}
  