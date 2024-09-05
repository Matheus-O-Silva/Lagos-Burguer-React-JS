import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FoodItems from "../components/FoodItems";
import Hero1 from '../components/Hero1'
import Food from '../components/Food';
import Category from '../components/Category';

const Menu = () => {
   return (
      <>
         <Navbar />
         <Hero1 />
         <FoodItems />
         <Footer />
      </>
   );
};

export default Menu;
