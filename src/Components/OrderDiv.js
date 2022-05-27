
import { useEffect, useState } from 'react';
import './OrderDiv.css'

//TODO: overlay
var array = ['order-div-image-one', 'order-div-image-two', 'order-div-image-three']
export default function OrderDiv(props) {
  
    const [price, setprice] = useState(0)

    useEffect(() => {
        var p = 0;
        props.order.cart.map((r) => {
            p+=r.price[r.size]
        })
        setprice(p)
    }, [])

  return (
    <div className="order-div">
        <div className="order-div-one">
            {props.order.cart.map((r, i) => {
                return(
                    <div className={array[i]}>
                        <img className={array[i]+'-image'} width='200px' height='200px' src={r.smallurl}/>
                    </div>
                )
            })}
            {/* <div className="order-div-image-one">
                <img className="order-div-image-one-image" width='200px' height='200px' src={props.order.cart[1].smallurl}/>
            </div>
            <div className="order-div-image-two">
                <img className="order-div-image-two-image" width='200px' height='200px' src={props.order.cart[1].smallurl}/>
            </div>
            <div className="order-div-image-three">
                <img className="order-div-image-three-image" width='200px' height='200px' src={props.order.cart[0].smallurl}/>
            </div> */}
        </div>
        <div className="order-div-two">
            <h3 id='var-font'>Price: ${price}</h3>
            <h3 id='var-font'>Orderd on:</h3>
            <h3 id='var-font'>{props.order['time'].split('GMT')[0]}</h3>
        </div>
    </div>
  );
}

  