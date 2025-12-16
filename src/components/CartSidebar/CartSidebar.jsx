import React from 'react';
import { useCart } from '../../context/CartContext';
import { FiX, FiTrash2, FiMinus, FiPlus } from 'react-icons/fi';
import './CartSidebar.css';

const CartSidebar = () => {
  const { cartItems, isCartOpen, toggleCart, updateQuantity, removeFromCart } = useCart();

  const handleOverlayClick = (e) => {
    if (e.target.className.includes('cart-overlay')) {
      toggleCart(false);
    }
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className={`cart-overlay ${isCartOpen ? 'open' : ''}`} onClick={handleOverlayClick}>
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>Shopping Cart ({cartItems.length})</h2>
          <button className="close-btn" onClick={() => toggleCart(false)}>
            <FiX size={24} />
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="empty-cart">Your cart is currently empty.</div>
          ) : (
            cartItems.map((item) => (
              <div className="cart-item" key={item.uniqueId}>
                <img src={item.imgurl} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <span className="item-price">${item.price}</span>
                  
                  <div className="qty-controls">
                    <button className="qty-btn" onClick={() => updateQuantity(item.uniqueId, 'dec')}>
                      <FiMinus size={14} />
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button className="qty-btn" onClick={() => updateQuantity(item.uniqueId, 'inc')}>
                      <FiPlus size={14} />
                    </button>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.uniqueId)}>
                    <FiTrash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="total-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;