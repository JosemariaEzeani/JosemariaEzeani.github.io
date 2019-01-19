import React from "react";
import "./Emoji.scss";

export const Emoji = (props) => (
    <span className = "emoji" role = "img" aria-label = {props.label}>{props.emoji}</span>
);