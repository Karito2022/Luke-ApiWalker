import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import {Route, Switch, withRouter, Link, BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import Films from './components/Films/Films';
import People from './components/People/People';
import Planets from './components/Planets/Planets';
import Starships from './components/Starships/Starships';
import Species from './components/Species/Species';
import Vehicles from './components/Vehicles/Vehicles';
import Persona from './components/Persona/Persona';

function App() {
  const [datos, setDatos] = useState({});
  const [id, setId] = useState(0);
  const [category, setCategory] = useState(null);
  const [seDioClickEnSearch, setSeDioClickEnSearch] = useState(false);

  const obtenerCategoria = (event) =>{
    setCategory(event.target.value);
    setSeDioClickEnSearch(false);
  }

  const obtenerId = (event) =>{
    setId(event.target.value)
  }

  const enviarDatos = (event) =>{
    event.preventDefault();
    setSeDioClickEnSearch(true);
    console.log("CLICKKK??" + seDioClickEnSearch);
  }

  
  const getInfo = (e) => {
    e.preventDefault();
    if (seDioClickEnSearch) {
    axios.get(`https://swapi.dev/api/${category}/${id}`)
      .then(respuesta => {
        setCategory(category);
        setDatos( (object) => respuesta.data);
        console.log("rpta data de app.js" + respuesta);
      })
      .catch(err => {
        setDatos(null);
      })
    }
  }

  const mostrar = () => {
    if (seDioClickEnSearch){
      switch(category) {
        case 'people':
          return <People datos = {datos}/>
        case 'films':
          return <Films datos = {datos}/>
        case 'starships':
          return <Starships datos = {datos}/>
        case 'vehicles':
          return <Vehicles datos = {datos}/>
        case 'planets':
          return <Planets datos = {datos}/>
        case 'species':
          return <Species datos = {datos}/>
      }
    }
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="App navBar">
              <form onSubmit={getInfo}>
                <div>
                <label htmlFor='menuDesplegable'>Search for: </label>
                <select id="menuDesplegable" onChange={(event) => obtenerCategoria(event)}>
                  <option value="" hidden>select a category-</option>
                  <option value="people">People</option>
                  <option value="films">Films</option>
                  <option value="starships">Starships</option>
                  <option value="vehicles">Vehicles</option>
                  <option value="species">Species</option>
                  <option value="planets">Planets</option>
                </select>
                </div>
                <div>
                  <label htmlFor='idInput'>Id: </label>
                  <input type='number' id='id' name='id' onChange={(event) => obtenerId(event)}></input>
                </div>
                <button type='submit'onClick={(event) => setSeDioClickEnSearch(true)}> Search </button>
              </form>

                { datos!==null?
                  <div> {mostrar()} </div>
                  :
                  <div> 
                    <h2>Estos no son los droides que está buscando. <span>Prueba con otro id</span></h2>
                    <img src="https://imgwoman.elperiodico.com/73/3c/c0/ewan-mcgregor-caracterizado-obi-wan-kenobi.jpg"></img>
                  </div>
                }
          </div>
        </Route>

        <Route exact path="/:id" render = {(routeProps) => <Persona {...routeProps} />} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
