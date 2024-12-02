import React, { useEffect, useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './Invoice.css'; // Import the CSS file
import Loading from './Loading';

const Invoice = () => {
    const params = new URLSearchParams(window.location.search);
    const orderId = params.get('order_id'); // Get the orderId from the URL
    const [invoiceData, setInvoiceData] = useState(null);
    const [loading, setLoading] = useState(true); // Track loading state
    const [error, setError] = useState(null); // Track error state

    const componentRef = useRef(); // Reference for the component to print

    useEffect(() => {
        if (orderId) {
            console.log("Captured orderId:", orderId); // Log the orderId

            // Fetch invoice data from the server using the dynamic orderId
            fetch(`${process.env.REACT_APP_API_URL}/orders?order_id=${orderId}`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'ngrok-skip-browser-warning': '0',
                },
              }).then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok'); // Throw error for non-2xx responses
                    }
                    return response.json();
                })
                .then((data) => {
                    if (data.length > 0) {
                        setInvoiceData(data[0]); // Set the first element of the array as invoiceData
                    } else {
                        throw new Error('No invoice data found');
                    }
                    setLoading(false); // Set loading to false after data is fetched
                })
                .catch((error) => {
                    setError(error.message); // Set error message
                    setLoading(false); // Set loading to false on error
                });
        } else {
            console.log("No orderId found in the URL");
        }
    }, [orderId]);

    const handlePrint = useReactToPrint({
        content: () => componentRef.current, // Ensure the correct ref is passed
        onBeforeGetContent: () => {
            console.log('Preparing to print');
        },
        onAfterPrint: () => {
            console.log('Print successful');
        },
        onPrintError: (error) => {
            console.error('Print error:', error);
        }
    });

    if (loading) return <div className="loadingCart"><Loading /></div>; // Loading state
    if (error) return <p className="loadingCart">Error: {error}</p>; // Show error message

    // Destructure the properties from the invoiceData object
    const { shippingInfo, cart, amount, created_at, order_id } = invoiceData;

    return (
        <div>
            <div ref={componentRef} className="invoice-container"> {/* Attach ref here */}
                {/* Header Section */}
                <div className="invoice-header">
                    <div className="invoice-logo">
                        <img src="https://i.imgur.com/xxsj5QF.png" alt="Logo" />
                    </div>
                    <div className="invoice-details">
                        <p>Narsinghpur, Madhya Pradesh, 487001</p>
                        <p>Phone: +91 9755448822</p>
                        <p>Email: info@swapnilsharma.in</p>
                    </div>
                    <div className="invoice-meta">
                        <p>Invoice No: {order_id}</p>
                        <p>Date: {new Date(created_at).toLocaleDateString()}</p>
                    </div>
                </div>

                {/* Billing and Shipping Section */}
                <div className="invoice-billing-shipping">
                    <div className="bill-to">
                        <h3>Bill & Ship To:</h3>
                        <p>{shippingInfo.firstName} {shippingInfo.lastName}</p>
                        <p>{shippingInfo.address}, {shippingInfo.cityName}, {shippingInfo.state}, {shippingInfo.postalCode}</p>
                        <p>Email: {shippingInfo.email}</p>
                        <p>Phone: {shippingInfo.phone}</p>
                    </div>
                </div>

                {/* Order Items Table */}
                <div className="invoice-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Unit Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item._id}>
                                    <td>{item.name} ({item.size})</td>
                                    <td>{item.quantity}</td>
                                    <td>₹{item.price[item.size]}</td>
                                    <td>₹{item.price[item.size] * item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Invoice Totals */}
                <div className="invoice-totals">
                    <h3>Total: ₹{amount / 100} (Includes Taxes and Shipping charges)</h3>
                </div>
            </div>
        </div>
    );
};

export default Invoice;
