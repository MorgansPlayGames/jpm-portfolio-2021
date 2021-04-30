import { useState } from "react";

function CookingEntry(props) {
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
        <p>{entry.experience}</p>
        <p>{entry.time}</p>
      </div>
      )}
      <button onClick={handleClick}>Toggle Entry</button>
    </div>
  );
}

export default CookingEntry;
