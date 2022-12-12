import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      jokeObj: undefined,
    }
  }

  async fetchJoke() {
    const requestHeaders = { headers: { Accept: 'application/json' } }
    const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
    const requestObject = await requestReturn.json();
    this.setState({
      jokeObj: requestObject
    });
  }

  componentDidMount() {
    this.fetchJoke();
  }

  render() {
    const { jokeObj } = this.state;
    console.log(jokeObj)
    return (
      <div>
        <h1>Teste</h1>
        <span>{jokeObj.joke}</span>
      </div>
    )
  }
}

export default App;