import React from "react";

// Componentes de função 
const Greeting = (fullName) => {
    const { name, lastName} = fullName
    return (
      <h1>Hello, {name} {lastName}</h1>
    );
};
console.log(Greeting('Samuel'))


//Componentes de classes
// class Greeting2 extends React.Component {
//     render() {
//         const { name, lastName } = this.props;
//         return (
//             // <h1>Hello, {this.props.name} {this.props.lastName}</h1>
//             <h1>Hello, {name} {lastName}</h1>
//         )
//     }
// }

//

export default Greeting;