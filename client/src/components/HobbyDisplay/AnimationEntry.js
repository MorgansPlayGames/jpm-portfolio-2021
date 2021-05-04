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
          <img src={process.env.PUBLIC_URL + entry.link} alt={entry.name} />
        </div>
      )}
      <button onClick={handleClick}>Toggle Entry</button>
    </div>
  );
}

export default AnimationEntry;
