import './InfoPopup.css';

export default function InformationPopup(props) {
  return (
    <div className="info-overlay">
      <div className="info-popup">
        <h3 className="info-message">{props.value}</h3>
      </div>
    </div>
  );
}