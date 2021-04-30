import { useState } from "react";

function VideogameEntry(props) {
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
          <p>{entry.history}</p>
          <p>{entry.timePlayed}</p>
          <p>{entry.amountPlayed}</p>
        </div>
      )}
      <button onClick={handleClick}>Toggle Entry</button>
    </div>
  );
}

export default VideogameEntry;
