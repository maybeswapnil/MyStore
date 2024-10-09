import React, { useEffect, useState } from 'react';
import './OrderPlaced.css'; // Import CSS for styling
import GIF from '../Resources/OrderPlaced.gif';

const OrderPlaced = ({ onClose }) => {
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev === 1) {
                    clearInterval(timer);
                    onClose(); // Call the close function when countdown ends
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer); // Cleanup on unmount
    }, [onClose]);

    return (
        <div className="full-screen-gif">
            <h1>Order Placed Successfully!</h1>
            <img src={GIF} alt="Order Placed" className="gif" />
            <div className="countdown">Closing in {countdown} seconds</div>
        </div>
    );
};

export default OrderPlaced;
