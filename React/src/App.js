
import './App.css';
import Accordian from './component/accordion';
import RandomColor from './component/random color generator';
import StarRating from './component/star rating';

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian/> */}
      {/* Random Color Generator component */}
      {/*<RandomColor/> */}

      {/* Star Rating component */}
      <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
