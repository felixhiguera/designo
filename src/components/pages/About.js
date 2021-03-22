import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import hero from "../../assets/about/mobile/image-about-hero.jpg";
import HeaderCategories from "../HeaderCategories";
import worldClass from "../../assets/about/desktop/image-world-class-talent.jpg";
import CardLocations from "../CardLocations";
import canada from "../../assets/about/canada.png";
import australia from "../../assets/about/australia.png";
import uk from "../../assets/about/uk.png";
import real from "../../assets/about/desktop/image-real-deal.jpg";

const headerNames = {
  title: "About Us",
  paragraph:
    "Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences.",
};

const locations = [
  {
    id: 1,
    src: canada,
    title: "CANADA",
    button: "/location#Canada",
  },
  {
    id: 2,
    src: australia,
    title: "AUSTRALIA",
    button: "/location#Australia",
  },
  {
    id: 3,
    src: uk,
    title: "UK",
    button: "/location#UnitedKingdom",
  },
];

const About = () => {
  return (
    <>
      <Navbar />
      <div className="header-about-grid" id="about-header">
        <div className="header-about-image">
          <img src={hero} alt="" />
        </div>
        <div className="header-about-text">
          {/* <HeaderCategories headerNames={headerNames} /> */}

          <h2>{headerNames.title}</h2>
          <p>{headerNames.paragraph}</p>
        </div>
      </div>
      <div className="about-world-class-grid">
        <div className="about-world-class-img">
          <img src={worldClass} alt="" />
        </div>
        <div className="about-world-class-text">
          <h1>World-class talent</h1>
          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p>
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
      </div>
      <div className="about-locations-grid">
        {locations.map((location) => (
          <div key={location.id}>
            <CardLocations
              title={location.title}
              src={location.src}
              button={location.button}
            />
          </div>
        ))}
      </div>
      <div className="about-world-class-grid">
        <div className="about-world-class-img">
          <img src={real} alt="" />
        </div>
        <div className="about-world-class-text">
          <h1>The real deal</h1>
          <p>
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p>
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
      </div>
      <div className="about-white-space"></div>

      <Footer />
    </>
  );
};

export default About;
