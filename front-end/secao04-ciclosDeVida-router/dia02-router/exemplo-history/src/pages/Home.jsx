import React from 'react';

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      UserName: 'Trybe',
    }
  }
  render() {
    const { history } = this.props;
    return (
      <div>
        <h1>Home Page</h1>
        <button 
          type='buttom'
          onClick={ () => history.push('/welcome', this.state) }
        >
          Acesse a página de boas vindas
        </button>
      </div>
    );
  }
}

export default Home;
