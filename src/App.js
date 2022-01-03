import React from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import PersistentDrawerLeft from './PersistentDrawerLeft';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signin">
            <SignIn/>
          </Route>

          <Route path="/signup">
            <SignUp/>
          </Route>
          
          <Route path="/submenu/inbox">
            <PersistentDrawerLeft selectMenu={'inbox'}/>
          </Route>
          <Route path="/submenu/drafts">
            <PersistentDrawerLeft selectMenu={'drafts'}/>
          </Route>
          <Route path="/submenu/starred">
            <PersistentDrawerLeft selectMenu={'starred'}/>              
          </Route>
          <Route path="/">
            <PersistentDrawerLeft selectMenu={'home'}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

