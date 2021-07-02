import React from 'react';

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => (
  <UserContext.Provider
    value={{
      name: 'Tony',
    }}
  >
    {children}
  </UserContext.Provider>
);

export default UserContextProvider;
