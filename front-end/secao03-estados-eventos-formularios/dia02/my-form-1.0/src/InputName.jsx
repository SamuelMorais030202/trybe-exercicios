import React from "react";

class Name extends React.Component {
  render() {
    const { handleChage, value } = this.props;
    const nome = value;
    const name = value.length > 50 ? 'Limite de caracteres atingido' : '';

    return (
        <label>
            Insira seu nome:
            <input type="text" name="name" onChange={handleChage} value={value} />
            <small>
              {!nome ? 'O nome precisa ser preenchido':''}
            </small>
            <small>
              {name}
            </small>
        </label>
    )
  }
}

export default Name;