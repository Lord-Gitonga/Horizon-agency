import './Header.css'
import React from "react";

const nav_links = [
    {
        path: '#home',
        display:'Home'
    },
    {
        path: '#about',
        display:'About'
    },
    {
        path: '#service',
        display:'Services'
    },
    {
        path: '#projects',
        display:'Projects'
    },
    {
        path: '#Blog',
        display:'Blog'
    },
]

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="nav_wrapper">
                    <div className="logo">
                        <h2>Digital-Wave</h2>
                    </div>
                     <div className="navigation">
                        <ul className="menu">
                            {
                                nav_links.map((item, index) => (
                                    <li className="menu_item"><a href={item.path} className="menu_link">
                                        {item.display}
                                    </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="light_mode">
                        <span>
                            <i class="ri-sun-line"></i>Light Mode
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}
    
export default Header

