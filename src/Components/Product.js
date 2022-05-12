
import { useEffect, useState } from "react";
import ProductPage from './ProductPage'
import './Product.css'
export default function Product(props) {
  const [view, setView] = useState(false)
  useEffect(() => {
    console.log(props)
  }, [])
  return (
    <div className="product">
        <h1>{props.res.name}</h1>
        <img src={props.res.url}/>
        <h1>{props.res.description}</h1>
        <button value='open' onClick={() => setView(!view)}>Open</button>
        {view?<ProductPage res={props.res} view={() => setView()} from={props.from}/>:<h1></h1>}
    </div>
  );
}
  