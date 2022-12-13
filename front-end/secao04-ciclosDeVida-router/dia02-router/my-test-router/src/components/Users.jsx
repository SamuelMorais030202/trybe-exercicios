import React from "react";
import { Link } from 'react-router-dom';

class Users extends React.Component {
  render() {
    const { greetingsMessage, match } = this.props;
    const { params } = match;
    return (
      <div>
        <p>{ greetingsMessage }, My awesome Users component</p>
        <p>O parâmtro da URL é {params.id}</p>
        <Link to="/">Voltar para Home</Link>
      </div>
    )
  }
}

export default Users;