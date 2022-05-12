
import { useEffect, useState } from "react";
import ProductPage from './ProductPage'
export default function Product(props) {
    const [view, setView] = useState(false)
  useEffect(() => {

  }, [])
  return (
    <div className="product">
        <h1>{props.res.name}</h1>
        <img src={props.res.name}/>
        <h1>{props.res.description}</h1>
        <button value='open' onClick={() => setView(!view)}>Open</button>
        {view?<ProductPage res={props.res}/>:<h1></h1>}
    </div>
  );
}
  