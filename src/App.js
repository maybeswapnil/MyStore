import { BrowserRouter as Router, Link, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Users from "./Components/Users";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Cart from "./Components/Cart";
import Collection from "./Components/Collection";
import { useEffect, useState } from "react";
import Checkout from "./Components/Checkout";
import './App.css'
import Footer from "./Components/Footer";
import Loading from "./Components/Loading";
import Logon from "./Components/Logon";
import { logout } from "./features/userSlice";
import PaymentLoading from "./Components/PaymentLoading";
import LogRocket from 'logrocket';
export default function App() {

  const user = useSelector(selectUser)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    LogRocket.init('zaeyzk/mystore');
    if(user) {
      LogRocket.identify(user.email, {
        name: user.logininfo.name.firstname,
        email: user.email,
        subscriptionType: 'pro'
      });
    }
  }, [])

  useEffect(() => {
    if(user) {
      if(new Date(user.date)-new Date()<-200000) {
        localStorage.setItem('user', null)
        var url = window.location.href
        window.location.href = url
        dispatch(logout())
      }
    }
  }, [user])

  return (
    <div className="App">
      {loading?<PaymentLoading />:null}
      <Router>
        <Navbar loader={setLoading}/>
        <Link to="/account/user" />
        <Link to="/" />
        <Link to="/cart" />
        <Link to="/collection" />
        <Link to="/checkout" />
        <Link to="/logon" />
        <Routes>
          <Route path="/account/user" element={!user?<Login />:<Users />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/logon" element={<Logon />} />
        </Routes>
      </Router>
      <Footer />

    </div>
  );
}