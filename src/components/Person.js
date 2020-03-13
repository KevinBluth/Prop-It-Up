import React, { Component } from "react";

class Person extends Component {
    render() {
        return(
            <div>
                <h1>Name: {this.props.firstName} {this.props.lastName}</h1>
                <h4>Age: {this.props.age}</h4>
                <h4>Hair Color: {this.props.hairColor}</h4>
            </div>
        );
    }
}

export default Person;