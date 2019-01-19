import React  from "react";
import {Header} from "../components/Header";
import {Content} from "../components/Content";
import {Time} from "../components/Time";
import {Tags} from "../components/Tags";

export const Post = (props) => (
    <div>
        <Header header = {props.post.HEADER}/>
        <Content content = {props.post.BODY}/>
        <Time date = {props.post.DATE}/>
        <Tags tags = {props.post.TAGS}/>
    </div>
);