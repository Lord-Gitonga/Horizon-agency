//import React, {useState} from "react";
//import './Header.css'
//
//const nav_links = [
//    {
//        path: '#home',
//        display:'Home'
//    },
//    {
//        path: '#about',
//        display:'About'
//    },
//    {
//        path: '#service',
//        display:'Services'
//    },
//    {
//        path: '#projects',
//        display:'Projects'
//    },
//    {
//        path: '#Blog',
//        display:'Blog'
//    },
//]
//
//function Header() {
//    const [lightMode, setLightMode] = useState(false);
//
//  let themeIcon = lightMode ? "light_mode" : "dark_mode";
//  let themeName = lightMode ? "Light" : "Dark";
//
//  let toggleLightMode = () => {
//    if (lightMode) {
//      document.querySelector("body").classList.toggle("dark");
//    } else {
//      document.querySelector("body").classList.toggle("dark");
//    }
//  };
//
//    return (
//
//        <header className="header">
//            <div className="container">
//                <div className="nav_wrapper">
//                    <div className="logo">
//                        <h2>Digital-Wave</h2>
//                    </div>
//                     <div className="navigation">
//                        <ul className="menu">
//                            {
//                                nav_links.map((item, index) => (
//                                    <li className="menu_item"><a href={item.path} className="menu_link">
//                                        {item.display}
//                                    </a>
//                                    </li>
//                                ))
//                            }
//                        </ul>
//                    </div>
//                    <div className="light_mode">
//                        <span>
//                            <i class="ri-sun-line"></i>Light Mode
//                        </span>
//                    </div>
//                </div>
//            </div>
//            <div id="web-mode">
//        <i
//          onClick={() => {
//            setLightMode(!lightMode);
//            toggleLightMode();
//          }}
//          className="material-icons"
//        >
//          {themeIcon}
//        </i>
//        <h4>{themeName}</h4>
//      </div>
//        </header>
//    )
//}
//    
//export default Header

import { useState } from "react";
import "./Header.css";

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
  // light/dark mode;
  const [lightMode, setLightMode] = useState(false);

  let themeIcon = lightMode ? "light_mode" : "dark_mode";
  let themeName = lightMode ? "Light" : "Dark";

  let toggleLightMode = () => {
    if (lightMode) {
      document.querySelector("body").classList.toggle("dark");
    } else {
      document.querySelector("body").classList.toggle("dark");
    }
  };

  return (
    <nav>
      <div id="nav-main-content">
        <div id="logo">
          <h2>Digital-Wave</h2>
        </div>
        <div id="links-container">
        
                            {
                                nav_links.map((item, index) => (
                                    <li  key={index}><a href={item.path} >
                                        {item.display}
                                    </a>
                                    </li>
                                ))
                            }
                        
                        
        </div>
      </div>
      <div id="web-mode">
        <i
          onClick={() => {
            setLightMode(!lightMode);
            toggleLightMode();
          }}
          className="material-icons"
        >
          {themeIcon}
        </i>
        <h4>{themeName}</h4>
      </div>
    </nav>
  );
}

export default Header;

