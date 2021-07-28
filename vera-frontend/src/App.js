import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Elements from "./ElementsPage/Elements";
import ArtistLanding from "./LandingPage/ArtistLanding";
import FanLanding from "./LandingPage/FanLanding";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

// set up GA
const trackingId = "G-9QEL0TW34P";
ReactGA.initialize(trackingId);

// GA pageview tracking
const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <FanLanding />
          </Route>
          <Route exact path="/artist">
            <ArtistLanding />
          </Route>
          <Route path="/elements">
            <Elements />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
