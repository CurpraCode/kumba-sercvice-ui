import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import SummaryPage from "./components/SummaryPage";

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={ProfilePage}/>
      <Route exact path="/Summary" component={SummaryPage}/>
      </Switch>
    </Router>
  )
}

export default App
