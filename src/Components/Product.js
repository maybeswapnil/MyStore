import { useEffect, useState } from "react";
import ProductPage from './ProductPage'
import './YourCart.css'
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

  const [added, setAdded] = useState(false)

  useEffect(() => {
      cart.map((r) => {
        if(r.name === props.res.name) setAdded(true)
      })
  }, [])

  const addToCart = () => {
    setAdded(true)
    var cart = JSON.parse(localStorage.getItem('cart'))||[]
    var local = {...props.res};
    local.id = cart.length+1;
    cart.push(local);
    localStorage.setItem('cart', JSON.stringify(cart))
    dispatch(addCart(local))
    cart.map((r) => {
      if(r.name === props.res.name) setAdded(true)
    })
    setTimeout(() => {
      setAdded(false)
    }, 300)
  }

  const RemoveFromCart = () => {
    var cart = JSON.parse(localStorage.getItem('cart'))||[]
    for(var j = 0;j<cart.length;j++) {
        if(cart[j].name===props.res.name) cart.splice(j, 1)
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    dispatch(removeCart(props.res))
  }
  return (
    <div className="your-cart-product"  id={props.m?'new-grid':null}>
      <div className="your-cart-product-flex" >
        <div style={{borderBottom: '2px solid black'}}>
          <img className="your-cart-cart-image" src={props.res.smallurl} />
        </div>
        <div className="your-cart-product-grid-main">
            <h1 style={{borderBottom: '2px solid black'}} className="your-cart-cart-product-header" onClick={() => setView(true)}>{props.res.name}</h1>
            <h4 id='cart-info-mobile'>$20</h4>
            <h4 id='cart-info-mobile'>Size: <span id='bolder'>{props.res.size}</span></h4>
            {!added?<img src="https://img.icons8.com/wired/204/000000/add--v1.png" id='delete-button' onClick={() => {addToCart(); props.view()}}/>:<img src="https://i.imgur.com/LN8NKHj.png" id='delete-button' onClick={() => {addToCart(); props.view()}}/>}
            {/* "https://img.icons8.com/wired/204/000000/add--v1.png" */}
        </div>
        <div className="your-cart-product-grid-main" id='your-cart-price'  >
            <h4>${props.res.price[props.res.size]}.00</h4>
        </div>
        

      {view?<ProductPage res={props.res} view={setView} from={props.from}/>:<h1></h1>}

      </div>

    </div>
  );
}
  
  