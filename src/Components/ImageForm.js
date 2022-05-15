import {useState, useRef} from 'react'
import './ImageForm.scss';

import axios from 'axios';
function ImageForm(props) {

  const [email,  setEmail] = useState('')
  const [firstName,  setFirstName] = useState('')
  const [lastName,  setLastName] = useState('')
  const [extraInformation,  setExtraInformation] = useState('')
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
    var data = JSON.stringify({
    "email": email,
    "message": extraInformation,
    "time": new Date().toString(),
    "userinfo": {
        "name": firstName + ' ' + lastName
    }
    });

    var config = {
        method: 'post',
        url: 'https://new-api-name.herokuapp.com/portefeuille',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            props.close()
        })
        .catch(function (error) {
            console.log(error);
        });
 }

  return (
    <div  className="main-form2">
        <br/>
        <div className="form-group2">
        <div className="product-grid">
            <h1 className="cart-product-header" >{props.res.name}</h1>
        </div>
        </div>
        {/* <div className="form-group2">
            <input className="form-field" type="text" placeholder="First Name" ref ={m} onChange={(e) => setFirstName(e.target.value)}/>
            <input className="form-field" type="email" placeholder="Last Name" ref ={n} onChange={(e) => setLastName(e.target.value)} />
        </div> */}
        <div className="form-group2">
            <span>{'Quantity'}</span>
            <select className="form-field" type="select" placeholder="Write your comments here" ref ={o} onChange={(e) => setExtraInformation(e.target.value)} >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
        </div>
        <div className="form-group2">
            <span>{'Canvas Size'}</span>
            <select className="form-field" type="select" placeholder="Write your comments here" ref ={o} onChange={(e) => setExtraInformation(e.target.value)} >
              <option value="s">Small (12inch*18inch)</option>
              <option value="m">Medium (24inch*36inch)</option>
              <option value="l">Large (40inch*60inch)</option>
            </select>
        </div>
        <div className="form-group2">
            <span>{'Comments'}</span>
            <input className="form-field" type="text" placeholder="Write your comments here" ref ={o} onChange={(e) => setExtraInformation(e.target.value)} />
        </div>
        <div className="content-submit">
                <button className="button-13" style={{marginLeft: '0px'}} id='submit-button' role="button" onClick={() => {props.addToCart(props.element); props.close()}}>Add to Cart</button>
                <button className="button-13" style={{marginLeft: '10px'}}  id='submit-button' role="button" onClick={() => {props.addToCart(props.element); props.close()}}>Add Default</button>
        </div>
        <br/>
        <p id='random-sentence' style={{color:'black'}}>This lightweight, soft Cactus canvas will fast become your favorite. It's made with our 100% Certified Organic Cotton fabric giving premium feel.   </p>
        <br/>
    </div>
  );
}

export default ImageForm;


