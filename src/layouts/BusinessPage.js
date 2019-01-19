import React, { Component } from "react";
import { Emoji } from "../utils/Emoji";
import posts from "../files/HomePosts.json";
import { Post } from "./Post";
import { Button } from "../components/Button";
import "./BusinessPage.scss";

export class BusinessPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postVal: 1
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(next){
        const minVal = 0;
        const maxVal = posts.length - 1;
        let value = this.state.postVal;
        if ((next === true) && (value === maxVal)) {
            this.setState({postVal: minVal});
        } else if ((next === true) && (value < maxVal)) {
            this.setState({postVal: ++value});
        } else if ((next === false) && (value === minVal)) {
            this.setState({postVal: maxVal});
        } else if ((next === false) && (value > minVal)) {
            this.setState({postVal: --value});
        }
    }

    render() { 
        return (<div className = "BusinessPage">
            <h1 ><Emoji label = "newspaper" emoji = "📰"/> Thoughts on Business</h1>
            <Post post = {posts[this.state.postVal]}/>
            <div>
            <Button className = "leftButton" boolean = {false} onClick = {this.handleClick}><Emoji label = "left" emoji = "🢪"/> Previous Post</Button>
            <Button className = "rightButton" boolean = {true} onClick = {this.handleClick}>Next Post <Emoji label = "left" emoji = "🢫"/></Button>
            </div>
            </div>);
    }
}