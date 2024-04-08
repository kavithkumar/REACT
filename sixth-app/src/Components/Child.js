import React from "react";
import { Component } from "react";

class Child extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { name } = this.props
        return (
            <>
                <b>Name : </b>{name.name}<br></br>
                <b>Age : </b>{name.age}<br></br>
                <b>Address : </b>{name.address}<br></br>
            </>
        )
    }
}
export default Child