import React, { useState } from "react";
import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #333;
  color: #fff;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: #333;
    padding: 1rem;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const SearchBar = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  outline: none;
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar>
      <Logo>MyLogo</Logo>
      <NavLinks isOpen={isOpen}>
        <NavLink href="#aboutus">About Us</NavLink>
        <NavLink href="#products">Products</NavLink>
        <NavLink href="#contactus">Contact Us</NavLink>
        <SearchBar type="text" placeholder="Search..." />
      </NavLinks>
      <MenuIcon onClick={() => setIsOpen(!isOpen)}>☰</MenuIcon>
    </Navbar>
  );
};

export default Navigation;
