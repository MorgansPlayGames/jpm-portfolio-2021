import historyList from "../../lib/historyList"
import Entry from "./Entry"


function HistoryDisplay() {

    function makeList(){
        let list= historyList.map((item, i)=>{
            return <Entry entry={item} key={i} />
        });
        return list;
    }

    return <section>
        <h2>Experiences and funny stories I have</h2>
        {makeList()}
    </section>
}

export default HistoryDisplay