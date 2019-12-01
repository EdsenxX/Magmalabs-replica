import React from "react";

import "./styles/Products.scss";
import Web from "../assets/img/products/web.svg";
import Ecommers from "../assets/img/products/ecommers.svg";
import Mobile from "../assets/img/products/mobile.svg";
import UX from "../assets/img/products/ux.svg";

function Products() {
  return (
    <div className="Products">
      <h2>Exceptional digital products</h2>
      <div className="Products__container">
        <div className="Products__Product">
          <img src={Web} alt="Web development" />
          <div className="info">
            <h3>Web development</h3>
            <p>
              Effective and attractive web apps developed using cutting-edge
              technologies and techniques.{" "}
            </p>
            <p className="link">LEARN MORE</p>
          </div>
        </div>
        <div className="Products__Product">
          <img src={Ecommers} alt="" />
          <div className="info">
            <h3>Ecommerce solutions</h3>
            <p>
              Strategies designed to boost your ecommerce sales with top-notch
              technology.{" "}
            </p>
            <p className="link">LEARN MORE</p>
          </div>
        </div>
        <div className="Products__Product">
          <img src={Mobile} alt="" />
          <div className="info">
            <h3>Mobile development</h3>
            <p>
              High-performance mobile apps that connect brands with customers.{" "}
            </p>
            <p className="link">LEARN MORE</p>
          </div>
        </div>
        <div className="Products__Product">
          <img src={UX} alt="" />
          <div className="info">
            <h3>UX/UI design</h3>
            <p>
              Engaging customer experiences through innovative and beautiful
              digital products.{" "}
            </p>
            <p className="link">LEARN MORE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
