import React from "react";
import Skillsheet from "./Skillsheet";
import "./styles.css";

function Bio() {
  return (
    <>
      <section id="Bio">
        <div className="introduction navy1">
          <h3>Hello! I am Parker, I'm full stack developer.</h3>
          <h4>I can create a website, or update an existing one.</h4>
          <h4>I can design and set up a database.</h4>
          <h4>I can create an API to submit and recieve data.</h4>
          <h4>and I can also debug and review code!</h4>
        </div>
        <Skillsheet />
        <p>
          I am a coder and I have never been happier. It is a continuous
          practice and I am always looking to improve.
        </p>
        <p>
          If you need to hire a team player with a driven and positive attitude,
          please don't hesitate to contact me.
        </p>
        <p>
          If you have or need advice, please connect to me on LinkedIn! I would
          love to have a chat!
        </p>
      </section>
      <section>
        <img
          id="headshot"
          src={process.env.PUBLIC_URL + "images/ParkerHeadshot.jpg"}
          alt="Parker's headshot"
        />
      </section>
    </>
  );
}

export default Bio;
