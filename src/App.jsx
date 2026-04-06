import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
function App() {
  return (
    <div className="app">
      {/* <Accordian />
      <RandomColor /> */}
      <StarRating noofStars={10} />
    </div>
  );
}

export default App;
