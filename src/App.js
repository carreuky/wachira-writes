import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Intro from "./Components/intro";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contacts from "./Components/Contacts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Intro />
      <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/service">
            <Services />
          </Route>
          <Route exact path="/contact">
            <Contacts />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
