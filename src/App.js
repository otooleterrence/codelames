import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NewGame from './features/newGame';
import GameRoom from './features/gameRoom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:roomId">
            <GameRoom />
          </Route>
          <Route path="/">
            <NewGame />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
