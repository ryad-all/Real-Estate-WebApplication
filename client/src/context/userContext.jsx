import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user) {
      console.log("User data updated:", user);
    }
  }, [user]);

  const login = async (jwt) => {
    console.log("LOGIN FUNCTION");
    try {
      // Send a GET request to your backend endpoint to validate the JWT token
      const response = await axios.post(`http://localhost:3000/verify/${jwt}`);
      const { decoded } = response.data; // Assuming the response contains user data after validating the token
      
      console.log('User Data', decoded);
      
      // Set the decoded user data in the state
      setUser(decoded);
      
    } catch (error) {
      console.log('Error token', jwt);
      // Handle invalid or expired tokens here
      console.error('Invalid token:', error);
    }
  };


  // Remove the JWT from storage and clear user data from the state
  const logout = () => {
    clearJWT();
    setUser(null);
  };


  // Retrieve the stored JWT token from local storage
  const getStoredJWT = () => {
    return localStorage.getItem('token');
  };

  // Clear the JWT token from local storage
  const clearJWT = () => {
    localStorage.removeItem('token');
  };

  return (
    <UserContext.Provider value={{user, login, logout}}>
      {children}
    </UserContext.Provider>
  );
};
