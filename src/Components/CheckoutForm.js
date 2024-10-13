import { useState, useRef } from 'react';
import './CheckoutForm.scss';
import axios from 'axios';
import { emptyCart, selectCart, selectUser } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import OrderPlaced from './OrderPlaced';

function CheckoutForm() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [cityName, setCityName] = useState('');
    const [address, setAddress] = useState('');
    const [houseNo, setHouseNumber] = useState('');
    const [postalCode, setPostalCode] = useState(0);
    const [phone, setPhone] = useState('');
    const [state, setState] = useState(''); // New state field
    const [error, setError] = useState('');
    const [orderInfo, setInfo] = useState('');
    const [viewOrderConfirmation, setOrderConfirmation] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const [extraInformation, setExtraInformation] = useState('');
    const l = useRef(null);
    const m = useRef(null);
    const n = useRef(null);
    const o = useRef(null);
    const user = useSelector(selectUser);
    const cart = useSelector(selectCart);

    const setOrderInfo = (data) => {
        setInfo(data);
        setOrderConfirmation(true);
    };

    function submit(e) {
        e.preventDefault();
        setLoading(true);

        if (postalCode !== 0 && email !== '' && phone !== '' && address !== '' && cityName !== '' && state !== '') {
            const payload = { orders: [], cart: [] };
            const data = JSON.stringify({
                email: payload.email,
                message: extraInformation,
                time: new Date().toString(),
                userinfo: { email: payload.email },
                amount: 7000,
                shippingInfo: {
                    firstName: firstName,
                    lastName: lastName,
                    cityName: cityName,
                    address: address,
                    houseNo: houseNo,
                    postalCode: postalCode,
                    phone: phone,
                    email: email,
                    state: state, // Include state in shipping info
                },
                cart: cart,
            });

            const config = {
                method: 'post',
                url: 'https://mystore-apiset.onrender.com/mystore/create-order',
                headers: { 'Content-Type': 'application/json' },
                data: data,
            };

            axios(config)
                .then(function (response) {
                    const { amount, order_id, currency, razorpay_key_id } = response.data;

                    const options = {
                        key: razorpay_key_id,
                        amount: amount * 100,
                        currency: currency,
                        name: 'Swapnil Sharma Print Company',
                        description: 'Order Payment',
                        order_id: order_id,
                        handler: function (response) {
                            const paycheck = {
                                method: 'post',
                                url: 'https://mystore-apiset.onrender.com/mystore/verify-payment',
                                headers: { 'Content-Type': 'application/json' },
                                data: response,
                            };
                            axios(paycheck)
                                .then(function (response) {
                                    setOrderInfo("Order placed", response.data.order_id);
                                    dispatch(emptyCart());
                                    localStorage.removeItem('cart');
                                    window.location.href = `/invoice?order_id=${response.data.order_id}`;
                                })
                                .catch(function (error) {
                                    console.log(error);
                                    setError('Payment verification failed');
                                    setOrderInfo("Payment verification failed");
                                    setTimeout(() => {
                                        setOrderConfirmation(false);
                                    }, 2000);
                                    setTimeout(() => {
                                        setError('');
                                    }, 2000);
                                });
                        },
                        prefill: {
                            name: `${firstName} ${lastName}`,
                            email: email,
                            contact: phone,
                        },
                        theme: {
                            color: '#bae08d',
                        },
                    };

                    const rzp = new window.Razorpay(options);
                    rzp.open();
                    setLoading(false);
                })
                .catch(function (error) {
                    console.log(error);
                    setError('Payment initiation failed');
                    setLoading(false);
                    setTimeout(() => {
                        setError('');
                    }, 2000);
                });
        } else {
            setError('Fields are Empty');
            setLoading(false);
            setTimeout(() => {
                setError('');
            }, 2000);
        }
    }

    return (
        <form className="main-form2" style={{ marginTop: '0px' }} id="form-main2" onSubmit={(e) => submit(e)}>
            <br />
            <div className="form-group2">
                <div className="product-grid">
                    <h1 className="cart-product-header">Checkouts</h1>
                </div>
            </div>
            <div className="form-group2">
                <span style={{ width: '100px' }}>{'Name'}</span>
                <input className="form-field" type="text" placeholder="First Name" ref={m} defaultValue={user ? user.logininfo.name.firstname : ''} onChange={(e) => setFirstName(e.target.value)} required />
                <input className="form-field" type="text" placeholder="Last Name" ref={n} defaultValue={user ? user.logininfo.name.lastname : ''} onChange={(e) => setLastName(e.target.value)} required />
            </div>
            <div className="form-group2">
                <span style={{ width: '100px' }}>{'Address'}</span>
                <input className="form-field" type="text" placeholder="Address" ref={n} onChange={(e) => setAddress(e.target.value)} required />
            </div>
            <div className="form-group2">
                <span style={{ width: '100px' }}>{'House No.'}</span>
                <input className="form-field" type="text" placeholder="Apartment, suite, etc. (optional)" ref={n} onChange={(e) => setHouseNumber(e.target.value)} />
            </div>
            <div className="form-group2">
                <span style={{ width: '100px' }}>{'City'}</span>
                <input className="form-field" type="text" placeholder="City" ref={n} onChange={(e) => setCityName(e.target.value)} required />
            </div>
            <div className="form-group2">
                <span style={{ width: '100px' }}>{'State'}</span> {/* New state field label */}
                <input className="form-field" type="text" placeholder="State" ref={n} onChange={(e) => setState(e.target.value)} required /> {/* New input for state */}
            </div>
            <div className="form-group2">
                <span style={{ width: '100px' }}>{'Postal code'}</span>
                <input className="form-field" type="number" placeholder="Postal code" ref={n} onChange={(e) => setPostalCode(e.target.value)} required />
            </div>
            <div className="form-group2">
                <span style={{ width: '100px' }}>{'Phone No.'}</span>
                <input className="form-field" type="text" placeholder="Phone" ref={n} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <div className="form-group2">
                <span style={{ width: '100px' }}>{'Email'}</span>
                <input className="form-field" type="Email" placeholder="Email" ref={n} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="content-submit">
                <button 
                    className="button-13" 
                    style={{ marginLeft: '0px', width: '200px' }} 
                    type='submit' 
                    id='submit-button' 
                    disabled={loading} // Disable button when loading
                >
                    {loading ? 'Checking out...' : 'Continue to Shipping'} {/* Change button text based on loading state */}
                </button>
                <button 
                    className="button-13" 
                    style={{ marginLeft: '10px', width: '100px', backgroundColor: 'black' }} 
                    id='submit-button' 
                    role="button" 
                    onClick={() => { window.location.href = "/shipping_policy" }}
                >
                    Policy
                </button>
            </div>
            <div className="content-error">
                <h4>{error}</h4>
            </div>
        </form>
    );
}

export default CheckoutForm;
