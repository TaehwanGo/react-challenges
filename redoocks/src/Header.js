import React, { useContext } from 'react';
import { UserContext, useUser } from './context';

const Header = () => {
  const { name, loggedIn } = useUser();
  return (
    <header>
      <a href="#">Home</a>
      <span>
        {' '}
        Hello, {name}, you are {loggedIn ? 'logged in' : 'anonymous'}
      </span>
    </header>
  );
};

export default Header;
