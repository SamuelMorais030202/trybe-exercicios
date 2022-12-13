import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './StrictAccess';

class App extends React.Component {
  render() {
    const user = {
      username: 'João',
      password: '1234',
    }
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/strict-access" render={ () => <StrictAccess user={user} />} />
          <Route path="/users/:id" render={(props) => <Users {...props} greetingsMessage={'Good Morning'} /> } />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
