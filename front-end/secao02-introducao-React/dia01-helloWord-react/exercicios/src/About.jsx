import React from 'react';

class Description extends React.Component {
    render() {
      return (
        <div>
          <h1>Samuel Morais</h1>
          <p>Olá me chamo Samuel, tenho 20 anos e moro em <br></br>
          Brasilãndia MG. Atualmente estou estudando muito <br></br>
          desenvolvimento web, na Trybe,  uma exelente escola <br></br>
          de programação.</p>
          <section>
            <h2>Minhas Habilidades</h2>
            <ul>
              <li>GIT e GitHub</li>
              <li>HTML e CSS</li>
              <li>Bootstrap</li>
              <li>JavScript</li>
              <li>React</li>
            </ul>
          </section>
        </div>
      );
    };
};

export default Description