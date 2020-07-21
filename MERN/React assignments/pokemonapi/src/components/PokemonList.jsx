import React from 'react';

const PokemonList = (props) => {
    const { state } = props;

    return (
        <ul>
            {state.map((item, idx) => <li key={idx}>{item.name}</li>)}
        </ul>
    )
}

export default PokemonList;