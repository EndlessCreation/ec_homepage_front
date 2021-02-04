import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useMediaQuery } from "react-responsive";

const NavigationBar = styled.div`
  margin: 0;
  padding: 0;
  .nav {
    position: fixed;
    width: 100%;
    height: 120px;
    top: 0px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding-left: 70px;
    padding-right: 70px;
    z-index: 3;
  }

  .navMain {
    display: inline-block;
    font-size: 24px;
    color: #101010;
    font-weight: bold;
    white-space: nowrap;
  }
  .menu {
    display: flex;
    list-style: none;
    font-size: 20px;
    padding: 0;
    margin: 0;
  }
  .menu li:not(:nth-child(1)) {
    padding-left: 32px;
  }
  .menu li:nth-child(4) {
    opacity: 0.2;
  }
  .menu li a {
    text-decoration: none;
    color: #101010;
  }
  .ArrowRight {
    position: relative;
    width: 15px;
    height: 15px;
    font-size: 15px;
    margin-left: 4px;
    color: #fff;
  }
  .nav_Toggle {
    position: absolute;
    right: 100px;
    margin-top: 10px;
    display: none;
  }
  .nav_Toggle span {
    position: absolute;
    transition: 0.3s ease-in-out;
    height: 3px;
    width: 30px;
    border-radius: 7px;
    background-color: #3d4146;
    top: 0;
    transition: 0.3s;
  }
  .nav_Toggle span:nth-child(1) {
    top: -5px;
  }
  .nav_Toggle span:nth-child(2),
  .nav_Toggle span:nth-child(3) {
    top: 5px;
  }
  .nav_Toggle span:nth-child(4) {
    top: 15px;
  }
  @media screen and (max-width: 1280px) {
    .nav {
      padding-left: 80px;
      padding-right: 70px;
      height: 84px;
    }
    .navMain {
      font-size: 31px;
    }
    .menu {
      display: none;
    }
    .nav_Toggle {
      display: block;
      top: 25px;
    }
  }
  ${(props) =>
    props.active &&
    css`
      .nav {
        height: 100%;
        background-color: #232323;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        padding-top: 24px;
      }
      .navMain {
        color: #fff;
      }
      .menu {
        display: flex;
        flex-direction: column;
        font-size: 28px;
        height: 70%;
      }
      .menu li:nth-child(1) {
        padding-top: 130px;
      }
      .menu li:not(:nth-child(1)) {
        padding-left: 0px;
        padding-top: 28px;
      }
      .menu li a {
        color: #fff;
      }
      .nav_Toggle span {
        background-color: #fff;
      }
      .nav_Toggle span:nth-child(1) {
        opacity: 0;
      }
      .nav_Toggle span:nth-child(2) {
        transform: rotate(45deg);
      }
      .nav_Toggle span:nth-child(3) {
        transform: rotate(-45deg);
      }
      .nav_Toggle span:nth-child(4) {
        opacity: 0;
      }
    `}
`;

function Navbar() {
  const [active, setActive] = useState(false);
  const onToggle = () => {
    console.log(active);
    setActive(!active);
  };
  const isPC = useMediaQuery({
    query: "(min-width:1280px)",
  });
  const NavbarText = isPC ? "Endless Creation" : "EC";
  return (
    <NavigationBar onToggle={onToggle} active={active}>
      <div className="nav">
        <span className="navMain">{NavbarText}</span>
        <ul className="menu">
          <li>
            <a href="#">Activity</a>
          </li>
          <li>
            <a href="#">Project</a>
          </li>
          <li>
            <a href="#">Member</a>
          </li>
          <li>
            <a href="#">
              community
              <span className="ArrowRight">
                <img src="images/RightArrow.png" />
              </span>
            </a>
          </li>
        </ul>
        <a href="#" className="nav_Toggle" onClick={onToggle}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
    </NavigationBar>
  );
}

export default Navbar;
