import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import People from '../People/People';

const Persona = (props) => {

    const [id] = props.match.params.id;
    const [datosPersona, setDatosPersona] = useState({});
  
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/` + id)
        .then(respuesta => {
            setDatosPersona( (object) => respuesta.data);
        })
        .catch(err => {
            setDatosPersona(null);
        })
    }, []);

    return(
        <div>
            { id!==null?
                <People datos={datosPersona}></People>
                :
                <div> 
                    <h2>Estos no son los droides que está buscando</h2>
                    <img src="https://imgwoman.elperiodico.com/73/3c/c0/ewan-mcgregor-caracterizado-obi-wan-kenobi.jpg"></img>
                </div>
            }      
        </div>
    );
    }
    export default Persona;

