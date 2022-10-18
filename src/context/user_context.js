import React, { useContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();

  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      setAuthUser(user);
    }
  }, [user, isAuthenticated]);

  //logout({ returnTo: window.location.origin })

  const value = {
    authUser,
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    logout,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
