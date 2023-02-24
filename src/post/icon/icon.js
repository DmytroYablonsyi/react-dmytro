import React from "react";
import './icon.css'

const Icon = (props) => {
    return(
        <img className='authorIcon' src={props.source}/>
    )
}
export default Icon