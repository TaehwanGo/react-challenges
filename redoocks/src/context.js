import React, { useContext, useState } from 'react';

const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Tony',
    loggedIn: false,
  });
  const logUserIn = () => setUser({ ...user, loggedIn: true });
  // setUser({ ...user, loggedIn: true }) : 기존 항목인 name:'Tony'를 살리고 기존과 똑같은 항목이 추가되면 덮어쓰기 함(loggedIn : false -> true)
  return (
    <UserContext.Provider value={{ user, fn: { logUserIn } }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const { user } = useContext(UserContext);
  return user;
};

export const useFns = () => {
  const { fn } = useContext(UserContext);
  return fn;
};

export default UserContextProvider;
