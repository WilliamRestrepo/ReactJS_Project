import React, { Component } from 'react';

class CrearCliente extends Component{
	constructor(){
		super();
		this.state = {
			Nombre: '',
			Apellido: '',
			Correo: '',
			Telefono: '',
			Celular: '',
			Direccion: ''
		};
		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleInput(e){
		// este e.target me trae lo que tenga el campo, tanto su nombre como su valor
		const {value , name} = e.target;
		//Este evento sera el encargado de poder cambiar el estado de los campos de this.state
		this.setState({
			[name]: value
		})
	}

	handleSubmit(e){
		e.preventDefault();//Esto es para no recargarla pagina
		this.props.onSave(this.state);//se le manda la informacion ha la principal para que ejecute la funcion
		document.getElementById("createCLient").reset();
	}

	render() {
		return(

			<div className="container col-md-8">
				<div className="row mt-4">
					<form className="col-md-12" id="createCLient" onSubmit={this.handleSubmit}>
						<div className="row">
							<div className="col">
 								<input type="text" name="Nombre" className="form-control" placeholder="Nombre" onChange={this.handleInput} required/>
							</div>

							<div className="col">
								<input type="text" name="Apellido" className="form-control"  placeholder="Apellido" onChange={this.handleInput} required/>
							</div>
							
							<div className="col">
								<input type="email" name="Correo" className="form-control"  placeholder="Correo" onChange={this.handleInput} required/>
							</div>							
						</div>
						<div className="row">
							<hr></hr>
						</div> 
						<div className="row">
							<div className="col">
								<input type="number" name="Telefono" className="form-control"  placeholder="Telefono" onChange={this.handleInput}/>
							</div>

							<div className="col">
								<input type="number" name="Celular" className="form-control"  placeholder="Celular" onChange={this.handleInput} required/>
							</div>

							<div className="col">
								<input type="text" name="Direccion" className="form-control"  placeholder="Direccion" onChange={this.handleInput}/>
							</div>
						</div>
						<div className="row">
							<hr></hr>
						</div> 
						<div className="row">
							<div className="col">
								<input className="btn btn-primary" type="submit" name="btnguardar" value="Guardar" />
							</div>
						</div>
					</form>
				</div>
			</div>
		);
///Se coloca el this.props.onSave en el onClick para llamar la propiedad qeuse crea en la etiqueta del archivo App.js/
	}
} 

export default CrearCliente;