import React from 'react';
import popularStyles from '../Styles/popular.module.css';
import AddItem from "./AddItem";

const Popular = ({ title, items }) => {
    return (
        <>
            <div className={popularStyles.popularContainer}>
                <div className={popularStyles.heading}>{title}</div>
                <div className={popularStyles.items}>
                    {items.map(item => {
                        return (
                            <div className={popularStyles.item} key={item.id}>
                                <div className={popularStyles.picContainer}>
                                    <img src={item.image} alt="" />
                                </div>
                                <div className={popularStyles.dataContainer}>
                                    <div className={popularStyles.name}>{item.title}</div>
                                    <div className={popularStyles.weight}>{item.category}</div>
                                    <div className={popularStyles.price}>
                                        <div className={popularStyles.current}>{item.price} USD</div>
                                    </div>
                                    <div className={popularStyles.cta}><AddItem item={item} /></div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Popular;