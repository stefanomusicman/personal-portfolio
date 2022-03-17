import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './HamburgerMenu.css';

const HamburgerMenu = () => {
  return (
    <Menu right>
      <a className="menu-item" href="https://github.com/stefanomusicman" target='_blank' rel="noopener noreferrer">GitHub</a>
      <a className="menu-item" href="/salads">LinkedIn</a>
      <a className="menu-item" href="/pizzas">Resumé</a>
    </Menu>
  );
};

export default HamburgerMenu