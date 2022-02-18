import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Services } from "./components/Pages/Services";
import { Realisations } from "./components/Pages/Realisations";
import { Contact } from "./components/Pages/Contact";
import { Feedback } from "./components/Pages/Feedback";
import { Covid19 } from "./components/Pages/Covid19";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/covid19" component={Covid19} />
          <Route path="/services" component={Services} />
          <Route path="/realisations" component={Realisations} />
          <Route path="/contact" component={Contact} />
          <Route path="/commentaires" component={Feedback} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
