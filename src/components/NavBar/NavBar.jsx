import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { menu_list_items, terms } from "../../json/menu";
import "./NavBar.css";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  function handleToggle(){
    setOpenMenu(prev => !prev)
  }
  return (
    <>
      <nav className="nav">
        <div className="logo">
          <img src="src/assets/images/logo.svg" alt="" />
        </div>

        <div className="menu">
          <img src="src/assets/images/stay-book-now.svg" alt="" />
          <div className="menu-parent" onClick={handleToggle}>
            <div className="menu-icon-border" ></div>
            <CiMenuFries className="menu-icon" />
          </div>
        </div>
      </nav>
{openMenu && (<div className="nav-menu">
        <div className="menu-parent" onClick={handleToggle}>
          <div className="menu-icon-border" ></div>
          <IoCloseOutline className="menu-icon" />
        </div>
        <div className="menu-list">
          <ul>
            {menu_list_items.map((item) => (
              <li>{item.name}</li>
            ))}
          </ul>
        </div>

        <div className="menu-intro">
          <h4>TRUNK（HOTEL）YOYOGI PARK</h4>
          <p>1-15-2 Tomigaya Shibuya-ku Tokyo 151-0063 JAPAN</p>
          <p>tel. 03-5454-3210</p>
          <p>email. yoyogipark@trunk-hotel.com</p>
          <FaInstagram className="menu-insta-icon" />
          <h4>Our Hotels</h4>
          <div className="privacy">
            {terms.map((item) => (
              <span>{item.name}</span>
            ))}
          </div>
          <div className="copyrights">
            <p>© TRUNK co.,ltd. All Rights Reserved.</p>
          </div>
        </div>
      </div>)}
      
    </>
  );
};

export default NavBar;
