import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ArtistLanding from "./LandingPage/ArtistLanding";
import FanLanding from "./LandingPage/FanLanding";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactGA from "react-ga";

// GA pageview tracking
ReactGA.initialize("UA-195290816-1");
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <FanLanding />
          </Route>
          <Route exact path="/artist">
            <ArtistLanding />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
