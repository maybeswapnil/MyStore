import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../features/userSlice";
import './Users.css'
export default function Users() {
  const [search, setSearch] = useState('')
  const user = useSelector(selectUser)
  const navigate = useNavigate()

  useEffect(() => {
    console.log(user)
  }, []);

  function Search(value) {
      setSearch(value)
        console.log(value)
  }

  return (
    <div className="users-main">
        <div className="users">
          <div className="users-header">
            <h1>Welcome {user.logininfo.name.firstname} <span id='underline' href='/' onClick={() => {localStorage.setItem('user', null); navigate('/account/user')}}><a href='/'>Logout</a></span></h1>
          </div>
          <div className="users-header">
            <h1 id='main-header'>Orders History</h1>
            {user.orders.length===0?<h4>You haven't placed any orders yet.</h4>:
            <>
              {user.orders.map((r) => {
                return(<p>{r.name}</p>)
              })}
            </>}
          </div>
        </div>
        <div className="users">
          <div className="users-header">
            <h1 id='main-header'>Account Details</h1>
            {user.address.length===0?<h4>You haven't added any address yet.</h4>:
            <>
              {user.address.map((r) => {
                return(<p>{r.name}</p>)
              })}
            </>}
          </div>
        </div>
    </div>
    
  );
}
    