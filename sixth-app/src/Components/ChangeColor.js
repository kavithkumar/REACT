import React from "react";
import { Component } from "react";

class ChangeColor extends React.Component {
    constructor(props) {
        super(props)
        console.log('Constructor is created')
        this.state = { color: '' }
    }
    updateColor = (event) => {
        this.setState({ color: event.target.value })
    }
    render() {
        return (
            <>
                <input type="color" name="color" value={this.state.color}
                    onChange={(event) => { this.updateColor(event) }}>
                </input>
                <b>Selected color is {this.state.color}</b>
            </>
        )
    }
}
export default ChangeColor