import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../features/userSlice";
import './Users.css'
export default function Users() {
  const [users, setUsers] = useState([]);
  const [column, setColumn] = useState([]);
  const [select, setSelect] = useState(5);
  const [search, setSearch] = useState('')
  const user = useSelector(selectUser)
  const navigate = useNavigate()

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
    <div className="users">
      <div className="users-header">
        <h1 id='main-header'>Account</h1>
        <h1>Welcome {user.user} <span id='underline' href='/' onClick={() => {localStorage.setItem('user', null); navigate('/account/user')}}>Logout</span></h1>
      </div>
    </div>
  );
}
    