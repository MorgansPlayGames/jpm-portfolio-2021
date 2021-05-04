import { useState } from "react";

function TabletopEntry(props) {
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
          <div>
            Experience: 
            {entry.experience ? (
              entry.experience.map((text, i) => {
                return <p key={i}>{text} </p>;
              })
            ) : (
              <p>no experiences? Why is this here?</p>
            )}
          </div>
          <p>Time: {entry.time}F</p>
          <p>Gametype: {entry.gameType}</p>
        </div>
      )}
      <button onClick={handleClick}>Toggle Entry</button>
    </div>
  );
}

export default TabletopEntry;
