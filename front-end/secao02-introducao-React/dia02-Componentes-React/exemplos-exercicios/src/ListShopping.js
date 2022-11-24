import React from "react";

class List extends React.Component {
    render() {
        const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
        const itens = shoppingList.map((element, index) => {
           return (<li key={index}>{element}</li>)
        });
        return (
            <div>
                <h2>Lista de compras</h2>
                <ul>
                    { itens }
                </ul>
            </div>
        );
    };
};

export default List;