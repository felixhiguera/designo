import React from "react";
import HeaderCategories from "../HeaderCategories";
import Navbar from "../Navbar";
// import express from "../../assets/web-design/Express.png";
import express from "../../assets/web-design/desktop/image-express.jpg";
import transfer from "../../assets/web-design/desktop/image-transfer.jpg";
import photon from "../../assets/web-design/desktop/image-photon.jpg";
import builder from "../../assets/web-design/desktop/image-builder.jpg";
import blogr from "../../assets/web-design/desktop/image-blogr.jpg";
import camp from "../../assets/web-design/desktop/image-camp.jpg";
import ProyectCard from "../ProyectCard";
import { HashLink as Link } from "react-router-hash-link";
import Card from "../Card";
import Footer from "../Footer";

const headerNames = {
  title: "Web Design",
  src: "web-design-header",
  paragraph:
    "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
};

const proyectCards = [
  {
    id: 1,
    src: express,
    name: "EXPRESS",
    content: "A multi-carrier shipping website for ecommerce businesses",
  },
  {
    id: 2,
    src: transfer,
    name: "TRANSFER",
    content:
      "  Site for low-cost money transfers and sending money within seconds",
  },
  {
    id: 3,
    src: photon,
    name: "PHOTON",
    content:
      "    A state-of-the-art music player with high-resolution audio and DSP effects",
  },
  {
    id: 4,
    src: builder,
    name: "BUILDER",
    content:
      "  Site for low-  Connects users with local contractors based on their location ",
  },
  {
    id: 5,
    src: blogr,
    name: "BLOGR",
    content:
      "  Site for low-  Blogr is a platform for creating an online blog or publication ",
  },
  {
    id: 6,
    src: camp,
    name: "CAMP",
    content:
      "  Site fo  Get expert training in coding, data, design, and digital marketing ",
  },
];

const cards = [
  { id: 1, className: "app-design", src: "/app-design#app-design-header" },
  {
    id: 2,
    className: "graphic-design",
    src: "/graphic-design#graphic-design-header",
  },
];

const WebDesign = () => {
  return (
    <>
      <Navbar />
      {/* <div id="web-design"></div> */}
      <HeaderCategories headerNames={headerNames} />
      <div className="card-grid">
        {proyectCards.map((card) => (
          <div className="category-card" key={card.id}>
            <ProyectCard card={card} />
          </div>
        ))}
      </div>
      <div className="body-top-images-margin">
        <div className="body-top-images">
          {cards.map((card) => (
            <Link to={card.src} key={card.key} className="card">
              <Card className={card.className} />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WebDesign;
