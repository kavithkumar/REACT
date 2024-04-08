import React from "react";
import { Component } from "react";
import Child from "./Child";

class Parent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const userProfile = {
            'name': 'John',
            'age': 20,
            'address': '12th Street'
        }
        return (
            <>
                <Child name={userProfile}></Child>
            </>
        )
    }
}
export default Parent