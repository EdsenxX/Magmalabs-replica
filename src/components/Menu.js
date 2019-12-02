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
      <div className="Menu__container">
        <div className="Menu__container__logo" id="logo">
          <img src={Logo} alt="magmalabs logo" />
        </div>
        <div className="Menu__container__Mobile">
          <i className="fas fa-bars" onClick={props.onOpenModal}></i>
        </div>
        <div className="Menu__container__Pages">
          <nav>
            <ul>
              <li>
                <div className="dropdown">
                  <p onClick={mostrar}>
                    OUR SERVICES
                    <i
                      className={`fas fa-chevron-${
                        mostrarSubMenu ? "up" : "down"
                      }`}
                    ></i>
                  </p>
                  {/* {mostrarSubMenu ? (
                    <div className="dropdown__container">
                      <div className="dropdown__content">
                        <p>Web development</p>
                        <p>Ecommerce solutions</p>
                        <p>Mobile development</p>
                        <p>UX/UI design</p>
                      </div>
                    </div>
                  ) : null} */}
                  <div className="dropdown__container">
                    <div className="dropdown__content">
                      <p>Web development</p>
                      <p>Ecommerce solutions</p>
                      <p>Mobile development</p>
                      <p>UX/UI design</p>
                    </div>
                  </div>
                </div>
              </li>
              <li>CASE STUDIES</li>
              <li>ABOUT US</li>
              <li>BLOG</li>
              <li>CONTACT US</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Menu;
