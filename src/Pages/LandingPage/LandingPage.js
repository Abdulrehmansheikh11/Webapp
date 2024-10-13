import React from "react";
import { useNavigate } from "react-router-dom"; 
import products from "../../Components/Products/Products";
import { useCart } from "../../Context/Content";
import "./LandingPage.css";

export default function LandingPage() {

    const { addtocart, removeFromCart } = useCart();
    const navigate = useNavigate(); 

    const handleImageClick = (product) => {
        navigate(`/detail`, { state: { product } }); 
    };


    return (
        <div className="container">
            <main className="main">
                <div className="product-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <img
                                src={product.image}
                                alt={product.name}
                                width={200}
                                height={200}
                                className="product-image"
                                onClick={() => handleImageClick(product)} // Add click handler
                            />
                            <div className="product-details">
                                <div className="product-div">
                                    <p className="product-name">{product.name}</p>
                                    <p className="product-price">{product.price}</p>
                                </div>
                                <button className="add-to-cart-button" onClick={()=>addtocart(product)}>Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
