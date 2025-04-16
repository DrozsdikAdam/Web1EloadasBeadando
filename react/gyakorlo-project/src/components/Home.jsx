import React, { useContext, useEffect, useState } from "react";
import Banner from "./Banner";
import Cards from "./Cards";
import Popular from "./Popular";
import AppContext from "../services/AppContext";


const Home = () => {

    const [State, setState] = useContext(AppContext);
    const [Clothes, setClothes] = useState([]);
    const [Electronics, setElectronics] = useState([]);

    const fetchProducts = () => {
        fetch("https://fakestoreapi.com/products").then(res => {
            //console.log(res);
            res.json().then(response => {
                console.log(response);
                let products = response;
                for(let product of products)
                    {
                        product.quantity = 0;
                    }

                categorize(products);
                setState({ ...State, products });
            });
        });

    };

    const categorize = (Products) => {
        let tempClothes = [];
        let tempElectronics = [];
        // && product.rating.rate > 3.5  
        for (let product of Products) { 
            if (product.category === "men's clothing") tempClothes.push(product);
            else if (product.category === "electronics") tempElectronics.push(product);
        }
        tempClothes.sort((a,b) => b.rating.rate - a.rating.rate);
        tempElectronics.sort((a,b) => b.rating.rate - a.rating.rate);
        
        tempClothes = tempClothes.slice(0,4);
        tempElectronics = tempElectronics.slice(0,4);
        setClothes(tempClothes);
        setElectronics(tempElectronics);
    }

    useEffect(() => {
        if (State.products.length === 0) fetchProducts();
        else categorize(State.products);
    }, [])

    return (
        <>
            <Banner />
            <Cards />
            <Popular title="Popular Clothes" items={Clothes} />
            <Popular title="Popular Electronics" items={Electronics} />
        </>
    )
}
export default Home;