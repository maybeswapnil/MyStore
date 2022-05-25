import {useState, useRef} from 'react'
import './ImageForm.scss';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCart, removeCart, selectCart, selectUser } from '../features/userSlice';
function ImageForm(props) {

  const [quantity,  setQuantity] = useState(1);
  const [size,  setSize] = useState('Small (12inch*18inch)');
  const [comments,  setComments] = useState('');
  const [objects,  setObject] = useState({
        quantity: 1,
        size: 'Small (12inch*18inch)',
        comments: ''
    });

  const navigate = useNavigate()
  const cart = useSelector(selectCart)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  const addToCart = (obj) => {
    var cart = JSON.parse(localStorage.getItem('cart'))||[]
    var local = {...props.res};
    local.quantity = obj.quantity;
    local.size = obj.size;
    local.comments = obj.comments;
    cart.push(local)
    localStorage.setItem('cart', JSON.stringify(cart))
    dispatch(addCart(local))
  }

  const RemoveFromCart = () => {
    var cart = JSON.parse(localStorage.getItem('cart'))||[]
    for(var j = 0;j<cart.length;j++) {
        if(cart[j].name===props.res.name) cart.splice(j, 1)
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    dispatch(removeCart(props.res))
  }

  const l = useRef(null)
  const m = useRef(null)
  const n = useRef(null)
  const o = useRef(null)

 function clearFunction() {
     l.current.value = ''
     m.current.value = ''
     n.current.value = ''
     o.current.value = ''
 }

 function submit() {
     var obj = {
         quantity: quantity,
         size: size,
         comments: comments
     }
     
     addToCart(obj)
 }

  return (
    <div  className="main-form3" id='margin-left'>
        <br/>
        <div className="form-group2" id='margin-left'>
        <div className="product-grid">
            <h1 className="cart-product-header" >{props.res.name}</h1>
        </div>
        </div>
        <div className="form-group2" id='margin-left'>
            <span style={{width: '100px'}}>{'Quantity'}</span>
            <select className="form-field" type="select" placeholder="" ref ={o} onChange={(e) => setQuantity(e.target.value)} >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
        </div>
        <div className="form-group2" id='margin-left'>
            <span style={{width: '100px'}}>{'Canvas Size'}</span>
            <select className="form-field" type="select" placeholder="Write your comments here" ref ={o} onChange={(e) => setSize(e.target.value)} >
              <option value="Small (12inch*18inch)">Small (12inch*18inch)</option>
              <option value="Medium (24inch*36inch)">Medium (24inch*36inch)</option>
              <option value="Large (40inch*60inch)">Large (40inch*60inch)</option>
            </select>
        </div>
        <div className="form-group2" id='margin-left'>
            <span style={{width: '100px'}}>{'Comments'}</span>
            <input className="form-field" type="text" placeholder="Write your comments here" ref ={o} onChange={(e) => setComments(e.target.value)} />
        </div>
        <div className="content-submit">
                <button className="button-13" style={{marginLeft: '0px'}} id='submit-button' role="button" onClick={() => {submit(); props.close()}}>Add to Cart</button>
        </div>
        <br/>
        <p id='random-sentence' style={{color:'black'}}>This lightweight, soft Cactus canvas will fast become your favorite. It's made with our 100% Certified Organic Cotton fabric giving premium feel.   </p>
        <br/>
    </div>
  );
}

export default ImageForm;


