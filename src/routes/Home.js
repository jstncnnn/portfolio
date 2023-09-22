import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import Services from "../components/Services";
import ContactMe from "../components/ContactMe";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Home;
