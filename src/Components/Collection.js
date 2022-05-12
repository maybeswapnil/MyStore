import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCart } from "../features/userSlice";
import './Collection.css'
import Product from "./Product";
const image = [
    {
        name: 'first',
        url: 'https://images.unsplash.com/photo-1588417446723-884e75a48432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
        description: 'newnenwnenw'
    },
    {
        name: 'second',
        url: 'https://images.unsplash.com/photo-1588417446123-e7202e88f934?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=308&q=80',
        description: 'newnenwnenw'
    },
    {
        name: 'third',
        url: 'https://images.unsplash.com/photo-1588417321386-fc6426526b64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
        description: 'newnenwnenw'
    },
    {
        name: 'forth',
        url: 'https://images.unsplash.com/photo-1588417221066-8b8184004cab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
        description: 'newnenwnenw'
    },
    {
        name: 'fifth',
        url: 'https://images.unsplash.com/photo-1588417220543-160f591512cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
        description: 'newnenwnenw'
    },
    {
        name: 'sixth',
        url: 'https://images.unsplash.com/photo-1588417099597-fb0b248d6c35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
        description: 'newnenwnenw'
    }	
]
export default function Collection() {
  const cart = useSelector(selectCart)

  return (
    <div className="collection">
      <h1>Collection</h1>
      <div className="collection-grid">
          {image.map((res) => {
              return(
                <Product res={res}/>
              )
          })}
      </div>
    </div>
  );
}
  