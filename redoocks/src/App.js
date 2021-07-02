import React, { useState } from 'react';
import Screen from './Screen';
// import UserContextProvider from './context';

function App() {
  const [user] = useState({
    name: 'Tony',
  });
  return (
    <>
      <Screen user={user} />
    </>
  );
}

export default App;
