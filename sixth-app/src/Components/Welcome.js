import React from "react";
import { Component } from "react";

class Welcome extends React.Component {
    constructor(props) {
        super(props)
        console.log('constructor is created')
        this.state = { message: 'Welcome to class based component', color: 'Red' }
    }
    updateColor = () => {
        this.setState({ color: 'Black' })
    }
    componentDidMount() {
        console.log('ComponentDidMount is invoked')
    }
    componentDidUpdate() {
        console.log('ComponentDidUpdate is invoked')
    }
    componentWillUnmount() {
        console.log('ComponentWillUnmount is called')
    }
    render() {
        return (
            <>
                Hello World<br></br>
                {this.state.message}<br></br>
                Color is:{this.state.color}
                <button onClick={this.updateColor}>Update Color</button>
            </>)
    }

}
export default Welcome