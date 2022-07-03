import React, { Component } from "react";
export class ClassicComponent extends Component {
    constructor(props) {
        super(props);
        this.setAnchor = this.setAnchor.bind(this)
        this.state = {name :"Sanchit"};
    }
    componentDidMount() {
        alert("Component did Mount called!!");
    }
    componentWillMount() {
        alert("Component Will Mount called!!");
    }
    componentWillUpdate() {
        alert("Component will Update");
    }
    componentDidUpdate() {
        alert("Component Did Update");
    }
    setAnchor () {
        this.setState({name : 'AJith'});
        alert('SetAnchor function called'+this.state.name);   
    }
    render() {
        const list = ["MyApp","App","Title","My11"];
        var listItem = list.map(e=>{
            return <li>{e}</li>
        });
        var students = [{
            id : "1",
            name: "Kumar Sanchit",
            age : "28" 
        }, {
            id : "2",
            name : "Arun Raveendran",
            age : "29"
        }, {
            id: "3",
            name : "Karan Seth",
            age : "26"
        }, {
            id: "4",
            name : "Aditya Rewatkar",
            age : "34"
        }];
        var studentList = students.map(e=>{
            return <li key = {e.id}>{e.name} {e.age}</li>
        });
        let isUnderAge = true;
        if (isUnderAge) {
            return (
                <div>
                    <span>Props passed to this component {this.props.name} {this.props.age}</span>
                    <div className="primary">This is a class component welcome {this.state.name} to this space</div>
                    <a href="#" onClick={this.setAnchor}>Click Me</a>
                    <div style={{color:"orange"}}>This is a Generic list</div>
                    <ul>{listItem}</ul>
                    <div>This is a Student list</div> 
                    <ul>{studentList}</ul> 
                    <span>{this.isUnderAge}</span>
                    <table>
                    <React.Fragment>
                        <>
                        <td>Hello Fragment</td>
                        <td>Hello Fragment</td>
                        <td>Hello Fragment</td>
                        <td>Hello Fragment</td>
                        </>
                    </React.Fragment>
                    </table>
                </div>
            )
        } else {
            return (
                <div>{this.isUnderAge?"You are underAge":"You are an Adult"}</div>
            );
        }       
    }
}