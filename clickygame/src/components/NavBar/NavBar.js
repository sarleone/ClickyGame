import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <p class="navbar-brand" href="#">Clicky Game!</p>
        <p class="nav-link-center"> Click an image to begin! </p>
        <p class="nav-link-right"> Score: <span></span> Top Score: <span></span></p>
    </nav>
);

export default NavBar;