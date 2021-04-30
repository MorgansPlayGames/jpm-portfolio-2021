import hobbies from "../../lib/hobbyList"
import {useState} from "react"
import TabletopEntry from "./TabletopEntry"

function TabletopDisplay() {
    const [openDisplay, setOpenDisplay] = useState({
        main:"closed"
    })

    function handleClick(e){
        let displayName = e.target.value;
        console.log(openDisplay);
        (openDisplay[displayName]==="closed")
        ? setOpenDisplay({[displayName]:"open"})
        : setOpenDisplay({[displayName]:"closed"});
    }

    function getDisplay() {
        
        let list = hobbies.filter((list)=>list.type==="TabletopGaming")
        let entries = list[0].list.map((entry, i)=>{
            return <TabletopEntry key={i} entry={entry} />
        })
        return entries;
    }

    return <section>
        {(openDisplay.main==="closed") ?
            <h2>Tabletop Gaming</h2>
         :
            <div><h2>Tabletop Gaming</h2>{getDisplay()}</div>
         }
         <button value="main" onClick={handleClick}>Toggle Section</button>
    </section>
}
export default TabletopDisplay