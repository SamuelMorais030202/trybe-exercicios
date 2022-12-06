import React from "react";
import Name from "./InputName";
import Email from "./InputEmail";
import Regions from "./Regions";

class Form extends React.Component {
  constructor() {

    super()

    // this.handleName = this.handleName.bind(this);
    // this.handleEmail = this.handleEmail.bind(this);
    // this.handleExpectation = this.handleExpectation.bind(this);
    // this.handleOptions = this.handleOptions.bind(this);
    this.handleChage = this.handleChage.bind(this);

    this.state = {
      name: '',
      e_mail: '',
      expectation: '',
      region: '',
      checked: false,
      formularioComErros: '',
    }

    this.fileInput = React.createRef();

  }

  handleError() {
    const { name, e_mail, expectation, region, checked } = this.state;

    const errosCase = [
      !name.length,
      !e_mail.length,
      !expectation.length,
      !region.length,
      !checked
    ]

    const errosForm = errosCase.every((error) => error !== true);

    this.setState({
      formularioComErros: !errosForm,
    })
  }

  // handleName(event) { 
  //   this.setState({name: event.target.value});
  // }

  // handleEmail(event) {
  //   this.setState({e_mail: event.target.value});
  // }

  // handleExpectation(event) {
  //   this.setState({expectation: event.target.value});
  // }

  // handleOptions(event) {
  //   this.setState({region: event.target.value});
  // }

  //Handle genérico
  handleChage({ target }) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, this.handleError);
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('Inscrição realizada com sucesso');
  }
  
  render() {
    return (
      <div>
        <h2>Inscreva-se</h2>
        <p>Preencha os campos para participar do evento</p>
        <form onSubmit={this.handleSubmit}>
           <Name handleChage={this.handleChage} value={this.state.name} />
           <br />
           <Email handleChage={this.handleChage} value={this.state.e_mail} />
           <br />
           <label>
              Oque você espera do evento: <br />
              <textarea name="expectation" cols="20" rows="5" onChange={this.handleChage} value={this.state.expectation}></textarea>
           </label>
           <br />
           <label>
              De qual região você é:
              <Regions handleChage={this.handleChage} value={this.state.region} />
           </label>
           <br />
           <label>
              Nos mande uma foto sua:
              <input type="file" name="file" ref={this.fileInput} />
           </label>
           <br />
           <label>
              Vocẽ se compromete a acompanhar todas as aulas ?
              <input type="checkbox" name="checked" onChange={this.handleChage} />
           </label>
           <br />
           <button type="submit">Enviar</button>
        </form>
      </div>
    )
  }
}

export default Form;