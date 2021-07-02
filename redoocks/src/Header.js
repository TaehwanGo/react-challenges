import React, { useContext } from 'react';

const Header = ({ user }) => (
  <header>
    <a href="#">Home</a>
    <span> Hello, {user.name}!</span>
  </header>
);

export default Header;
