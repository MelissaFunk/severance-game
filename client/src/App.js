import './App.css';
import { Route, Switch } from "react-router-dom"
import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import Home from './Home'
import Grid from './Grid'
import Maze from './Maze'

function App() {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    fetch('/me')
    .then(res => {
      if(res.ok) {
        res.json().then(user => setCurrentUser(user))
      }
    })
  }, [])

  return (
    <div>
      {currentUser.username ? <NavBar setCurrentUser={setCurrentUser}/> : null}
      <Switch>
        <Route exact path ="/"><Home setCurrentUser={setCurrentUser}/></Route>
        <Route exact path="/grid"><Grid /></Route>
        <Route exact path="/maze"><Maze /></Route>
      </Switch>
    </div>
  );
}

export default App;
