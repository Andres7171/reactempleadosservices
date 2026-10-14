import React, { Component } from "react";
import ServiceEmpleados from "../services/ServiceEmpleados";

export default class Home extends Component {
  service = new ServiceEmpleados();
  state = {
    empleados: [],
  };

  loadEmpleados = () => {
    this.service.getEmpleados().then((result) => {
      this.setState({
        empleados: result,
      });
    });
  };

  componentDidMount = () => {
    this.loadEmpleados();
  };
  render() {
    return (
      <div>
        <h1>Home</h1>
        <table className="table table-primary table-striped table-hover">
          <thead>
            <tr>
              <td>Id</td>
              <td>Apellido</td>
              <td>Oficio</td>
              <td>Salario</td>
              <td>Departamento</td>
            </tr>
          </thead>
          <tbody>
            {this.state.empleados.map((empleado, index) => {
              return (
                <tr key={index}>
                  <td>{empleado.idEmpleado}</td>
                  <td>{empleado.apellido}</td>
                  <td>{empleado.oficio}</td>
                  <td>{empleado.salario}</td>
                  <td>{empleado.departamento}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
