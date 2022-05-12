import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart, selectUser } from "../features/userSlice";
import { useEffect } from "react";

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
      {cart.map((r) => {return(<h1>{r.id}</h1>)})}
      </div>
      <button onClick={() => navigate('/collection')}>Collection</button>
      {!user?<button onClick={() => navigate('/account/user')}>Login</button>:null}
    </div>
  );
}
  