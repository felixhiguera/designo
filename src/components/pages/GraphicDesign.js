import React from "react";
import HeaderCategories from "../HeaderCategories";
import Navbar from "../Navbar";
import ProyectCard from "../ProyectCard";
import { HashLink as Link } from "react-router-hash-link";
import Card from "../Card";
import Footer from "../Footer";

import change from "../../assets/graphic-design/desktop/image-change.jpg";
import boxed from "../../assets/graphic-design/desktop/image-boxed-water.jpg";
import science from "../../assets/graphic-design/desktop/image-science.jpg";
const proyectCards = [
  {
    id: 1,
    src: change,
    name: " Tim Brown",
    content: "    A book cover designed for Tim Brown’s new release, ‘Change’",
  },
  {
    id: 2,
    src: boxed,
    name: "Boxed water",
    content: "      A simple packaging concept made for Boxed Water",
  },
  {
    id: 3,
    src: science,
    name: "Science!",
    content: "A poster made in collaboration with the Federal Art Project",
  },
];

const cards = [
  { id: 1, className: "web-design", src: "/web-design#web-design-header" },
  { id: 2, className: "app-design", src: "/app-design#app-design-header" },
];

const headerNames = {
  title: "Graphic Design",
  src: "graphic-design-header",
  paragraph:
    "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
};

const GraphicDesign = () => {
  return (
    <>
      <Navbar />
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

export default GraphicDesign;
