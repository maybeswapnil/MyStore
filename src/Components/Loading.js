import './Loading.css';
import loader from '../Resources/loader.svg'

export default function Loading() {

  return (
    <div className="loading">
      <img className="loading-icon" src={loader} />
    </div>
  );
}
  