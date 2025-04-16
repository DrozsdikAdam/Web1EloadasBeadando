import React, { useContext, useEffect, useState } from 'react';
import cartStyles from '../styles/cart.module.css'
import AppContext from '../services/AppContext';
import AddItem from './AddItem';
import AuthContext from '../services/AuthContext';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    const [isloggedin, setisloggedin] = useContext(AuthContext);
    const [State, setState] = useContext(AppContext);
    const [mrp, setmpr] = useState(0);
    const [Total, setTotal] = useState(0);
    const [discount, setdiscount] = useState(0);
    const navigate = useNavigate();

    const order = () => {
        if (isloggedin) {
            let products = [...State.products];
            for (let product of products) { product.quantity = 0; }
            setState({ products, cart: [] });
            navigate('/final');
        }else{
            navigate('/login');
        }

    }

    useEffect(() => {
        let mrp = 0;
        let total = 0;
        let disc = 0;
        for (let item of State.cart) {
            mrp = mrp + item.price * item.quantity;
            disc = disc + item.quantity * (item.price - item.price)//az elsőt ki kell cserélni ha lesz leárazott termék
            total = mrp - disc;
        }
        setmpr(mrp.toFixed(2));
        setTotal(total.toFixed(2));
        setdiscount(disc.toFixed(2));
    }, [State.cart]);

    return (
        <>
            <div className={cartStyles.cartContainer}>
                <div className={cartStyles.heading}>Cart</div>
                <div className={cartStyles.cartWrapper}>
                    <div className={cartStyles.cartDetails}>
                        {State.cart.length > 0 ? (
                            State.cart.map((item) => (
                                <div className={cartStyles.cart} key={item.id}>
                                    <div className={cartStyles.cartLeft}>
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className={cartStyles.cartMiddle}>
                                        <div className={cartStyles.name}>{item.title}</div>
                                        <div className={cartStyles.weight}>{item.category}</div>
                                        <div className={cartStyles.price}>{item.price} USD</div>
                                    </div>
                                    <div className={cartStyles.cartRight}>
                                        <AddItem item={item} />
                                    </div>
                                </div>
                            ))) : (
                            <div className={cartStyles.noItem}>You have no item in your cart</div>
                        )}
                    </div>
                    {State.cart.length > 0 ? (<div className={cartStyles.cartSummary}>
                        <div className={cartStyles.subHeading}>Summary</div>
                        <div className={cartStyles.summary}>
                            {State.cart.length == 1 ? (
                                <div className={cartStyles.summaryLabel}>MPR ({State.cart.length}) item</div>
                            ) : (
                                <div className={cartStyles.summaryLabel}>MPR ({State.cart.length}) items</div>
                            )}

                            <div className={cartStyles.summaryLabel}>{mrp}$</div>
                        </div>
                        <div className={cartStyles.summary}>
                            <div className={cartStyles.summaryLabel}>Discount</div>
                            <div className={`${cartStyles.summaryLabel} ${cartStyles.disc}`}>-{discount}$</div>
                        </div>
                        <div className={`${cartStyles.summary} ${cartStyles.total}`}>
                            <div className={cartStyles.summaryLabel}>Total</div>
                            <div className={cartStyles.summaryLabel}>{Total}$</div>
                        </div>
                        <div className={cartStyles.btnContainer}>
                            <button className={cartStyles.orderBtn} onClick={order}>Place Order</button>
                        </div>
                    </div>
                    ) : null}


                </div>
            </div>
        </>
    )
}

export default Cart;