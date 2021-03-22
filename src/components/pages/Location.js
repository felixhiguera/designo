import React from "react";
import Footer from "../Footer";

import Navbar from "../Navbar";
import canada from "../../assets/locations/canada.png";
import australia from "../../assets/locations/australia.png";
import uk from "../../assets/locations/uk.png";

const countries = [
  {
    id: 1,
    name: "Canada",
    src: canada,
    address: " 3886 Wellington Street Toronto, Ontario M9C 3J5",
    contact: "P : +1 253-863-8967 M : contact@designo.co",
  },
  {
    id: 2,
    name: "Australia",
    src: australia,
    address: "19 Balonne Street New South Wales 2443",
    contact: "  P : (02) 6720 9092 M : contact@designo.au",
  },
  {
    id: 3,
    name: "UnitedKingdom",
    src: uk,
    address: "13 Colorado Way Rhyd-y-fro SA8 9GA",
    contact: "  P : 078 3115 1400 M : contact@designo.uk",
  },
];

const Location = () => {
  return (
    <>
      <Navbar />
      <div className="header-location-grid" id="location-header">
        <div className="header-location-grid-card canada" id="Canada">
          <div className="header-location-grid-text">
            <div>
              <h2>{countries[0].name}</h2>
              <p>
                Designo Central Office <br />
                {countries[0].address}
              </p>
            </div>
            <div className="header-location-grid-contact">
              <p>{countries[0].contact}</p>
            </div>
          </div>
          <div className="header-location-grid-img">
            <img src={countries[0].src} alt="" />
          </div>
        </div>
        <div className="header-location-grid-card-australia" id="Australia">
          <div className="header-location-grid-img ">
            <img src={countries[1].src} alt="" />
          </div>
          <div className="header-location-grid-text ">
            <div>
              <h2>{countries[1].name}</h2>
              <p>
                Designo AU Office <br />
                {countries[1].address}
              </p>
            </div>
            <div className="header-location-grid-contact ">
              <p>{countries[1].contact}</p>
            </div>
          </div>
        </div>
        <div className="header-location-grid-card uk" id="UnitedKingdom">
          <div className="header-location-grid-text">
            <div>
              <h2>{countries[2].name}</h2>
              <p>
                {" "}
                Designo UK Office <br />
                {countries[2].address}
              </p>
            </div>
            <div className="header-location-grid-contact">
              <p>{countries[2].contact}</p>
            </div>
          </div>
          <div className="header-location-grid-img">
            <img src={countries[0].src} alt="" />
          </div>
        </div>

        {/* {countries.map((country) => (
          <div
            key={country.id}
            id={country.name}
            className="header-location-grid-card"
          >
            <div className="header-location-image ">
              <img src={country.src} alt="" />
            </div>
            <div className="header-location-text">
              <div>
                <h2>{country.name}</h2>
                <p>
                  <span>Designo {country.name} Office</span>
                  <br />
                  {country.address}
                </p>
              </div>
            </div>
            <div className="header-location-contact">
              <p>
                <span>Contact </span>
                <br />
                {country.contact}
              </p>
            </div>
          </div>
        ))} */}
      </div>
      <div className="about-white-space"></div>
      <Footer />
    </>
  );
};

export default Location;
