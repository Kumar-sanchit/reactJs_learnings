import React, { Component } from "react";

export class MyIncDec extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        }
    }

    increment() {
        this.setState({
            count : this.state.count+1
        });
    }
    
    decrement() {
        this.setState({
            count : this.state.count-1
        });
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>  
                <button onClick={this.increment.bind(this)}>Increment</button>
                <button onClick={this.decrement.bind(this)}>Decrement</button>
                <button onClick={()=>this.setState({count:0})}>Reset</button>
            </div>
        );
    }

}