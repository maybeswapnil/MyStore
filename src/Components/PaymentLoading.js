import './Loading.css';
import loader from '../Resources/PaymentLoading.svg'

export default function PaymentLoading(props) {

  return (
     <div id="popup1" className="overlay2" >
     <div className="popup4">
         <div>
            <img width='200px' height='200px' id='payment-loading' src={loader} />
         </div>
         <div>
            <h1 id='payment-message'>{props.message==="paymentsuccess"?'Processing...':'Processing...'}</h1>
         </div>
     </div>
     </div>
  );
}
  