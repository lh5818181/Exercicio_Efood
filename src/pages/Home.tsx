import React from 'react';
import Banner from '../components/Banner';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <ProductList />
      <Footer />
    </>
  );
};

export default Home;
