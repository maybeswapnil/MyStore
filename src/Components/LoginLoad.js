import './Loading.css';
import loader from '../Resources/PaymentLoading.svg'

export default function LoginLoad(props) {

  return (
     <div id="popup1" className="overlay2" >
     <div className="popup5">
            <img width='200px' height='200px' id='payment-loading' src={loader} />
     </div>
     </div>
  );
}
  