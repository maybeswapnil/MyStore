import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart, selectUser } from "../features/userSlice";
import { useEffect } from "react";

//TODO: overlay
export default function ProductPage(props) {
  const navigate = useNavigate()
  const cart = useSelector(selectCart)
  const user = useSelector(selectUser)

  useEffect(() => {

  }, [])
  return (
    <div className="product">
        <h1>{props.res.name}</h1>
        <img src={props.res.name}/>
        <h1>{props.res.description}</h1>
        <button value='open'>Open</button>
    </div>
  );
}
  