import hobbies from "../../lib/hobbyList";
import { useState } from "react";
import AnimationEntry from "./AnimationEntry";

function AnimationDisplay() {
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
    let list = hobbies.filter((list) => list.type === "animation");
    let entries = list[0].list.map((entry, i) => {
      return <AnimationEntry key={i} entry={entry} />;
    });
    return entries;
  }

  return (
    <section className="display">
      {openDisplay.main === "closed" ? (
        <h2>Animations</h2>
      ) : (
        <div>
          <h2>Animations</h2>
          {getDisplay()}
        </div>
      )}
      <button value="main" onClick={handleClick}>
        Toggle Section
      </button>
    </section>
  );
}
export default AnimationDisplay;
