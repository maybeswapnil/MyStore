import { useState, useRef } from 'react'
import './ImageForm.scss';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCart, removeCart, selectCart, selectUser } from '../features/userSlice';
function ImageForm(props) {

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('Small (12inch*18inch)');
  const [comments, setComments] = useState('');
  const prices = props.res.price;
  const [objects, setObject] = useState({
    quantity: 1,
    size: 'Small (12inch*18inch)',
    comments: ''
  });

  const navigate = useNavigate()
  const cart = useSelector(selectCart)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  const addToCart = (obj) => {
    var cart = JSON.parse(localStorage.getItem('cart')) || []
    var local = { ...props.res };
    local.quantity = obj.quantity;
    local.size = obj.size;
    local.comments = obj.comments;
    cart.push(local)
    localStorage.setItem('cart', JSON.stringify(cart))
    dispatch(addCart(local))
  }

  const RemoveFromCart = () => {
    var cart = JSON.parse(localStorage.getItem('cart')) || []
    for (var j = 0; j < cart.length; j++) {
      if (cart[j].name === props.res.name) cart.splice(j, 1)
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    dispatch(removeCart(props.res))
  }

  const l = useRef(null)
  const m = useRef(null)
  const n = useRef(null)
  const o = useRef(null)

  function clearFunction() {
    l.current.value = ''
    m.current.value = ''
    n.current.value = ''
    o.current.value = ''
  }

  function submit() {
    var obj = {
      quantity: quantity,
      size: size,
      comments: comments
    }

    addToCart(obj)
  }

  const handleSizeChange = (size) => {
    setSize(size);
  };

  return (
    <div className="main-form3" id='margin-left'>
      <br />
      <div className="form-group2" id='margin-left'>
        <div className="product-grid">
          <h1 className="cart-product-header" >{props.res.name}</h1>
          <br/>
          <h3 className="cart-product-desc" >Shot on {props.res.camera}</h3>
          <h3 className="cart-product-desc" >Ships in  {props.res.shipping_time}</h3>
        </div>
      </div>
      <div>
        <div style={{ display: 'flex', gap: '10px' }}>
          {Object.keys(prices).map((size) => (
            <button class="button-6" role="button"
              key={size}
              onClick={() => handleSizeChange(size)}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Show the selected size and its price */}
        <div style={{ marginTop: '20px' }}>
          <h5>{size}</h5>
          <h2>₹ {prices[size]}</h2>
        </div>
      </div>
      <div className="content-submit">
        <button className="button-13" style={{ marginLeft: '0px' }} id='submit-button' role="button" onClick={() => { submit(); props.close() }}>Add to Cart</button>
      </div>
      <br />
      <p id='random-sentence' style={{ color: 'black' }}>This lightweight, soft Cactus canvas will fast become your favorite. It's made with our 100% Certified Organic Cotton fabric giving premium feel.   </p>
      <br />
    </div>
  );
}

export default ImageForm;


