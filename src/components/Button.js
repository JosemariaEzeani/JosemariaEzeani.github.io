import React, {Component} from "react";
import "./Button.scss";

export class Button extends Component {
    constructor(props){
        super(props);
        this.doSomething = this.doSomething.bind(this);
    }
    doSomething(){
        (console.log(this.props.children));
        this.props.onClick(this.props.boolean);
    }

    render(){

        return <button onClick = {this.doSomething}>{this.props.children}</button>;
    }

}