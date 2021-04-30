import { useState } from "react";

function Entry(props) {
  const [open, setOpen] = useState("closed");
  function handleClick() {
    open === "closed" ? setOpen("open") : setOpen("closed");
  }

  let entry = props.entry;
  return (
    <div className="entry">
      {open === "closed" ? (
        <div>
          <h2>{entry.title}</h2>
          <h4>{entry.subtitle}</h4>
        </div>
      ) : (
        <div>
        <h2>{entry.title}</h2>
        <h4>{entry.subtitle}</h4>
        <p>{entry.story}</p>
        <div>Tags: 
        {(entry.tags) ? entry.tags.map((tag, i)=>{
            return <span key={i}>{tag.name} </span>
        })
        : <p>no tags associated with post</p>}
      </div>
      </div>
      )}
      <button onClick={handleClick}>Toggle Entry</button>
    </div>
  );
}

export default Entry;
