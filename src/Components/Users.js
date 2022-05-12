import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [column, setColumn] = useState([]);
  const [select, setSelect] = useState(5);
  const [search, setSearch] = useState('')
  const user = useSelector(selectUser)

  useEffect(() => {
    axios("https://randomuser.me/api/?results=" + select).then((res) => {
      var col = Object.keys(res.data.results[0]) 
      console.log(res.data.results)
      setUsers(res.data.results);
      setColumn(col);
    });
  }, [select]);

  function Search(value) {
      setSearch(value)
        console.log(value)
  }

  return (
    <div className="App">
      <h1>Welcome {user.user}</h1>
    </div>
  );
}
    