import React from "react";
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Minha navegação</h1>
        <ul>
          <li><Link to="/about"> Aboute </Link></li>
          <li><Link to="/users"> Users</Link></li>
          <li><Link to="strict-access">Strict Access</Link></li>
        </ul>
      </div>
    )
  }
}

export default Home;