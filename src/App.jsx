// import Login from "./components/Login";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import GlobalCss from "./css/GlobalCss";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

const App = () => (
  <>
    <GlobalCss />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  </>
)

export default App;
