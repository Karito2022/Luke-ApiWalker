import React from 'react';

const Vehicles = ({datos}) => {

    return(
        <div>
            <h1>Name: {datos.name}</h1>            
            <p>Model: {datos.model}</p>            
            <p>Manufacturer: {datos.manufacturer}</p>            
            <p>Cost in Credits: {datos.cost_in_credits}</p>
            <p>Passengers: {datos.passengers}</p>
        </div>
    );
}
export default Vehicles;