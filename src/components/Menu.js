import React, { useState } from "react";

//assets
import "./styles/Menu.scss";
import Logo from "../assets/img/menu/magmalabs-logo.png";

function Menu(props) {
  const MenuDiv = document.getElementById("Menu");
  const LogoDiv = document.getElementById("logo");

  if (window.innerWidth > 770) {
    if (LogoDiv) {
      LogoDiv.style.display = "block";
    }
  } else {
    if (LogoDiv) {
      LogoDiv.style.display = "none";
    }
  }

  if (props.stickyMenu) {
    MenuDiv.classList.add("sticky", "animated", "fadeInDown");
    LogoDiv.style.display = "block";
  } else {
    if (MenuDiv) {
      MenuDiv.classList.remove("sticky", "animated", "fadeInDown");
      if (window.innerWidth <= 770) {
        LogoDiv.style.display = "none";
      }
    }
  }

  const [mostrarSubMenu, setMostrarSubMenu] = useState(false);

  const mostrar = () => {
    if (mostrarSubMenu) {
      setMostrarSubMenu(false);
    } else {
      setMostrarSubMenu(true);
    }
  };

  return (
    <div className="Menu" id="Menu">
      <nav className="Menu__container">
        <div className="Menu__container-logo" id="logo">
          <img src={Logo} alt="Magmalabs logo" />
        </div>
        <div className="Menu__container-content">
          <div className="mobile-menu-icon">
            <i className="fas fa-bars" onClick={props.onOpenModal}></i>
          </div>
          <ul>
            <li onClick={mostrar}>
              OUR SERVICES
              <i
                className={
                  mostrarSubMenu ? "fas fa-chevron-up" : "fas fa-chevron-down"
                }
              ></i>
              {mostrarSubMenu ? (
                <div className="submenu">
                  <p>WEB DEVELOPMENT</p>
                  <p>ECOMMERCE SOLUTIONS</p>
                  <p>MOBILE DEVELOPMENT</p>
                  <p>UX/UI DESIGN</p>
                </div>
              ) : null}
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
