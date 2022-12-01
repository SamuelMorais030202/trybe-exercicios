import React from "react";

class Name extends React.Component {
  render() {
    const { handleChage, value } = this.props;
    return (
        <label>
            Insira seu nome:
            <input type="text" name="name" onChange={handleChage} value={value} />
        </label>
    )
  }
}

export default Name;