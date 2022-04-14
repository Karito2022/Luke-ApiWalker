import React from 'react';

const Films = ({datos}) => {

    return(
        <div>
            <h1>Film: {datos.title}</h1>            
            <p>Director: {datos.director}</p>            
            <p>Producer: {datos.producer}</p>            
            <p>Released Date: {datos.release_date}</p>
            <p>Opening Crawl: {datos.opening_crawl}</p>            
        </div>
    );
}
export default Films;