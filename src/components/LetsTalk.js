import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const LetsTalk = () => {
  return (
    <div className="letstalk">
      <div className="letstalk-text">
        <h2> Let’s talk about your project</h2>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <div>
        <Link to="/contact#contact-header">
          <button> Get in touch</button>
        </Link>
      </div>
    </div>
  );
};

export default LetsTalk;
