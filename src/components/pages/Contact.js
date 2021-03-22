import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core/";
import CardLocations from "../CardLocations";
import canada from "../../assets/about/canada.png";
import australia from "../../assets/about/australia.png";
import uk from "../../assets/about/uk.png";
import Button from "@material-ui/core/Button";
import { useState } from "react";

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

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { name, email, phone, message } = user;
  const [empty, setEmpty] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const change = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const validation = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === "" ||
      message.trim() === ""
    ) {
      setEmpty(true);
      return;
    } else {
      setEmpty(false);
    }
    if (!er.test(email)) {
      setIsValid(true);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="contact-form" id="contact-header">
        <div className="contact-form-card">
          <div className="contact-form-card-text">
            <h2>Contact us</h2>
            <p>
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </div>
          <form onSubmit={validation} noValidate autoComplete="off">
            <TextField
              className="textfield"
              fullWidth
              required
              id="standard-basic"
              label="Name"
              name="name"
              value={name}
              color="success"
              variant="filled"
              fullWidth
              onChange={change}
            />
            <br />
            <TextField
              required
              id="standard-required"
              label="Email Address"
              name="email"
              value={email}
              color="success"
              variant="filled"
              onChange={change}
              fullWidth
            />
            <br />
            <TextField
              required
              id="standard-required"
              label="Phone"
              name="phone"
              value={phone}
              color="secondary"
              type="number"
              color="success"
              onChange={change}
              variant="filled"
              fullWidth
            />
            <br />
            <TextField
              id="standard-multiline-flexible"
              label="Your Message"
              name="message"
              value={message}
              color="success"
              onChange={change}
              variant="filled"
              fullWidth
            />
            <br />
            <div className="div-input">
              <input className="button" type="Submit" />
            </div>
            {empty ? <p>Can't be empty</p> : null}
            {isValid ? <p>Please use a valid email address</p> : null}
          </form>
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
      <div className="about-white-space"></div>

      <Footer />
    </div>
  );
};

export default Contact;
