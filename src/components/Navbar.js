import React, { Component } from "react";
import { FaBars, FarCartPlus, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import logo from "../images/logo.svg";

class Navbar extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { cartItems, handleSidebar, handleCart } = value;
          return (
            <NavWrapper>
              <div className="nav-center">
                <FaBars className="nav-icon" onClick={handleSidebar} />
                <img src={logo} alt="5G store logo" />
                <div className="nav—cart">
                  <FaCartPlus className="nav-icon" onclick={handleCart} />
                  <div className="cart-items">{cartItems}</div>
                </div>
              </div>
            </NavWrapper>
          );
        }}
      </ProductConsumer>
    );
  }
}
const NavWrapper = styled.nav`
  position: sticky;
  top: 0;
  position: -webkit-sticky;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .nav-cart {
    position: relative;
  }
  .cart-items {
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    position: absolute;
    top: 8px;
    right: 15px;
    padding: 0 5px;
    border-radius: 50%;
  }
`;
export default Navbar;
