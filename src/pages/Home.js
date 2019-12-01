import React, { Component, Fragment } from "react";

import Menu from "../components/Menu";
import "./styles/Home.scss";

import Products from "../components/Products";
import Solution from "../components/Solution";
import MobileMenu from "../components/MobileMenu";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyMenu: false,
      modalIsOpen: false
    };
  }

  handleOpenModal = () => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };

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
      <Fragment>
        <div className="Home">
          <Menu
            stickyMenu={this.state.stickyMenu}
            onOpenModal={this.handleOpenModal}
          />
          <div className="Home__Hero">
            <div className="Home__Hero__container">
              <div className="logo"></div>
              <h1>
                MagmaLabs builds tailored software solutions to help companies
                execute their vision.{" "}
              </h1>
              <p>With loyal teams achieving quick turn-around. </p>
              <div className="technologies">
                <p>Ruby on Rails</p>
                <p>React</p>
                <p>React Native</p>
                <p>Solidus</p>
                <p>UX desing</p>
              </div>
            </div>
          </div>
          <Products />
          <Solution />
        </div>
        <MobileMenu
          isOpen={this.state.modalIsOpen}
          onClose={this.handleCloseModal}
        />
      </Fragment>
    );
  }
}

export default Home;
