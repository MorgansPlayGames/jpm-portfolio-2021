import hobbies from "../../lib/hobbyList";
import { useState } from "react";
import VideogameEntry from "./VideogameEntry";

function VideogameDisplay() {
  const [openDisplay, setOpenDisplay] = useState({
    main: "closed",
  });

  function handleClick(e) {
    let displayName = e.target.value;
    console.log(openDisplay);
    openDisplay[displayName] === "closed"
      ? setOpenDisplay({ [displayName]: "open" })
      : setOpenDisplay({ [displayName]: "closed" });
  }

  function getDisplay() {
    let list = hobbies.filter((list) => list.type === "videogames");
    let entries = list[0].list.map((entry, i) => {
      return <VideogameEntry key={i} entry={entry} />;
    });
    return entries;
  }

  return (
    <section className="display">
      {openDisplay.main === "closed" ? (
        <h2>Videogame!?</h2>
      ) : (
        <div>
          <h2>Videogame!!</h2>
          {getDisplay()}
        </div>
      )}
      <button value="main" onClick={handleClick}>
        Toggle Section
      </button>
    </section>
  );
}
export default VideogameDisplay;
