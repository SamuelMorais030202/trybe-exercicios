import React from 'react';

const name = <h1>Samuel Morais</h1>
const description = <p>Olá me chamo Samuel e estou estudando 
    desenvolvimento web na trybe
</p>;
class Description extends React.Component {
    render() {
        return (
            name,
            description
        )
    }
}

export default Description;