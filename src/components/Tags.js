import React, {Component} from "react"; 
import "./Tags.scss"

export class Tags extends Component {
    returnTags(tags){
        const postObject = tags.map((element, key) => (
                <p className = "tag" key = {key}>{`#${element}`}</p>));
            return <div className = "tagContainer">{postObject}</div>;
    }

    render(){
        return this.returnTags(this.props.tags);
    }
}