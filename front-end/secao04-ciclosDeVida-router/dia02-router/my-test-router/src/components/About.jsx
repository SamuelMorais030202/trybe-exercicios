import React from "react";
import { Link } from 'react-router-dom';

class About extends React.Component {
  render() {
    return (
      <div>
        <p>Testando navegação!</p>
        <Link to="/">Voltar a Home</Link>
      </div>
    )
  }
}

export default About;