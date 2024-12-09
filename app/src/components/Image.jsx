import React from "react";

class Image extends React.Component {
    src;
    constructor({src}) {
        super();
        this.src = src;
    }
    render() {
        return <img src={this.src} alt={this.src} />
    }
}

export default Image;