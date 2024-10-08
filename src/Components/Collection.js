import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../features/userSlice";
import axios from 'axios'; // Import Axios
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
            try {
                const response = await axios.get('http://localhost:4000/mystore/getCollection'); // Use Axios to fetch data
                setCollection(response.data); // Set the fetched collection data
            } catch (err) {
                setError(err.message); // Set the error message
            } finally {
                setLoading(false); // Set loading to false regardless of the outcome
            }
        };

        fetchCollection();
    }, []); // Empty dependency array means this effect runs once on mount

    if (loading) {
        return <Loading />; // Loading state
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
            <br />
            <br />
            <br />
        </div>
    );
}
