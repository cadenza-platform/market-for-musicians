import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Elements from "./ElementsPage/Elements";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <Link to="/">Landing</Link>{' '}
            <Link to="/elements">Elements</Link>{' '}
          </div>
          <hr/><br/>
          <div>
            <Switch>
              <Route exact path="/">
              </Route>
              <Route path="/elements">
                <Elements />
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
