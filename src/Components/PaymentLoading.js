import './Loading.css';
import loader from '../Resources/PaymentLoading.svg'

export default function PaymentLoading(props) {

  return (
     <div id="popup1" className="overlay" >
            <img width='200px' height='200px' id='payment-loading' src={loader} />
     </div>
  );
}
  