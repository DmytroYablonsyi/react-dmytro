import React, {useState} from "react";
import "./like.css"

const Like = () => {
    const icon2 = 'https://cdn-icons-png.flaticon.com/512/3179/3179385.png'
    const [value, setValue] = useState(99);
    return(
        <div className="likeButton" onClick={() => setValue(100)}>
             <img  src={icon2}></img><span>{value}</span>
        </div>
    )
} 

export default Like