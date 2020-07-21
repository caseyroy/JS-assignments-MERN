import React, { useState } from 'react';




const FetchPokemon = (event) => {
    const [state, setState] = useState([]);

    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
        .then(response => {
            console.log(response)
            setState(response.results)
        })
        .catch(error => console.log(error));
}

export default FetchPokemon;