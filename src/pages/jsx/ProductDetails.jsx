import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiShoppingCart, FiArrowLeft } from 'react-icons/fi';
import '../css/ProductDetails.css';
import { categories } from '../../../utils/categories';
import { useCart } from '../../context/CartContext';

const ProductDetails = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    useEffect(() => {
        const allProducts = categories.reduce((acc, cat) => {
            const productsWithUniqueIds = cat.data.map(p => ({
                ...p,
                uniqueId: `${cat.id}-${p.id}`
            }));
            return [...acc, ...productsWithUniqueIds];
        }, []);

        const foundProduct = allProducts.find(p => p.uniqueId === productId);

        setProduct(foundProduct);
    }, [productId]);

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleAddToCart = () => {
        if (product) {
            addToCart(product, quantity);
            setQuantity(1);
        }
    };

    if (!product) return <div className="pd-loading">Loading...</div>;

    return (
        <div className="pd-wrapper">
            <div className="container">
                <button className="pd-back-btn" onClick={() => navigate(-1)}>
                    <FiArrowLeft /> Back
                </button>

                <div className="pd-content">
                    <div className="pd-info">
                        <span className="pd-category">{product.category}</span>
                        <div className="pd-rating">★★★★★ {product.rating} Rating</div>
                        <h1 className="pd-title">{product.name}</h1>
                        <div className="pd-purchase-info">
                            <div className="pd-price">
                                <span className="pd-price-current">${product.price}</span>
                                {product.originalPrice && (
                                    <span className="pd-price-original">${product.originalPrice}</span>
                                )}
                            </div>

                            <div className="pd-quantity-selector">
                                <button className="pd-quantity-btn" onClick={decreaseQuantity}>-</button>
                                <span className="pd-quantity-number">{quantity}</span>
                                <button className="pd-quantity-btn" onClick={increaseQuantity}>+</button>
                            </div>
                        </div>

                        <p className="pd-description">
                            Experience the best quality with {product.name}. Perfect for your daily needs. Experience the best quality with {product.name}. Perfect for your daily needs. Experience the best quality with {product.name}. Perfect for your daily needs.
                        </p>

                        <button className="pd-add-cart-btn" onClick={handleAddToCart}>
                            <FiShoppingCart /> Add to Cart
                        </button>
                    </div>

                    <div className="pd-image-box" style={{ backgroundColor: product.imageColor }}>
                        <img src={product.imgurl} alt={product.name} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;