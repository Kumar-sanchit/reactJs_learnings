import React,{Component} from "react";

export class OriginalComponent extends Component {
    constructor(props) {
        super(props);
        this.setText = this.setText.bind(this);
        this.state = {
            message : "Hello And Welcome Visitor!!"
        }; 
    }
    componentDidUpdate() {
        alert("Component did Update!!");
    }
    componentWillUpdate() {
        alert("Component will update!!")
    }
    setText() {
        alert("SetText is called!");
        this.setState({
            message: "Thank you for visiting!!"
        });
    }
    render() {
        return (
            <div>
                <span>{this.state.message}</span>
                <div>{this.props.id} {this.props.name}</div>
                <button onClick={this.setText}>Click Me</button>
            </div>
        );
    }
}