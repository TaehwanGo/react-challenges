import React, { useContext } from 'react';
import Header from './Header';

const Screen = ({ user }) => {
  return (
    <div>
      <Header user={user} />
      <h1>First screen</h1>
    </div>
  );
};

export default Screen;
