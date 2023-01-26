import React from "react";
import { connect } from 'react-redux';
import { actionCreater } from './redux/actions';

class App extends React.Component {
  render() {
    const { countState, dispatch } = this.props;
    console.log(this.props);
    return (
      <div className="App">
        <h1>Construindo contador com redux</h1>
        <h2>{ countState }</h2>
        <button onClick={() => dispatch(actionCreater())}>
          Incrementar 1
        </button>
        <button onClick={() => dispatch(actionCreater(5))}>
          Incrementar 5
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  countState: state.counter,
});

export default connect(mapStateToProps)(App);
