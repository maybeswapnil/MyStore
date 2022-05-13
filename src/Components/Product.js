
import { useEffect, useState } from "react";
import ProductPage from './ProductPage'
import './Product.css'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart, selectUser } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { addCart, removeCart } from "../features/userSlice";
export default function Product(props) {
  const [view, setView] = useState(false)
  const navigate = useNavigate()
  const cart = useSelector(selectCart)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  const addToCart = () => {
    var cart = JSON.parse(localStorage.getItem('cart'))||[]
    cart.push(props.res)
    localStorage.setItem('cart', JSON.stringify(cart))
    dispatch(addCart(props.res))
    console.log(cart)
  }

  const RemoveFromCart = () => {
    var cart = JSON.parse(localStorage.getItem('cart'))||[]
    for(var j = 0;j<cart.length;j++) {
        if(cart[j].name===props.res.name) cart.splice(j, 1)
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    dispatch(removeCart(props.res))
    console.log(cart)
  }
  return (
    <div className="product" >
      <div className="product-flex" >
        <div>
          <img className="cart-image" src={props.res.url} />
        </div>
        <div className="product-grid" onClick={() => setView(true)}>
            <h1 className="cart-product-header" >{props.res.name}</h1>
            <p>{props.res.description}</p>
        </div>
        {props.from==='cart'?<a className="close" style={{fontSize: '40px', zIndex: '15', height: '200%'}} onClick={() => RemoveFromCart()}>&times;</a>:null}

      {view?<ProductPage res={props.res} view={setView} from={props.from}/>:<h1></h1>}

      </div>

    </div>
  );
}
  