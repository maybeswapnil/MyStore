import { useState, useRef } from 'react';
import './ImageForm.scss';
import { useDispatch } from 'react-redux';
import { addCart, removeCart } from '../features/userSlice';
import loadingGif from '../Resources/loadbutton.gif'

function ImageForm(props) {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('Small (12inch*18inch)'); // Default size
  const [comments, setComments] = useState('');
  const prices = props.res.price; // Prices object from props
  const [addedToCart, setAddedToCart] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleSizeChange = (e) => {
    setSize(e);
  };

  // On form submission, add item to cart
  const submit = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000)
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
          <h3 className="cart-product-desc">Shot on <span className='bolder'>{props.res.camera}</span></h3>
          <h3 className="cart-product-desc">Ships in <span className='bolder'>{props.res.shipping_time}</span></h3>
          <p className="cart-product-desc">{props.res.description}</p>         
          <p className="cart-product-desc">Question? <a href="https://instagram.com/hellochemo">Text me on Instagram</a></p>
        </div>
      </div>
      {/* Dropdown to select the size */}
      <div>
        <h2 className="cart-product-desc"> <span className='bolder'>Size</span></h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}> {/* Added flexWrap: 'wrap' */}
          {Object.keys(prices).map((sizeOption) => (
            <button
              key={sizeOption}
              className="button-37"
              onClick={() => handleSizeChange(sizeOption)}
              style={{
                backgroundColor: size === sizeOption ? '#ccf97e' : '#9e5c8b', // Change to your desired color
                color: size === sizeOption ? 'black' : 'white', // Change to your desired color
                fontWeight: size === sizeOption ? '5000' : '400', // Change to your desired color

              }}
            >
              {sizeOption}
            </button>
          ))}
        </div>

        {/* Show the selected size and its price */}
        <div style={{ marginTop: '20px' }}>
          <h3>₹ {prices[size].toLocaleString('en-IN')} INR (including taxes)</h3>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {/* Add to Cart Button */}
        <div className="content-submit">
          <button
            className="button-37"
            style={{
              marginLeft: '0px',
              backgroundColor: addedToCart ? '#ccf97e' : '#ccf97e',
              color: "black",
              width: "140px",
            }}
            id='submit-button'
            role="button"
            onClick={() => { setLoading(true); submit(); }}
          >
            {loading ? (
              <img src={loadingGif} alt="Loading..." style={{ width: '20px', marginRight: '8px' }} />
            ) : null}
            {loading ? '' : 'Add to cart'}
          </button>
        </div>
        <div className="content-submit">
          <button
            className="button-37"
            style={{
              marginLeft: '0px',
              backgroundColor: addedToCart ? '#9e5c8b' : '#9e5c8b',
              color: "white",
            }}
            id='submit-button'
            role="button"
            onClick={() => { submit(); window.location.href = "/checkout"; }}
          >
            {'Buy Now'}
          </button>
        </div>
        <p className="cart-product-desc">Printed on high-quality, durable canvas</p>

      </div>
    </div>
  );
}

export default ImageForm;
