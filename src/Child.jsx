import React, {Component} from "react";
import GrandChild from "./GrandChild.jsx";

class Child extends Component {
    render () {
        console.log("[ ]   [ ]   [🧒🏻]   [ ] rendered")
        return (
            <div>
                <p>I'm a child component</p>
                <GrandChild />
                <GrandChild />
            </div>
        );
    };
};
export default Child;