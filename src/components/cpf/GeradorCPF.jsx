import React from 'react';
import GeraCPF from './GeraCPF';

export default class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
          cpf: ''
        };   
          
        this.GerarCPF = this.GerarCPF.bind(this);
    }   

    GerarCPF() {
        const cpf = new GeraCPF();
        
        this.setState({
            cpf: cpf.geraNovoCPF()
        })
    }

    render(){
        return(
            <div>
                <h2>Gerador de CPF</h2>
                <button onClick={this.GerarCPF}>Gerar CPF</button>
                {/* <input type="text"  value={this.state.message} onChange={this.change.bind(this)}/> */}
                <p>{this.state.cpf}</p>
            </div>
        )
    }
}      