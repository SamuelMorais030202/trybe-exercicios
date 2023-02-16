import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import { useState } from 'react';

function App() {
  const [data, handleData] = useState(null);
  return (
    <Switch>
      <Route exact path="/" render={ (props) =>  <Login { ...props } states={ { data, handleData } } /> } />
      <Route path="/home" render={ (props) => <Home { ...props } data={ data } /> } />
    </Switch>
  )
}

export default App;
