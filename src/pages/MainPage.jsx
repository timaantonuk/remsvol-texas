import React from "react";
import AboutUs from '../components/AboutUs';
import Header from '../components/Header';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import GalleryComponent from "../components/GalleryComponent";


const MainPage = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <Services />
      <Reviews />
      <GalleryComponent/>

    </>
  );
};

export default MainPage;
