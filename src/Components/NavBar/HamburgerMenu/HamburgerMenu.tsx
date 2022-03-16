import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './HamburgerMenu.css';

const HamburgerMenu: React.FC<{isOpen: boolean, color: string, menuClicked: any}> = () => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        GitHub
      </a>
      <a className="menu-item" href="/salads">
        LinkedIn
      </a>
      <a className="menu-item" href="/pizzas">
        Resumé
      </a>
    </Menu>
  );
};

export default HamburgerMenu