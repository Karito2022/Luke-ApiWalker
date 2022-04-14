import React from 'react';

const People = ({datos}) => {

    return(
        <div>
            <h1>Name: {datos.name}</h1>            
            <p>Height: {datos.height}</p>            
            <p>Mass: {datos.mass}</p>            
            <p>Hair Color: {datos.hair_color}</p>
            <p>Skin Color: {datos.skin_color}</p>
        </div>
    );
}
export default People;