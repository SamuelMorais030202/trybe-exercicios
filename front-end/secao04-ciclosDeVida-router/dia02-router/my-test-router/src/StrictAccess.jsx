import React from "react";
import { Redirect, Link } from "react-router-dom";

class StrictAccess extends React.Component {
  render () {
    const { user } = this.props;
    const { username, password } = user;
    return (
      <div>
        {
          username === 'João' && password === '1234'
            ? <p>Welcome {username}</p>
            : <Redirect to={'/'} />
        }
        <Link to={'/'}>Voltar para Home</Link>
      </div>
    )
  }
}

export default StrictAccess;