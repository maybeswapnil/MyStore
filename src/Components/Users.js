import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../features/userSlice";
import OrderDiv from "./OrderDiv";
import './Users.css'
export default function Users() {
  const [search, setSearch] = useState('')
  const user = useSelector(selectUser)
  const navigate = useNavigate()

  useEffect(() => {
  }, []);

  function Search(value) {
      setSearch(value)
  }

  return (
    <div className="users-main">
        <div className="users">
          <div className="users-header">
            <h1>Welcome {user.logininfo.name.firstname} <span id='underline' onClick={() => {localStorage.setItem('user', null);}}><a href='/'>Logout</a></span></h1>
          </div>
          <div className="users-header">
            <h1 id='main-header'>Orders History</h1>
            {/* {user.orders.length===0?<h4>You haven't placed any orders yet.</h4>:
            <>
              {user.orders.map((r, i) => {
                if(i==user.orders.length-1) {
                  console.log(r)
                  return(
                    <OrderDiv order={r}/>
                  )
                }
              })}
            </>} */}
            {user.orders.length===0?<h4>You haven't placed any orders yet.</h4>:
            <>
              {user.orders.map((r, i) => {
                if(i<3) {
                  return(
                    <div style={{display:'flex'}}>
                      <p id='bolder'>{i+1}.&nbsp;&nbsp;&nbsp;</p>
                      <p>{user.orders[i]['time'].split('+')[0]}&nbsp;&nbsp;&nbsp;</p>
                      <p><span id='bolder'>Items:</span>&nbsp;{user.orders[i].cart.length}</p>
                    </div>
                  )
                }
              })}
            </>}
            {user.orders.length>3?<h3>....more</h3>:null}
          </div>
        </div>
        <div className="users" id='mobile-user'>
          <div className="users-header">
            <h1 id='main-header'>Account Details</h1>
            {user.orders.length===0?<h4>You haven't added any address yet.</h4>:
            <>
              <div style={{display:'flex'}}>
               <h3>{user.orders[0]['shipping-info']['firstName']}&nbsp;</h3>
               <h3>{user.orders[0]['shipping-info']['lastName']}</h3>
              </div>
               <div style={{display:'flex'}}>
                <h4>{user.orders[0]['shipping-info']['cityName']}&nbsp;&nbsp;&nbsp;</h4>
                <p>{user.orders[0]['shipping-info']['address']}</p>
               </div>
               <div style={{display:'flex'}}>
                <h4>{user.orders[0]['shipping-info']['phone']}&nbsp;&nbsp;&nbsp;</h4>
                {/* <p>{user.orders[0]['time'].split('+')[0]}</p> */}
               </div>
            </>}
          </div>
        </div>
    </div>
    
  );
}
    