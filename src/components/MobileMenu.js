import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles/MobileMenu.scss";
import Logo from "../assets/img/menu/magmalabs-logo.png";

const MobileMenu = props => {
  const [mostrarSubmenu, setMostrarSubmenu] = useState(false);

  const mostrar = () => {
    if (mostrarSubmenu) {
      setMostrarSubmenu(false);
    } else {
      setMostrarSubmenu(true);
    }
  };

  if (!props.isOpen) return null;
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container animated bounceInRight">
        <div className="close">
          <i
            className="fas fa-long-arrow-alt-right"
            onClick={props.onClose}
          ></i>
        </div>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="options">
          <p onClick={mostrar}>
            SERVICES
            {mostrarSubmenu ? (
              <i className="fas fa-chevron-up"></i>
            ) : (
              <i className="fas fa-chevron-down"></i>
            )}
          </p>

          {mostrarSubmenu ? (
            <div className="submenu">
              <p>WEB DEVELOPMENT</p>
              <p>ECOMMERCE SOLUTIONS</p>
              <p>MOBILE DEVELOPMENT</p>
              <p>UX/UI DESIGN</p>
            </div>
          ) : null}

          <p>CASE STUDIES</p>
          <p>ABOUT US</p>
          <p>BLOG</p>
          <p>CONTACT US</p>
        </div>
        <div className="socialNetworks">
          <ul>
            <li>
              <i className="fab fa-facebook-f"></i>
            </li>
            <li>
              <i className="fab fa-twitter"></i>
            </li>
            <li>
              <i className="fab fa-github-alt"></i>
            </li>
            <li>
              <i className="fab fa-linkedin"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default MobileMenu;
