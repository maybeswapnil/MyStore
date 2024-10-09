import { useState, useRef } from 'react';
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
  const [addedToCart, setAddedToCart] = useState(false); // State to track if added to cart

  const dispatch = useDispatch();

  const addToCart = (obj) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const local = { ...props.res };
    local.quantity = obj.quantity;
    local.size = obj.size;
    local.comments = obj.comments;

    cartItems.push(local);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    dispatch(addCart(local));

    setAddedToCart(true); // Update the state to indicate that the item has been added

    // Reset the addedToCart state back to false after 2 seconds
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  const removeFromCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    for (let j = 0; j < cartItems.length; j++) {
      if (cartItems[j].name === props.res.name) {
        cartItems.splice(j, 1);
      }
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));
    dispatch(removeCart(props.res));
    setAddedToCart(false); // Reset added to cart state when removed
  };

  const l = useRef(null);
  const m = useRef(null);
  const n = useRef(null);
  const o = useRef(null);

  function clearFunction() {
    l.current.value = '';
    m.current.value = '';
    n.current.value = '';
    o.current.value = '';
  }

  function submit() {
    const obj = {
      quantity: quantity,
      size: size,
      comments: comments
    };

    addToCart(obj);
  }

  const handleSizeChange = (size) => {
    setSize(size);
  };

  return (
    <div className="main-form3" id='margin-left'>
      <br />
      <div className="form-group2" id='margin-left'>
        <div className="product-grid">
          <h1 className="cart-product-header">{props.res.name}</h1>
          <br />
          <h3 className="cart-product-desc">Shot on {props.res.camera}</h3>
          <h3 className="cart-product-desc">Ships in {props.res.shipping_time}</h3>
        </div>
      </div>
      <div>
        <div style={{ display: 'flex', gap: '10px' }}>
          {Object.keys(prices).map((size) => (
            <button className="button-6" role="button"
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
        <button
          className="button-13"
          style={{ 
            marginLeft: '0px', 
            backgroundColor: addedToCart ? '#ccf97e' : '#9e5c8b', // Change color based on addedToCart state
            color: addedToCart ? '#000' : '#f0f0f0' // Optional: change text color
          }}
          id='submit-button' 
          role="button" 
          onClick={() => { submit(); props.close(); }}
        >
          {addedToCart ? 'Added' : 'Add to Cart'} {/* Change button text based on addedToCart state */}
        </button>
      </div>
      <br />
      <p id='random-sentence' style={{ color: 'black' }}>
        This lightweight, soft Cactus canvas will fast become your favorite. It's made with our 100% Certified Organic Cotton fabric giving premium feel.
      </p>
      <br />
    </div>
  );
}

export default ImageForm;
