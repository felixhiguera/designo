import React from "react";
import Card from "./Card";
import { HashLink as Link } from "react-router-hash-link";

const cards = [
  { id: 1, className: "web-design", src: "/web-design#web-design-header" },
  { id: 2, className: "app-design", src: "/app-design#app-design-header" },
  {
    id: 3,
    className: "graphic-design",
    src: "/graphic-design#graphic-design-header",
  },
];

const BodyTop = () => {
  return (
    <div>
      <div className="body-top-images">
        {cards.map((card) => (
          <Link to={card.src} key={card.key} className="card">
            <Card className={card.className} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyTop;
