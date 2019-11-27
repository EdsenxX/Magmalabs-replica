import React, { Component } from "react";

import Menu from "../components/Menu";
import "./styles/Home.scss";

import Products from "../components/Products";
import Solution from "../components/Solution";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyMenu: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 104) {
        this.setState({ stickyMenu: true });
      } else {
        this.setState({ stickyMenu: false });
      }
    });
  }

  render() {
    return (
      <div className="Home">
        <Menu stickyMenu={this.state.stickyMenu} />
        <div className="Home__Hero">
          <div className="Home__Hero__container">
            <h1>
              MagmaLabs builds tailored software solutions to help companies
              execute their vision.{" "}
            </h1>
            <p>With loyal teams achieving quick turn-around. </p>
            <ul>
              <li>Ruby on Rails</li>
              <li>React</li>
              <li>React Native</li>
              <li>Solidus</li>
              <li>UX desing</li>
            </ul>
          </div>
        </div>
        <Products />
        <Solution />
      </div>
    );
  }
}

export default Home;
