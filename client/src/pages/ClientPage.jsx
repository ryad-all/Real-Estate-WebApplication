import React from 'react';
import Header from '../components/Header';
import PropertyCards from '../components/PropertyCards';
import Footer from '../components/Footer'
import { useUserContext } from '../context/userContext';

const ClientPage = () => {
  const { user, logout } = useUserContext();
  return (
    <div>
      <Header />
        <PropertyCards />
        <Footer/>
      </div>
  );
};

export default ClientPage;
