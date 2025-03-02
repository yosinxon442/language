import React from "react";
import { useStateValue } from "../context";
import { useTranslation } from "react-i18next";
import "./Zakaz.css";

function Zakaz() {
    const { cart, setCart } = useStateValue();
    const { t } = useTranslation();

    const increaseQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId
                    ? { ...item, quantity: (item.quantity || 1) + 1 }
                    : item
            )
        );
    };

    const decreaseQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ).filter(item => item.quantity > 0)
        );
    };

    const removeProduct = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const totalPrice = cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

    return (
        <div className="zakaz-container">
            <h1 className="zakaz-title-h1">{t("zakaz")}</h1>
            <div className="zakaz-grid">
                {cart.length === 0 ? (
                    <div className="empty-cart-message">
                        <p>{t("empty_cart_message")}</p>
                        <button className="shop-now-btn" onClick={() => window.location.href = "/"}>
                            {t("shop_now")}
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="zakaz-list">
                            {cart.map((product) => (
                                <div key={product.id} className="zakaz-item">
                                    <img src={product.thumbnail} alt={product.title} className="zakaz-img" />
                                    <div className="zakaz-info">
                                        <h3 className="zakaz-h3">{product.title}</h3>
                                        <p className="zakaz-p">{t("price")}: <span>${product.price}</span></p>
                                    </div>
                                    <div className="quantity-control">
                                        <button onClick={() => decreaseQuantity(product.id)}>-</button>
                                        <span>{product.quantity || 1}</span>
                                        <button onClick={() => increaseQuantity(product.id)}>+</button>
                                    </div>
                                    <button className="remove-btn" onClick={() => removeProduct(product.id)}>
                                        🗑️
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="total-price">
                            <h3>{t("total_price")}: ${totalPrice.toFixed(2)}</h3>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Zakaz;