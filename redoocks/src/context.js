import React, { useState } from 'react';

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Tony',
    loggedIn: false,
  });
  const logUserIn = () => setUser({ ...user, loggedIn: true });
  // setUser({ ...user, loggedIn: true }) : 기존 항목인 name:'Tony'를 살리고 기존과 똑같은 항목이 추가되면 덮어쓰기 함(loggedIn : false -> true)
  return (
    <UserContext.Provider value={{ user, logUserIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
