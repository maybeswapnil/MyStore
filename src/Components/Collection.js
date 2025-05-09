import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../features/userSlice";
import axios from 'axios';
import './Collection.css';
import Product from "./Product";
import ProductPage from "./ProductPage";
import NotFoundPage from "./NotFoundPage";
import Loading from "./Loading";

export default function Collection() {
    const cart = useSelector(selectCart);
    const [view, setView] = useState(false);
    const [res, setRes] = useState({});
    const [collection, setCollection] = useState([]); // State for storing collection data
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(null); // State for error handling

    function viewAdded(data) {
        setView(true);
        setRes(data);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        const fetchCollection = async () => {
            const localStorageKey = 'collection_data'; // Key for local storage
            const cachedData = localStorage.getItem(localStorageKey);
            
            // Check if cached data exists and is still valid
            if (cachedData) {
                const { timestamp, data } = JSON.parse(cachedData);
                const now = Date.now();

                // If the cached data is less than 15 minutes old, use it
                if (now - timestamp < 900000) {
                    setCollection(data); // Use cached data
                    setLoading(false); // No need to set loading state again
                    return; // Exit the function
                }
            }

            // Fetch data from API if no valid cache
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/getCollection`, {
                    headers: {
                      'Content-Type': 'application/json',
                      'ngrok-skip-browser-warning': 0,
                    },
                  });
                setCollection(response.data); // Set the fetched collection data

                // Store response in local storage with timestamp
                localStorage.setItem(localStorageKey, JSON.stringify({
                    timestamp: Date.now(),
                    data: response.data
                }));
            } catch (err) {
                setError(err.message); // Set the error message
            } finally {
                setLoading(false); // Set loading to false regardless of the outcome
            }
        };

        fetchCollection();
    }, []); // Empty dependency array means this effect runs once on mount

    if (loading) {
        return <div className="loadingCart"><Loading /></div>; // Loading state
    }

    if (error) {
        return <NotFoundPage />; // Error state
    }

    return (
        <div className="cart">
            {view ? <ProductPage res={res} view={setView} /> : null}
            <div className="col-grid">
                {collection.map((res, index) => {
                    return (
                        <Product key={`product-${index}`} res={res} m='true' from={'collection'} index={index} view={viewAdded} />
                    );
                })}
            </div>
        </div>
    );
}
