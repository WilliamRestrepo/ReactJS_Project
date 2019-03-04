import React, { Component } from 'react';
import * as firebase from 'firebase';
import ListadoCliente from './components/ListadoCliente';
import CrearCliente from './components/CrearCliente';


import { clientes } from './clientes.json';

import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      clientes
    };
    this.handleSave = this.handleSave.bind(this);//Se llama desde el constructor para informarle que la funcion hace parte del codigo
  };

  async componentWillMount(){
  }

  //para guardar los datos
  handleSave(clie){
    this.setState({
        clientes: [this.state.clientes, clie]
    })
    //Para almacenar en la base de datos
    const dbRef = firebase.database().ref('cliente');//Hacemos referencia a la Base de datos
    const newCliente = dbRef.push();//Creamos un nuevo id en la bd
    newCliente.set(clie);//aqui tenemos que enviarle la informacion del formulario

  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <p>Listado de clientes</p>
        </header>
        <div className="App-intro">
            <CrearCliente onSave={this.handleSave}/>
            <br />
            <br />
            <ListadoCliente/>
        </div>
      </div>
    );
  }
}

export default App;
