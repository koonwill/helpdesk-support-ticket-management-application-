import './SideBar.css';
import React, { useState } from 'react';
import control from '../assets/images/control.png';
import logo from '../assets/images/logo.png';
import user from '../assets/images/user-2.png';
import menu from '../assets/images/menu-white.png';
import order from '../assets/images/order-food.png';
import promotions from '../assets/images/promotions.png';
import data from '../assets/images/data.png';
import logout from '../assets/images/logout.png';

const defaultSidebar: React.FC = () => {
    const [isOpen, setIsopen] = useState(false);

    const toggleSidebar = () => {
        setIsopen(!isOpen);
    }

    const handleItemClick = (path: string) => {
        window.location.pathname = path;
    }
    
    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <ul>
            <button onClick={toggleSidebar} className="sidebar-control">
                <img src={control} alt="header-control" className="header-control w-8 h-8 absolute right-5 top-5"/>
            </button>
            <img src={logo} alt="sidebar-logo" className="sidebar-logo mt-10"/>
            <li>
                <img src={user} alt="sidebar-user" className="sidebar-icon"/>Username
            </li>
            <li onClick={() => handleItemClick('/menu')}>
                <img src={menu} alt="sidebar-menu" className="sidebar-icon"/>Menu
            </li>
            <li onClick={() => handleItemClick('/order')}>
                <img src={order} alt="sidebar-order" className="sidebar-icon"/>Ordering
            </li>
            <li onClick={() => handleItemClick('/promotions')}>
                <img src={promotions} alt="sidebar-promotions" className="sidebar-icon"/>Promotions
            </li>
            <li onClick={() => handleItemClick('/data')}>
                <img src={data} alt="sidebar-data" className="sidebar-icon"/>Data Analysis
            </li>
            <li onClick={() => handleItemClick('/logout')}>
                <img src={logout} alt="sidebar-logout" className="sidebar-icon"/>Logout
            </li>
        </ul>
        </div>
    );
};

export default defaultSidebar;