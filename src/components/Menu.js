import React, { useState, useEffect } from "react";

//assets
import "./styles/Menu.scss";

function Menu(props) {
  const MenuDiv = document.getElementById("Menu");

  if (props.stickyMenu) {
    MenuDiv.classList.add("sticky", "animated", "fadeInDown");
  } else {
    if (MenuDiv) {
      MenuDiv.classList.remove("sticky", "animated", "fadeInDown");
    }
  }

  const [quitarLogo, setQuitarLogo] = useState(window.innerWidth <= 770);

  useEffect(() => {
    setQuitarLogo(window.innerWidth <= 770);
    const Logo = document.getElementById("logo");
    if (!quitarLogo) {
      Logo.classList.add("conImagen");
    } else if (quitarLogo && props.stickyMenu) {
      Logo.classList.add("conImagen");
    } else if (quitarLogo) {
      Logo.classList.remove("conImagen");
    }
  });

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
        <div className="Menu__container__logo">
          <div className="imagen" id="logo"></div>
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
                  {mostrarSubMenu ? (
                    <div className="dropdown-container">
                      <div className="dropdown-content">
                        <p>Web development</p>
                        <p>Ecommerce solutions</p>
                        <p>Mobile development</p>
                        <p>UX/UI design</p>
                      </div>
                    </div>
                  ) : null}
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
