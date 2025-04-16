import React, { useContext, useEffect, useState } from 'react';
import itemStyles from '../styles/items.module.css'
import { useParams } from 'react-router-dom';
import AppContext from '../services/AppContext';
import AddItem from './AddItem';

const Items = () => {

    const params = useParams();
    const type = params["type"];
    const [State, setState] = useContext(AppContext);
    const [Items, setItems] = useState([]);

    useEffect(() => {
        let tempItems = [];
        for (let products of State.products) {
            if (products.category === type) tempItems.push(products);
        }
        setItems(tempItems);
    }, [type, State.products])

    return (
        <>
            <div className={itemStyles.itemsContainer}>
                <div className={itemStyles.heading}>All {type}</div>
            </div>

            {Items.map(item => {
                return (
                    <div className={itemStyles.item} key={item.id}>
                        <div className={itemStyles.picContainer}>
                            <img src={item.image} alt="" />
                        </div>
                        <div className={itemStyles.dataContainer}>
                            <div className={itemStyles.name}>{item.title}</div>
                            <div className={itemStyles.weight}>{item.category}</div>
                            <div className={itemStyles.price}>
                                <div className={itemStyles.current}>{item.price} USD</div>
                            </div>
                            <div className={itemStyles.cta}><AddItem item={item} /></div>
                        </div>

                    </div>
                )
            })}
        </>
    )
}
export default Items;