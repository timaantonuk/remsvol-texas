import React from "react";
import AboutUs from "../components/AboutUs";
import Header from "../components/Header";
import Services from "../components/Services";
import Reviews from "../components/Reviews";
import GalleryComponent from "../components/GalleryComponent";
import ApplyForm from "./ApplyForm";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <Services />
      <Reviews />
      <GalleryComponent />
      <ApplyForm />
      <ContactUs />
      <Footer />
    </>
  );
};

export default MainPage;
