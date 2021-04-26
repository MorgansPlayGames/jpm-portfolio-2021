import React from "react";
import Skillsheet from "./Skillsheet"

function Bio() {

  return (
    <>
      <section>
        <p>Hello! I am Parker, I'm full stack developer.</p>
        <p>I can create a website, or update an existing one.</p>
        <p>I can design and set up a database</p>
        <p>I can create an API to submit and recieve data</p>
        <p>I can debug and review code</p>
        <Skillsheet />
        <p>I am a coder and I have never been happier. It is a continuous practice and I am always looking to improve.</p>
      <p>If you need to hire a team player with a driven and positive attitude, please don't hesitate to contact me.</p>
      <p>If you have or need advice, please connect to me on LinkedIn! I would love to have a chat!</p>
      </section>
      <section>
        <img src={process.env.PUBLIC_URL + 'ParkerHeadshot.jpg'} />
      </section>
    </>
  );
}

export default Bio;
