import React from "react";

class Regions extends React.Component {
  render() {

    const { handleChage, value } = this.props;

    return (
      <select name="region" onChange={handleChage} value={value}>
        <option value="Norte">Norte</option>
        <option value="Nordeste">Nordeste</option>
        <option value="Centro-Oeste">Centro-Oeste</option>
        <option value="Sudeste">Sudeste</option>
        <option value="Sul">Sul</option>
      </select>
    )
  }
}

export default Regions;