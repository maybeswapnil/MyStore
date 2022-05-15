import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Users from "./Components/Users";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Cart from "./Components/Cart";
import Collection from "./Components/Collection";
import { useEffect } from "react";
import Checkout from "./Components/Checkout";
import './App.css'
import Footer from "./Components/Footer";

export default function App() {

  const user = useSelector(selectUser)

  useEffect(() => {
    if(user) {
      if(new Date(user.date)-new Date()<-100000) {
        localStorage.setItem('user', null)
      }
    }
  }, [user])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Link to="/account/user" />
        <Link to="/" />
        <Link to="/cart" />
        <Link to="/collection" />
        <Link to="/checkout" />
        <Routes>
          <Route path="/account/user" element={!user?<Login />:<Users />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
      <Footer />

    </div>
  );
}