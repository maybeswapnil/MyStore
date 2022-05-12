import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCart } from "../features/userSlice";
import './Collection.css'
import Product from "./Product";

export default function Checkout() {
  const cart = useSelector(selectCart)

  return (
    <div className="collection">
      <h1>Checkout</h1>
    </div>
  );
}
  