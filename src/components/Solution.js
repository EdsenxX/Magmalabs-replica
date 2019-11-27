import React from "react";

import "./styles/Solution.scss";

function Solution() {
  return (
    <div className="Solution">
      <div className="Solution__Container">
        <h2>From concept to solution</h2>
        <img
          src="https://www.magmalabs.io/images/services/pm.svg"
          alt="concept to solution"
        />
        <p>
          With the help of Agile methodologies and multidisciplinary teams,
          MagmaLabs ensures the quality of product development and sustainable
          work-pace oriented to give the best value to our customers. We use
          modern tools to help continuous communication, task organization, and
          weekly iterations of focused work.{" "}
        </p>
        <h3>Our product development process</h3>
        <img
          className="process"
          src="https://www.magmalabs.io/images/process-horizontal-01.svg"
          alt="development process"
        />
        <button>CONTACT AN EXPERT</button>
      </div>
    </div>
  );
}

export default Solution;
