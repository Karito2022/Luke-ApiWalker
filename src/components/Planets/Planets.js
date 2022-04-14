import React from 'react';

const Planets = ({datos}) => {

    return(
        <div>
            <h1>Name: {datos.name}</h1>            
            <p>Rotatio Period: {datos.rotation_period}</p>            
            <p>Orbital Period: {datos.orbital_period}</p>            
            <p>Diameter: {datos.diameter}</p>
            <p>Climate: {datos.climate}</p>            
        </div>
    );
}
export default Planets;