import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { GlobalContext } from '../Context/GlobalState';
import logo from './image/logo3.jpg';


const Header = () => {
    const { watchList } = useContext(GlobalContext);
    return (
        <div className="col-md-2 col1">
            <div className='logo-image'>
                <img className='logo' src={logo} alt="" />
            </div>
            <div className="navbar">
                <ul className='ulist'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/addtolist">Wishlist ({watchList.length > 0 ? watchList.length : null})</NavLink></li>
                    
                </ul>
            </div>
        </div>

    )
}

export default Header