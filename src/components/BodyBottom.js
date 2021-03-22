import React from "react";
import friendly from "../assets/home/friendly-img.png";
import passionate from "../assets/home/passionate-img.png";
import resourceful from "../assets/home/resourceful-img.png";
import CardBottom from "./CardBottom";

const cardsBottom = [
  {
    id: 1,
    image: passionate,
    title: "PASSIONATE",
    paragraph:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
  },
  {
    id: 2,
    image: resourceful,
    title: "RESOURCEFUL",
    paragraph:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
  },
  {
    id: 3,
    image: friendly,
    title: "FRIENDLY",
    paragraph:
      "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
  },
];

const BodyBottom = () => {
  return (
    <div>
      <div className="body-bottom">
        {cardsBottom.map((card) => (
          <div className="card-body-bottom" key={card.id}>
            <CardBottom
              image={card.image}
              title={card.title}
              paragraph={card.paragraph}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyBottom;
