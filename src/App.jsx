import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Login from './React Hooks/Login'
import Home from './React Hooks/Home'
const App = () => {

  return (
    <Router>
      <ul>
        <li>
          <Link to="/"><Home/></Link>
          
        </li>
        <li>
          <Link to="/login"><Login/></Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact><Home/></Route>
        <Route path="/login/id:" exact><Login/></Route>
      </Switch>

    </Router>
  )
}

export default App