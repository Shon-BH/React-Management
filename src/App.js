import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import PersistentDrawerLeft from './PersistentDrawerLeft';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

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


          <Route path="/dashboard">
            <Dashboard/>
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
          <Route path="/submenu/admin">
            <PersistentDrawerLeft selectMenu={'admin'}/>              
          </Route>

          <Route path="/submenu/">
            <PersistentDrawerLeft selectMenu={''}/>             

          <Route path="/dashmenu/dashboard">
            <PersistentDrawerLeft selectMenu={'dashboard'}/>              
          </Route>
          <Route path="/dashmenu/temp">
            <PersistentDrawerLeft selectMenu={'temp'}/>              
          </Route>
          <Route path="/dashmenu/stock">
            <PersistentDrawerLeft selectMenu={'stock'}/>              
          </Route>
          <Route path="/dashmenu/product">
            <PersistentDrawerLeft selectMenu={'product'}/>              

          </Route>
          <Route path="/">
            {/* <PersistentDrawerLeft selectMenu={'home'}/> */}
            <SignIn/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;