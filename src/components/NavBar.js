import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

export const NavBar = () => (
    <div className = "navigation">
        <h1>
            <Link to = "/">Home</Link>
        </h1>
        <h1>
            <Link to = "/technology">Technology</Link>
        </h1>
        <h1>
            <Link to = "/publications">Publications</Link>
        </h1>
        <h1>
            <Link to = "/readme">ReadMe</Link>
        </h1>
    </div>
);