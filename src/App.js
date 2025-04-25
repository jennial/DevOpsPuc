import React, { Component } from "react";
import "./App.css";

class Nums extends Component {
  render() {
    return <button className="App-1">{this.props.num}</button>;
  }
}

class Operadores extends Component {
  render() {
    return (
      <button className="App-2" onClick={this.props.onClick}>
        {this.props.operador}
      </button>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10],
      operadores: null,
      valor: 0,
    };
  }

  aumentar = () => {
    this.setState((prevState) => ({ valor: prevState.valor + 1 }));
    console.log(this.state.valor);
  };

  diminuir = () => {
    this.setState((prevState) => ({ valor: prevState.valor - 1 }));
    console.log(this.state.valor);
    console.log(this.state.valor);
    console.log(this.state.valor);

  };

  render() {
    return (
      <>
        <div className="calculadora">
          <div className="conjunto-nums">
            <div className="ac">AC</div>
            <Nums num="7" />
            <Nums num="8" />
            <Nums num="9" />
            <Nums num="4" />
            <Nums num="5" />
            <Nums num="6" />
            <Nums num="1" />
            <Nums num="2" />
            <Nums num="3" />
            <div className="zero">0</div>
            <div className="ponto">.</div>
          </div>
          <div className="conjunto-operadores">
            <Operadores operador="/" onClick={() => console.log("Operador /")} />
            <Operadores operador="x" onClick={() => console.log("Operador x")} />
            <Operadores operador="-" onClick={this.diminuir} />
            <Operadores operador="+" onClick={this.aumentar} />
            <Operadores operador="=" onClick={() => console.log("Operador =")} />
          </div>
        </div>

        <div className="resultado"></div>
        <input className="resultado-label" value={this.state.valor} readOnly />
        
        <div className="botas">
          <button className="botoesadicionar" onClick={this.aumentar}>
            Adicionar
          </button>
          <button className="botoesadicionar" onClick={this.diminuir}>
            Diminuir
          </button>
        </div>
      </>
    );
  }
}

export default App;
