import React from "react";

//assets
import "./styles/Menu.scss";
import Logo from "../assets/img/menu/magmalabs-logo.png";

function Menu(props) {
  const Menu = document.getElementById("Menu");
  if (props.stickyMenu) {
    Menu.classList.add("sticky", "animated", "fadeInDown");
  } else {
    if (Menu) {
      // if (Menu.classList.contains("fadeInDown")) {
      //   Menu.classList.add("fadeOutUp");
      // }
      Menu.classList.remove("sticky", "animated", "fadeInDown");
    }
  }

  return (
    <div className="Menu" id="Menu">
      <nav className="Menu__container">
        <div className="Menu__container-logo">
          <img src={Logo} alt="Magmalabs logo" />
        </div>
        <div className="Menu__container-content">
          <ul>
            <li>
              OUR SERVICES <i className="fas fa-sort-down"></i>
            </li>
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
