import './PaymentStatus.css'

//TODO: overlay
export default function InformationPopup(props) {
  return (
    <div  className="overlay9" >
    <div className="popup99">
        <h3 id='notification'>{props.value}</h3>
    </div>
    </div>
  );
}

  