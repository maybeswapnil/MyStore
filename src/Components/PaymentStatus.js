import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart, selectUser } from "../features/userSlice";
import { useDispatch } from "react-redux";
import './PaymentStatus.css'

//TODO: overlay
export default function PaymentStatus(props) {
  const navigate = useNavigate()
  const cart = useSelector(selectCart)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  const main = () => {
    props.view(false)
  }

  return (
    <div id="popup1" className="overlay2" >
    <div className="popup2">
        <a className="close" onClick={() => main()} >&times;</a>
        <h1 id='payment-message'>{props.message==="paymentsuccess"?'Payment Success':'Payment Failed'}</h1>
    </div>
    </div>
  );
}

  