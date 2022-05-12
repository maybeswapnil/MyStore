import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart, selectUser } from "../features/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart, removeCart } from "../features/userSlice";


//TODO: overlay
export default function ProductPage(props) {
  const navigate = useNavigate()
  const cart = useSelector(selectCart)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
console.log(props.from)
  }, [])

  const addToCart = (e) => {
    e.preventDefault();
    var cart = JSON.parse(localStorage.getItem('cart'))||[]
    cart.push(props.res)
    localStorage.setItem('cart', JSON.stringify(cart))
    dispatch(addCart(props.res))
    console.log(cart)
  }

  const RemoveFromCart = (e) => {
    e.preventDefault();
    var cart = JSON.parse(localStorage.getItem('cart'))||[]
    for(var j = 0;j<cart.length;j++) {
        if(cart[j].name===props.res.name) cart.splice(j, 1)
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    dispatch(removeCart(props.res))
    console.log(cart)
  }

  return (
    <div className="product" onClick={() => props.view()}>
        <h1>{props.res.name}</h1>
        <img src={props.res.name}/>
        <h1>{props.res.description}</h1>
        {props.from!=='cart'?<button value='open' onClick={(e) => addToCart(e)}>Add to Cart</button>:null}
        {props.from=='cart'?<button value='open' onClick={(e) => RemoveFromCart(e)}>Remove</button>:null}
    </div>
  );
}
  