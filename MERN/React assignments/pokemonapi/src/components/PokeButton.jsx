import React from 'react';
import Axios from 'axios';


const PokeButton = (props) => {
    const { setState } = props;

    const fetchPokemon = () => {
        //axios api call puts what you get from the call into response.data.(whatever your trying to access inside the call)
        Axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
            .then(
                response => {
                    console.log(response.data.results);
                    setState(response.data.results);
                })
            //fetch api call needs the res.json .then before the setState .then
            // fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
            //   .then(res => {
            //     return res.json()
            //   })
            // .then(
            //   response => {
            //     setState(response.data.results);
            //   })
            .catch(e => console.log(e));
    }

    return <button onClick={fetchPokemon}>Gotta Catch 'em All!</button>
}

export default PokeButton;
