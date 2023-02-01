import React from 'react';
import { connect } from 'react-redux';

import fetchDogImage from './redux/actions';
import './App.css';

class App extends React.Component {
  render () {
    const { imageURL, isFetching, dispatch } = this.props;

    if(isFetching) return <h1>Carregando...</h1>;

    return (
      <div>
        <button onClick={() => dispatch(fetchDogImage())}>
          Novo dog
        </button>

        <img
          src={ imageURL }
          alt="Imagem de um cachorro" 
        />
      </div>
    )
  }
}

const mapStateToprops = (state) => ({
  imageURL: state.imageURL,
  isFetching: state.isFetching,
});

export default connect(mapStateToprops)(App);
