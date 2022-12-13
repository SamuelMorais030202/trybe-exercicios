import React from 'react';

class Welcome extends React.Component {
  render() {
    const { history } = this.props
    const { location } = history;
    return (
      <div>
        <h1>Boas vindas</h1>
        <p>
            {
              location.state ? location.state.userName : 'Pessoa desconhecida'
            }
        </p>
        <button
          type='button'
          onClick={ () => console.log(history.location) }
          >
          Acesse o history
        </button>
      </div>
    );
  }
}

export default Welcome;
