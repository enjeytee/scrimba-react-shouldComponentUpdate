import React from "react";
import Parent from "./Parent.jsx";

class GrandParent extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        nextProps.count === this.props.count ? false : true
    };
    render() {
        console.log("[👴🏼]   [ ]   [ ]   [ ] rendered")
        return (
            <div>
                <p>I'm a GrandParent Component</p>
                <Parent />
                <Parent />
            </div>
        );
    };
};
export default GrandParent;