import { useState } from 'react'

function Login(props) {
  const [user, handleUser] = useState({
    username: '',
    ageuser: '',
    cityuser: '',
    modulo: '',
  });

  const { states: { handleData } } = props;

  const handleChange = ({ target }) => {
    handleUser({
      ...user,
      [target.name]: [target.value],
    })
  }

  const handleClick = () => {
    console.log(props);
    const { history } = props;
    handleData( user );
    history.push('/home');
  }

  return (
    <div>
      <h1>Formulário Trybe</h1>
      <label htmlFor="name">
        <input
          type="text"
          name="username"
          id="name"
          placeholder="Nome completo"
          value={ user.username }
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="age">
        <input
          type="number"
          name="ageuser"
          id="age"
          placeholder="Idade"
          value={ user.ageuser }
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="city">
        <input
          type="text"
          name="cityuser"
          id="city"
          placeholder="Cidade"
          value={ user.cityuser }
          onChange={ handleChange }
        />
      </label>
      <fieldset>
        <h2>Em qual módulo você está?</h2>
        <label htmlFor="fundamentals">
          <input
            type="radio"
            name="modulo"
            id="fundamentals"
            value="fundamentos"
            onChange={ handleChange }
          />
          Fundamentos
        </label>
        <label htmlFor="front-end">
          <input
            type="radio"
            name="modulo"
            id="front-end"
            value="front-end"
            onChange={ handleChange }
          />
          Front-End
        </label>
        <label htmlFor="back-end">
          <input
            type="radio"
            name="modulo"
            id="back-end"
            value="back-end"
            onChange={ handleChange }
          />
          Back-End
        </label>
        <label htmlFor="computing">
          <input type="radio" name="modulo" id="computing" value="ciência da computação" onChange={ handleChange }/>
          Ciência da Computação
        </label>
      </fieldset>
      <button
        onClick={ handleClick }
      >
        Enviar
      </button>
    </div>
  );
}

export default Login;
