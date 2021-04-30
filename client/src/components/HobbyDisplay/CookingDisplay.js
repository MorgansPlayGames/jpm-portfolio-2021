import hobbies from "../../lib/hobbyList";
import { useState } from "react";
import CookingEntry from "./CookingEntry";

function CookingDisplay() {
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
    let list = hobbies.filter((list) => list.type === "cooking");
    console.log(list[0].list);
    let entries = list[0].list.map((entry, i) => {
      return <CookingEntry key={i} entry={entry} />;
    });
    return entries;
  }

  return (
    <section>
      {openDisplay.main === "closed" ? (
        <h2>Foodie Stuff</h2>
      ) : (
        <div>
          <h2>Foodie Stuff</h2>
          {getDisplay()}
        </div>
      )}
      <button value="main" onClick={handleClick}>
        Toggle Section
      </button>
    </section>
  );
}
export default CookingDisplay;
