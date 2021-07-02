import React, { useContext } from 'react';
import { UserContext } from './context';

const Header = () => {
  const { name } = useContext(UserContext);
  return (
    <header>
      <a href="#">Home</a>
      <span> Hello, {name}!</span>
    </header>
  );
};

export default Header;
