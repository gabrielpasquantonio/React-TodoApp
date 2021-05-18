import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import styled from "styled-components";
import "./header.css";

function Header() {
  return (
    <Nav>
      <Logo>
        <span>Gabriel Pasquantonio Workspace</span>
      </Logo>

      <NavMenu>
       
        <a href="https://github.com/gabrielpasquantonio">
        <GitHubIcon  />
          <span>GIT HUB</span>
        </a>
        <a
      href="https://www.linkedin.com/in/gabrielpasquantonio/"
      
    >
      <LinkedInIcon />
      <span>LINKED IN</span>
      </a>
        
      </NavMenu>
      <Login> <img
      src="https://avatars.githubusercontent.com/u/64622616?s=400&u=18457496f8a4ebbec20cfbd949a2feb367e3af5e&v=4"
      alt="Gabriel Pasquantonio"
      
    /></Login>
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  letter-spacing: 3px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 20px;
  
  margin-top: 4px;
  max-height: 70px;
  font-size: 10;
  
  img {
    display: block;
    width: 100%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  
  margin-left: auto;
  a {
    fontSize:large;
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
 
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
  img {
    display: flex;
  max-height: 70px;
  }
`;






export default Header;

