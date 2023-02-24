import React from "react";
import './image.css'

const Images = (props) => {
    return (
        <img className="profileImage" src={props.source}/>
    )
}
export default Images