import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from './components/Navbar'
import Country from "./components/Country";

const App = () => {
  return (
    <>
    <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:slug" component={Country}/>
        </Switch>
      </Router>
      
    </>
  );
};

export default App;
