import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCart } from "../features/userSlice";
import './Collection.css'
import Product from "./Product";
const image = [
    {
        name: 'Cassett In the Sky',
        url: 'https://images.unsplash.com/photo-1588417446723-884e75a48432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
        description: 'Front-end for project-specific portals. The Application was made using ReactJS to extract data from server logs and display it in readable form for analysis. Developed login interface along with backend architecture using Express, it allows storing user activity in MySQL database. Worked on various REST APIs and have an understanding of various headers used. Used UNIX to monitor the server logs for API requests made.'
    },
    {
        name: 'Greany Leaf',
        url: 'https://images.unsplash.com/photo-1588417446123-e7202e88f934?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=308&q=80',
        description: 'Front-end for project-specific portals. The Application was made using ReactJS to extract data from server logs and display it in readable form for analysis. Developed login interface along with backend architecture using Express, it allows storing user activity in MySQL database. Worked on various REST APIs and have an understanding of various headers used. Used UNIX to monitor the server logs for API requests made.'
    },
    {
        name: 'Blue Cassett',
        url: 'https://images.unsplash.com/photo-1588417321386-fc6426526b64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
        description: 'Front-end for project-specific portals. The Application was made using ReactJS to extract data from server logs and display it in readable form for analysis. Developed login interface along with backend architecture using Express, it allows storing user activity in MySQL database. Worked on various REST APIs and have an understanding of various headers used. Used UNIX to monitor the server logs for API requests made.'
    },
    {
        name: 'Contrasty Leaf',
        url: 'https://images.unsplash.com/photo-1588417221066-8b8184004cab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
        description: 'Front-end for project-specific portals. The Application was made using ReactJS to extract data from server logs and display it in readable form for analysis. Developed login interface along with backend architecture using Express, it allows storing user activity in MySQL database. Worked on various REST APIs and have an understanding of various headers used. Used UNIX to monitor the server logs for API requests made.'
    },
    {
        name: 'Pretty White Duck',
        url: 'https://images.unsplash.com/photo-1588417220543-160f591512cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
        description: 'Front-end for project-specific portals. The Application was made using ReactJS to extract data from server logs and display it in readable form for analysis. Developed login interface along with backend architecture using Express, it allows storing user activity in MySQL database. Worked on various REST APIs and have an understanding of various headers used. Used UNIX to monitor the server logs for API requests made.'
    },
    {
        name: 'Very Orange Container',
        url: 'https://images.unsplash.com/photo-1588417099597-fb0b248d6c35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
        description: 'Front-end for project-specific portals. The Application was made using ReactJS to extract data from server logs and display it in readable form for analysis. Developed login interface along with backend architecture using Express, it allows storing user activity in MySQL database. Worked on various REST APIs and have an understanding of various headers used. Used UNIX to monitor the server logs for API requests made.'
    }	
]
export default function Collection() {
  const cart = useSelector(selectCart)

  return (
    <div className="collection">
      <div className="collection-grid">
          {image.map((res) => {
              return(
                <Product res={res} from={'collection'}/>
              )
          })}
      </div>
      <br/>
      <br/>
    </div>
  );
}
  