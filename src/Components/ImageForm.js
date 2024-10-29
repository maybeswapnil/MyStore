import { useState, useRef } from 'react';
import './ImageForm.scss';
import { useDispatch } from 'react-redux';
import { addCart, removeCart } from '../features/userSlice';

function ImageForm(props) {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('Small (12inch*18inch)'); // Default size
  const [comments, setComments] = useState('');
  const prices = props.res.price; // Prices object from props
  const [addedToCart, setAddedToCart] = useState(false);

  const dispatch = useDispatch();

  // Add item to cart
  const addToCart = (obj) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const local = { ...props.res };
    local.quantity = obj.quantity;
    local.size = obj.size;
    local.comments = obj.comments;

    cartItems.push(local);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    dispatch(addCart(local));

    setAddedToCart(true);

    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  // Remove item from cart
  const removeFromCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const filteredItems = cartItems.filter(item => item.name !== props.res.name);
    localStorage.setItem('cart', JSON.stringify(filteredItems));
    dispatch(removeCart(props.res));
    setAddedToCart(false);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  // On form submission, add item to cart
  const submit = () => {
    const obj = {
      quantity: quantity,
      size: size,
      comments: comments
    };
    addToCart(obj);
  };

  return (
    <div className="main-form3" id='margin-left'>
      <div className="form-group2" id='margin-left'>
        <div className="product-grid">
          <h1 className="cart-product-header">{props.res.name}</h1>
          <br />
          <h3 className="cart-product-desc">Shot on <span className='bolder'>{props.res.camera}</span></h3>
          <h3 className="cart-product-desc">Ships in <span className='bolder'>{props.res.shipping_time}</span></h3>
          <p className="cart-product-desc">{props.res.description}</p>
        </div>
      </div>
      {/* Dropdown to select the size */}
      <div>
        <select className="dropdown" value={size} onChange={handleSizeChange}>
          {Object.keys(prices).map((sizeOption) => (
            <option key={sizeOption} value={sizeOption}>
              {sizeOption}
            </option>
          ))}
        </select>

        {/* Show the selected size and its price */}
        <div style={{ marginTop: '20px' }}>
          <h2>₹ {prices[size]}</h2>
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className="content-submit">
        <button
          className="button-13"
          style={{ 
            marginLeft: '0px', 
            backgroundColor: addedToCart ? '#ccf97e' : '#9e5c8b',
            color: addedToCart ? '#000' : '#f0f0f0'
          }}
          id='submit-button' 
          role="button" 
          onClick={() => { submit(); props.close(); }}
        >
          {addedToCart ? 'Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}

export default ImageForm;
