import React, { Component } from 'react';
import * as firebase from 'firebase';

import { clientes } from '../clientes.json';

class ListadoCliente extends Component{
	constructor(){//Este se ejecuta antes que cargue el render
		super();//Esto es para heredar todas funciones del component de react
		//Se coloca el state para saber el estado de los datos en una aplicacion react
		this.state = {
			clientes //Se puede colocar el .json como clientes : clientes, pero con la mejora de javascript se puede colocar solo clientes 	
		}
		this.handleViewData = this.handleViewData.bind(this);
		this.handleViewData();//Llamamos la funcion que carga los datos de la db
	}

	//Cargar la informacion de la bd
	handleViewData(){
		//desde aqui se trae la informacion de la bd
		firebase.database().ref('cliente').on('child_added', snapshot=>{
	      this.setState({
	          clientes: this.state.clientes.concat(snapshot.val())//aqui le asignamos los datos al arreglo
	       })
	    });
	}

	render() {
		// se guarda en una constante el state para poder mostrarlo
		const cli = this.state.clientes.map((clte, i) =>{
			//Se le coloca key={i} para que los tr tengan id distinto y esto no saque error
			return(
				<tr key={i}> 
					<td>{ clte.Nombre }</td>
					<td>{ clte.Apellido }</td>
					<td>{ clte.Correo }</td>
					<td>{ clte.Telefono }</td>
					<td>{ clte.Celular }</td>
					<td>{ clte.Direccion }</td>
				</tr>
			)
		}); //colocamos map para recorrer uno a uno, los datos del json clientes
		return(
			<div className="container">
				<table className="table table-hover">
		          <thead>
		              <tr>
		                  <th>Nombre</th>
		                  <th>Apellido</th>
		                  <th>Correo</th>
		                  <th>Telefono</th>
		                  <th>Celular</th>
		                  <th>Direccion</th>
		              </tr>
		          </thead>
		          <tbody>
		             { cli }
		          </tbody>
		        </table>
	        </div>
		);
	}
} 

export default ListadoCliente;