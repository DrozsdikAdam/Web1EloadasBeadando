import React, { useContext } from 'react';
import headerStyles from '../styles/header.module.css';
import cartimg from '../images/cart.png';
import AppContext from '../services/AppContext';
import AuthContext from '../services/AuthContext';
import { NavLink } from 'react-router-dom'
import userImg from '../images/user.png';


const Header = () => {

    const [State, setState] = useContext(AppContext);
    const [isloggedin, setisloggedin] = useContext(AuthContext);

    return (
        <>
            <div className={headerStyles.headerContainer}>
                <div className={headerStyles.logo}>
                    <NavLink to="/home">Freshkart</NavLink>
                </div>
                <div className={headerStyles.nav}>
                    <div className={headerStyles.navItem}>
                        <NavLink className={({ isActive }) => isActive ? `${headerStyles.active}` : ""} to="/items/men's clothing">Clothes</NavLink>
                    </div>
                    <div className={headerStyles.navItem}>
                        <NavLink className={({ isActive }) => isActive ? `${headerStyles.active}` : ""} to="/items/electronics">Electronics</NavLink>
                    </div>
                </div>
                <div className={headerStyles.cart}>
                    <NavLink to="/cart">
                        <img src={cartimg} alt="" />
                        {State.cart.length > 0 ? (
                            <div className={headerStyles.count} >{State.cart.length}</div>
                        ) : null}
                        <span>Cart</span>
                    </NavLink>
                </div>

                {isloggedin ? (
                    <div className={headerStyles.user}>
                        <img src={userImg} alt="" />
                        <div className={headerStyles.menuContainer}>
                            <div className={headerStyles.menu}>
                                <div className={headerStyles.menuItem}>My Profile</div>
                                <div className={headerStyles.menuItem}>Order History</div>
                                <div className={headerStyles.menuItem} onClick={() => {setisloggedin(false); alert("you logged out");}}>Logout</div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={headerStyles.login}><NavLink to="/login">Login</NavLink></div>
                )}
            </div>
        </>
    )
}

export default Header;