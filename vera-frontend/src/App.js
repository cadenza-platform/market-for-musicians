import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Elements from "./ElementsPage/Elements";
import Landing from "./LandingPage/Landing";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
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
