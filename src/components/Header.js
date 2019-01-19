import React, {Component} from "react"; 
import "./Header.scss";

export class Header extends Component {
    returnHeader(header){
        return <h1 className = "header">{header}</h1>
}

render() {
    return this.returnHeader(this.props.header);
}
}