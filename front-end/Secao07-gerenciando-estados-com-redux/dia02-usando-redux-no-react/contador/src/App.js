import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    const { countState } = this.props;
    console.log(this.props)
    return(
      <div>
        <h1>Contador</h1>
        <h2>{ countState }</h2>
        <button>Incrementar</button>
        <button>Decrementar</button>
      </div>
    )
  }
}

const mapToStateProps = (state) => ({
  countState: state.count,
})

export default connect(mapToStateProps)(App);
