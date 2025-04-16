import React from 'react';
import cardStyles from '../Styles/cards.module.css';
import mangoImg from '../images/mango.png';
import vegImg from '../images/Veggies.png';
import bananaImg from '../images/Banana.png';
const Cards = () =>{
    return(
        <>
            <div className={cardStyles.cardsContainer}>
                <div className={`${cardStyles.card} ${cardStyles.pink}`}>
                    <div className={cardStyles.caption}>
                        Season's fresh & crispy, always!
                    </div>
                    <img src={mangoImg} alt="" className={cardStyles.mango} />
                </div>

                <div className={`${cardStyles.card} ${cardStyles.orange}`}>
                    <div className={cardStyles.caption}>
                        Season's fresh & crispy, always!
                    </div>
                    <img src={vegImg} alt="" className={cardStyles.veg} />
                </div>

                <div className={`${cardStyles.card} ${cardStyles.blue}`}>
                    <div className={cardStyles.caption}>
                        Season's fresh & crispy, always!
                    </div>
                    <img src={bananaImg} alt="" className={cardStyles.banana} />
                </div>
            </div>
        </>
    )
}
export default Cards;