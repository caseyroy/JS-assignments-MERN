import React from 'react';



const SearchResults = (props) => {
    const { people, planets } = props;

    return (
        <div>
            <div>
                <p>Height: {people.height}</p>
                <p>Mass:{people.mass}</p>
                <p>Hair Color:{people.hair_color}</p>
                <p>Skin Color:{people.skin_color}</p>
            </div>
            <div>
                <p>Climate:{planets.climate}</p>
                <p>Terrain:{planets.terrain}</p>
                <p>Surface Water:{planets.surface_water}</p>
                <p>Population:{planets.population}</p>
            </div>
        </div>
    );

};

export default SearchResults;