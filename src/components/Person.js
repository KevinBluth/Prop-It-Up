import React, { Component } from "react";

class Person extends Component {
    render() {
        return(
            <div style={{width:"250px", marginLeft:"40%", marginTop:"10px", padding:"0px 15px 0px 15px", border:"solid black 2px",}}>
                <h2 style={{textAlign:"left"}}>Name: {this.props.firstName} {this.props.lastName}</h2>
                <h5 style={{textAlign:"left"}}>Age: {this.props.age}</h5>
                <h5 style={{textAlign:"left"}}>Hair Color: {this.props.hairColor}</h5>
            </div>
        );
    }
}

export default Person;