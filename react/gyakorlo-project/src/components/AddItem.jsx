import React, { useContext } from 'react';
import addItemStyles from '../styles/addItem.module.css'
import AppContext from '../services/AppContext';

const AddItem = ({ item }) => {

    const [State, setState] = useContext(AppContext);
    const addItem = () => {
        item.quantity = 1;
        let tempCart = [...State.cart];
        tempCart.push(item);
        setState({ ...State, cart: tempCart });
    }

    const increaseQty = () => {
        item.quantity++;
        let tempCart = [...State.cart];
        let index = tempCart.findIndex((CartItem) => CartItem.id === item.id);
        if (index > -1) tempCart[index].quantity = item.quantity;
        setState({ ...State, cart: tempCart });
    }
    const decreaseQty = () => {
        item.quantity--;
        let tempCart = [...State.cart];
        let index = tempCart.findIndex((CartItem) => CartItem.id === item.id);
        if (index > -1) tempCart[index].quantity = item.quantity;
        setState({ ...State, cart: tempCart });
    }

    return (
        <>
            <div className={addItemStyles.addItemContainer}>
                {item.quantity === 0 ? (
                    <button className={addItemStyles.addItemBtn} onClick={addItem}>Add</button>
                ) : (
                    <div className={addItemStyles.addItem}>
                        <button className={addItemStyles.minusBtn} onClick={decreaseQty}>-</button>
                        <div className={addItemStyles.qty}>{item.quantity}</div>
                        <button className={addItemStyles.plusBtn} onClick={increaseQty}>+</button>
                    </div>
                )}

            </div>
        </>
    )
}

export default AddItem;