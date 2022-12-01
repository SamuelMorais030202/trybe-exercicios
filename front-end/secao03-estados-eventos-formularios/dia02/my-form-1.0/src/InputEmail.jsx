import React from "react";

class Email extends React.Component {
  render() {
    const { handleChage, value } = this.props;
    return (
    <label>
      Insira seu e-mail:
      <input type="email" name="e_mail" onChange={handleChage} value={value} />
     </label>
    )
  }
}

export default Email;