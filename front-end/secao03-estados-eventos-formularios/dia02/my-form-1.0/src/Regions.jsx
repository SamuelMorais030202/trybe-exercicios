import React from "react";

class Regions extends React.Component {
  render() {

    const { handleChage, value } = this.props;
    const selectRegion = value;

    return (
      <label>
        <select name="region" onChange={handleChage} value={value}>
          <option value="select">Selecione</option>
          <option value="Norte">Norte</option>
          <option value="Nordeste">Nordeste</option>
          <option value="Centro-Oeste">Centro-Oeste</option>
          <option value="Sudeste">Sudeste</option>
          <option value="Sul">Sul</option>
        </select>
        <small>{!selectRegion ? 'Selecione uma região' : ''}</small>
      </label>
    )
  }
}

export default Regions;