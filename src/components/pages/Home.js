import React, { useState } from "react";
import Navbar from "../Navbar";
import Header from "../Header";
import BodyTop from "../BodyTop";
import BodyBottom from "../BodyBottom";
import LetsTalk from "../LetsTalk";
import Footer from "../Footer";

const Home = () => {
  const headerId = { id: "/#home-header" };
  return (
    <div>
      <Navbar />
      <Header />
      <BodyTop />
      <BodyBottom />
      <Footer />
    </div>
  );
};

export default Home;
