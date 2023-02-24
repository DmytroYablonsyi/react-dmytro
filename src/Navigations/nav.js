import React from "react";
import { Link } from "react-router-dom";
import "./nav.css"

const Navs = () => {
    return(
        <>
        <header>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/image">Image</Link>
            <Link to="/contacts">Contacts</Link>
        </header>
        </>
    )
}

export default Navs