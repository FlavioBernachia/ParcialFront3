import data from "./data.json";
import React, {Component} from "react";
import Opciones from './Opciones';
import Historiales from './Historiales';
import Swal from 'sweetalert2'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            historial: [],
            contador: 0,
            seleccionPrevia: '',
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.contador !== this.state.contador) {
            this.state.historial.push(this.state.seleccionPrevia);
        }
    }

    clickHand = (e) => {
        const id = e.target.id;
        if (this.state.contador >= 7) {
            Swal.fire("Fin de la aventura", "Aprieta OK para finalizar!", "success");
        } else if (id === 'A' && this.state.seleccionPrevia !== 'A') {
            this.setState({
                contador: this.state.contador + 1,
                seleccionPrevia: 'A',
            });
        } else if (id === 'A' && this.state.seleccionPrevia === 'A') {
            this.setState({
                contador: this.state.contador + 2,
            });
        } else if (id === 'B' && this.state.seleccionPrevia === 'A') {
            this.setState({
                contador: this.state.contador + 3,
                seleccionPrevia: 'B',
            });
        } else if (id === 'B') {
            this.setState({
                contador: this.state.contador + 2,
                seleccionPrevia: 'B',
            });
        }
    };

    render() {
        return (
            <div className="layout">
                <h1 className="historia">{data[this.state.contador].historia}</h1>
                <Opciones
                    clickHand={this.clickHand}
                    opcionA={data[this.state.contador].opciones.a}
                    opcionB={data[this.state.contador].opciones.b}
                />
                <Historiales
                    seleccionPrevia={this.state.seleccionPrevia}
                    historial={this.state.historial.map(
                        (e, index) => (
                            <li key={index}>{e}</li>
                        ),
                        data[this.state.contador].id
                    )}
                />
            </div>
        );
    }
}

export default Main;
