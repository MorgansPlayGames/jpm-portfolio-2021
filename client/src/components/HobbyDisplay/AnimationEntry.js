import { useState } from "react";

function AnimationEntry(props) {
  const [open, setOpen] = useState("closed");
  function handleClick() {
    open === "closed" ? setOpen("open") : setOpen("closed");
  }

  let entry = props.entry;
  return (
    <div className="entry">
      {open === "closed" ? (
        <div>
          <h2>{entry.name}</h2>
          <h4>{entry.subtitle}</h4>
        </div>
      ) : (
        <div>
          <h2>{entry.name}</h2>
          <h4>{entry.subtitle}</h4>
          {!(entry.fileType) 
          ? <img src={process.env.PUBLIC_URL + entry.link} alt={entry.name} />
          : <video src={process.env.PUBLIC_URL + entry.link} controls>
          <p>Your browser doesn't support HTML5 video. Here is a <a href={process.env.PUBLIC_URL + entry.link}>link to the video</a> instead.</p>
        </video>
          }
          </div>
      )}
      <button onClick={handleClick}>Toggle Entry</button>
    </div>
  );
}

export default AnimationEntry;
