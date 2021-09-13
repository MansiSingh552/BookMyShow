import "./App.css";

import { Route } from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/default.HOC";
import MovieHOC from "./HOC/MovieHOC";
import Plays from "./Pages/Plays.page";

//Component
import HomePage from "./Pages/home.page";
import Movie from "./Pages/Movie.page"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
     <DefaultHOC path="/" exact component={HomePage} />
     <MovieHOC path="/movie/:id" exact component={Movie}/>
     <MovieHOC path="/plays" exact component={Plays} />
    </>
  );
}
// / , /movie
export default App;

/*
function Name1() {
  return <h1>This is home page.</h1>
}

function Name2() {
  return <h1>This is movie page.</h1>
}
*/
/*<Route path="/" exact component={Name1}/>
      <Route path="/movie" exact component={Name2}/>*/