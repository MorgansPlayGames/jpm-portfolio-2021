import "./styles.css";
import TabletopDisplay from "./TabletopDisplay";
import CookingDisplay from "./CookingDisplay";
import VideogameDisplay from "./VideogameDisplay";
import AnimationDisplay from "./AnimationDisplay"

function HobbyDisplay() {
  return (
    <main>
      <AnimationDisplay />
      <TabletopDisplay />
      <CookingDisplay />
      <VideogameDisplay />
    </main>
  );
}
export default HobbyDisplay;
