import React from 'react';

//assets
import './styles/Menu.scss';
import Logo from '../assets/img/menu/magmalabs-logo.png';

function Menu() {
    return (
        <div className="Menu">
            <nav className="Menu__container">
                <div className="Menu__container-logo">
                    <img src={Logo} alt="Magmalabs logo" />
                </div>
                <div className="Menu__container-content">
                    <ul>
                        <li>OUR SERVICES <i class="fas fa-sort-down"></i> </li>
                        <li>CASE STUDIES</li>
                        <li>ABOUT US</li>
                        <li>BLOG</li>
                        <li>CONTACT US</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Menu;