import React from 'react'

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          message: ''
        };     
    }   
    CapsLock(val) {
        return val.toUpperCase();
    }

    change(event){
        this.setState({
            message: event.target.value
        })
    }

    render(){
        return(
            <div>
                <h2>Digite seu nome:</h2>
                <input type="text"  value={this.state.message} onChange={this.change.bind(this)}/>
                <p>{this.state.message}</p>
            </div>
        )
    }
}      