import React from "react";
import { Component } from "react";

class Count extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }
    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    }
    render() {
        return (
            <>
                <button onClick={this.increment}>Increment</button>
                <b>Count:{this.state.count}</b>
                <button onClick={this.decrement}>Decrement</button>
            </>
        )
    }
}
export default Count