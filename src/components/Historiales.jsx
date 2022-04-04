import React, { Component } from "react";

class Historiales extends Component {
  render() {
    return (
      <div className="historiales">
        <h3>Seleccion previa {this.props.seleccionPrevia}</h3>
        <h4>Historial: </h4>
        <ul>{this.props.historial}</ul>
      </div>
    );
  }
}

export default Historiales;
