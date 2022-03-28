import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './HamburgerMenu.css';

const HamburgerMenu = () => {

  return (
    <Menu right>
      <a className="menu-item" href="https://github.com/stefanomusicman" target='_blank' rel="noopener noreferrer">GitHub</a>
      <a className="menu-item" href="https://www.linkedin.com/in/stefano-proietti-286497235/" target='_blank' rel="noopener noreferrer">LinkedIn</a>
      <a className="menu-item" href="https://drive.google.com/file/d/1krNV8-s5omYDh4GgpCJ1jQs6WbqkN8i-/view?usp=sharing" target='_blank' rel="noopener noreferrer">Resumé</a>
    </Menu>
  );
};

export default HamburgerMenu