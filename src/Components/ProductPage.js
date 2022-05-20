import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart, selectUser } from "../features/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart, removeCart } from "../features/userSlice";
import './ProductPage.css'
import ImageForm from "./ImageForm";
//TODO: overlay
export default function ProductPage(props) {
  const navigate = useNavigate()
  const cart = useSelector(selectCart)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  const addToCart = (object) => {
    var cart = JSON.parse(localStorage.getItem('cart'))||[]
    var local = props.res;
    local.quantity = object.quantity;
    local.size = object.size;
    local.comments = object.comments;
    cart.push(local)
    localStorage.setItem('cart', JSON.stringify(cart))
    dispatch(addCart(local))
  }

  const RemoveFromCart = () => {
    var cart = JSON.parse(localStorage.getItem('cart'))||[]
    for(var j = 0;j<cart.length;j++) {
        if(cart[j].name===props.res.name) cart.splice(j, 1)
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    dispatch(removeCart(props.res))
  }

  const main = () => {
    props.view(false)
  }

  return (
    <div id="popup1" className="overlay" >
    <div className="popup">
        <img src={props.res.url} className="popup-image"/>
        <a className="close" onClick={() => main()} >&times;</a>
        <ImageForm close={props.view} res={props.res} addToCart={addToCart} />
    </div>
    </div>
  );
}

  