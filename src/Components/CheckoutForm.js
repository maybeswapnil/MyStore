import { useState, useCallback } from 'react';
import './CheckoutForm.scss';
import axios from 'axios';
import { emptyCart, selectCart, selectUser } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';

function CheckoutForm() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [cityName, setCityName] = useState('');
    const [address, setAddress] = useState('');
    const [houseNo, setHouseNumber] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [phone, setPhone] = useState('');
    const [state, setState] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const user = useSelector(selectUser);
    const cart = useSelector(selectCart);

    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
    const validatePhone = (phone) => /^\d{10}$/.test(phone);
    const validatePostalCode = (postalCode) => /^\d{6}$/.test(postalCode);

    // Fetch city and state from pincode
    const fetchCityState = async (pincode) => {
        try {
            const response = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
            const data = response.data[0];
            if (data.Status === 'Success') {
                const postOffice = data.PostOffice[0];
                setCityName(postOffice.District);
                setState(postOffice.State);
                setError('');
            } else {
                setError('Invalid pincode or no data available');
            }
        } catch (err) {
            console.error('Error fetching city and state:', err);
            setError('Failed to fetch city and state. Try again later.');
        }
    };

    // Debounce the fetchCityState function to limit API calls
    const debouncedFetchCityState = useCallback(
        debounce((pincode) => fetchCityState(pincode), 300),
        []
    );

    const handlePincodeChange = (e) => {
        const pincode = e.target.value;
        setPostalCode(pincode);

        if (validatePostalCode(pincode)) {
            debouncedFetchCityState(pincode);
        } else {
            setError('Invalid postal code (should be 6 digits)');
        }
    };

    const submit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (!validateEmail(email)) {
            setError('Invalid email address');
            setLoading(false);
            return;
        }

        if (!validatePhone(phone)) {
            setError('Invalid phone number (should be 10 digits)');
            setLoading(false);
            return;
        }

        if (!validatePostalCode(postalCode)) {
            setError('Invalid postal code (should be 6 digits)');
            setLoading(false);
            return;
        }

        if (firstName && lastName && address && cityName && state) {
            const data = JSON.stringify({
                email,
                time: new Date().toString(),
                amount: 7000,
                shippingInfo: {
                    firstName,
                    lastName,
                    cityName,
                    address,
                    houseNo,
                    postalCode,
                    phone,
                    email,
                    state,
                },
                cart: cart,
            });

            const config = {
                method: 'post',
                url: 'https://darling-sincerely-crab.ngrok-free.app/mystore/create-order',
                headers: { 'Content-Type': 'application/json', 'ngrok-skip-browser-warning': 0 },
                data,
            };

            axios(config)
                .then((response) => {
                    const { amount, order_id, currency, razorpay_key_id } = response.data;

                    const options = {
                        key: razorpay_key_id,
                        amount: amount * 100,
                        currency,
                        name: 'Swapnil Sharma Print Company',
                        description: 'Order Payment',
                        order_id,
                        handler: (response) => {
                            const paycheck = {
                                method: 'post',
                                url: 'https://darling-sincerely-crab.ngrok-free.app/mystore/verify-payment',
                                headers: { 'Content-Type': 'application/json', 'ngrok-skip-browser-warning': 0 },
                                data: response,
                            };
                            axios(paycheck)
                                .then((response) => {
                                    dispatch(emptyCart());
                                    localStorage.removeItem('cart');
                                    window.location.href = `/invoice?order_id=${response.data.order_id}`;
                                })
                                .catch((error) => {
                                    console.log(error);
                                    setError('Payment verification failed');
                                });
                        },
                        prefill: {
                            name: `${firstName} ${lastName}`,
                            email,
                            contact: phone,
                        },
                        theme: { color: '#bae08d' },
                    };

                    const rzp = new window.Razorpay(options);
                    rzp.open();
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                    setError('Payment initiation failed');
                    setLoading(false);
                });
        } else {
            setError('All fields are required');
            setLoading(false);
        }
    };

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
                <input className="form-field" type="text" placeholder="First Name" defaultValue={user ? user.logininfo.name.firstname : ''} onChange={(e) => setFirstName(e.target.value)} required />
                <input className="form-field" type="text" placeholder="Last Name" defaultValue={user ? user.logininfo.name.lastname : ''} onChange={(e) => setLastName(e.target.value)} required />
            </div>
            <div className="form-group2">
                <span style={{ width: '100px' }}>{'Address'}</span>
                <input className="form-field" type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)} required />
            </div>
            <div className="form-group2">
                <span style={{ width: '100px' }}>{'House No.'}</span>
                <input className="form-field" type="text" placeholder="Apartment, suite, etc. (optional)" onChange={(e) => setHouseNumber(e.target.value)} />
            </div>
            <div className="form-group2">
                <span style={{ width: '100px' }}>{'Postal code'}</span>
                <input className="form-field" type="text" placeholder="Postal code" value={postalCode} onChange={handlePincodeChange} required />
            </div>
            <div className="form-group2">
                <span style={{ width: '100px' }}>{'City'}</span>
                <input className="form-field" type="text" placeholder="City" value={cityName} readOnly required />
            </div>
            <div className="form-group2">
                <span style={{ width: '100px' }}>{'State'}</span>
                <input className="form-field" type="text" placeholder="State" value={state} readOnly required />
            </div>
            <div className="form-group2">
                <span style={{ width: '100px' }}>{'Phone No.'}</span>
                <input className="form-field" type="tel" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <div className="form-group2">
                <span style={{ width: '100px' }}>{'Email'}</span>
                <input className="form-field" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="content-submit">
                <button className="button-13" style={{ marginLeft: '0px', width: '170px' }} type="submit" id="submit-button" disabled={loading}>
                    {loading ? 'Checking out...' : 'Continue to Shipping'}
                </button>
            </div>
            <div className="content-error">
                <h4>{error}</h4>
                <h3>
                    By clicking on <strong style={{ fontWeight: 'bolder' }}>"Continue to Shipping"</strong> button, you will be accepting{' '}
                    <a href="/terms-of-service">terms of service</a>, <a href="/privacy-policy">privacy policy</a>, <a href="/shipping-policy">shipping policy</a>, and <a href="/returns-policy">return policy</a>.
                </h3>
            </div>
        </form>
    );
}

export default CheckoutForm;
