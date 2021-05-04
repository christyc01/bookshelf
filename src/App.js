import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import BookList from "./BookList";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/books">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
