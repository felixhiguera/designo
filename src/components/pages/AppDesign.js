import React from "react";
import HeaderCategories from "../HeaderCategories";
import Navbar from "../Navbar";
import ProyectCard from "../ProyectCard";
import { HashLink as Link } from "react-router-hash-link";
import Card from "../Card";
import Footer from "../Footer";

import airfilter from "../../assets/app-design/desktop/image-airfilter.jpg";
import eyecam from "../../assets/app-design/desktop/image-eyecam.jpg";
import faceit from "../../assets/app-design/desktop/image-faceit.jpg";
import todo from "../../assets/app-design/desktop/image-todo.jpg";
import loopstudios from "../../assets/app-design/desktop/image-loopstudios.jpg";

const headerNames = {
  title: "App Design",
  src: "app-design-header",
  paragraph:
    "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
};
const proyectCards = [
  {
    id: 1,
    src: airfilter,
    name: "AIRFILTER",
    content:
      "  Solving the problem of poor indoor air quality by filtering the air",
  },
  {
    id: 2,
    src: eyecam,
    name: "EYECAM",
    content:
      "    Product that lets you edit your favorite photos and videos at any time",
  },
  {
    id: 3,
    src: faceit,
    name: "FACEIT",
    content:
      " Get to meet your favorite internet superstar with the faceit app",
  },
  {
    id: 4,
    src: todo,
    name: "TODO",
    content: " A todo app that features cloud sync with light and dark mode ",
  },
  {
    id: 5,
    src: loopstudios,
    name: "LOOPSTUDIOS",
    content: "A VR experience app made for Loopstudios ",
  },
];
const cards = [
  { id: 1, className: "web-design", src: "/web-design#web-design-header" },
  {
    id: 2,
    className: "graphic-design",
    src: "/graphic-design#graphic-design-header",
  },
];

const AppDesign = () => {
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

export default AppDesign;
