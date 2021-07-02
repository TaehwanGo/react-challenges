import React, { useContext } from 'react';
import { UserContext } from './context';

const Header = () => {
  const {
    user: { name, loggedIn },
  } = useContext(UserContext);
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
