
import { useEffect, useState } from "react";
import './CheckoutDiv.css'

export default function CheckoutDiv(props) {
  const [view, setView] = useState(false)
  return (
    <div className="checkoutdiv-product" >
      <div className="checkoutdiv-product-flex" >
          <div className="checkoutdiv-cart-image-div">
            <img className="checkoutdiv-cart-image" src={props.res.smallurl} />
          </div>
            <div className="checkoutdiv-product-grid" onClick={() => setView(true)}>
                <h1 className="checkoutdiv-cart-product-header">{props.res.name}</h1>
                <p>{'$20'}</p>
                <p style={{fontSize: '12px'}}>My planet friendly Collection</p>
            </div>
      </div>
    </div>
  );
}
  