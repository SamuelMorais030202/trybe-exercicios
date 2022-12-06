import React from "react";

class Email extends React.Component {
  render() {
    const { handleChage, value } = this.props;
    const e_mail = value;
    return (
    <label>
      Insira seu e-mail:
      <input type="email" name="e_mail" onChange={handleChage} value={value} />
      <small>{!e_mail ? 'O e-mail precisa ser preenchido' : ''}</small>
     </label>
    )
  }
}

export default Email;