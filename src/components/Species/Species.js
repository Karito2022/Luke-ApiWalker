import React from 'react';

const Species = ({datos}) => {

    return(
        <div>
            <h1>Name: {datos.name}</h1>            
            <p>Classification: {datos.classification}</p>            
            <p>Designation: {datos.designation}</p>            
            <p>Average Height: {datos.average_height}</p>
            <p>Skin Colors: {datos.skin_colors}</p> 
        </div>
    );
}
export default Species;