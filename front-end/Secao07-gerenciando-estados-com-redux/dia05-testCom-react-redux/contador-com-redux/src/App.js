import React from 'react';
import { connect } from 'react-redux';
import { actionCount } from './redux/actions';

class App extends React.Component {
  render () {
    const { countState, dispatch } = this.props;
    console.log(countState);
    return (
      <div>
        <h1>Contador</h1>
        <h2>{ countState }</h2>
        <button onClick={() => dispatch(actionCount(1))}>Incrementar 1</button>
        <button onClick={() => dispatch(actionCount(5))}>Incrementar 5</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  countState: state.count,
})

export default connect(mapStateToProps)(App);
