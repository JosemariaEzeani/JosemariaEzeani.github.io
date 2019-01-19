import React from "react";
import { BusinessPage } from "../layouts/BusinessPage";
import { TechnologyPage } from "../layouts/TechnologyPage";
import { PublicationsPage } from "../layouts/PublicationsPage";
import { ReadMePage } from "../layouts/ReadMePage";
import { NavBar } from "../components/NavBar";
import { BrowserRouter, Route} from "react-router-dom";
import "./Router.scss";

export const Router = () => (
    <BrowserRouter>
        <div className = "Router">
            <NavBar/>
            <Route path = "/" exact component = { BusinessPage } />
            <Route path = "/technology/" component = { TechnologyPage } />
            <Route path = "/publications/" component = { PublicationsPage } />
            <Route path = "/readme/" component = { ReadMePage } />
        </div>
    </BrowserRouter>
);