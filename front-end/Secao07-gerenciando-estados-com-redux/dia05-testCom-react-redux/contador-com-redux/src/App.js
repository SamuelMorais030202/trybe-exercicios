import React from 'react';
import { connect } from 'react-redux';
import { actionCount, actionClick } from './redux/actions';

class App extends React.Component {
  render () {
    const { countState, dispatch, clicksState } = this.props;
    
    const dispathAction = (add = 1) => {
      dispatch(actionCount(add));
      dispatch(actionClick());
    } 

    const numberClicks = `Número de clicks: ${clicksState}`;
    return (
      <div>
        <h1>Contador</h1>
        <h2>{ countState }</h2>
        <button onClick={() => dispathAction()}>Incrementar 1</button>
        <button onClick={() => dispathAction(5)}>Incrementar 5</button>
        <h3>
          { numberClicks }
        </h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  countState: state.counterReducer.count,
  clicksState: state.counterReducer.clicks,
})

export default connect(mapStateToProps)(App);
