import React from "react";
import "./imagepage.css"

const Image = () => {
    return(
        <div>
            <div className="starWarsImage"><img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A92131654C1E0B1A4C072A327E49FB30CA8BDED279852FB32CAD9B33B4AAAB1/scale?width=2880&aspectRatio=1.78&format=jpeg"></img></div>
            <div className="starWarsImage"><img src="https://cdn.futura-sciences.com/sources/images/dossier/631/01-intro-631.jpg"></img></div>
            <div className="starWarsImage"><img src="https://image.api.playstation.com/vulcan/img/rnd/202105/1714/aZBK3pylP0pCnDUC6OUKAtRD.png"></img></div>
            <div className="starWarsImage"><img src="https://media.timeout.com/images/105863223/750/422/image.jpg"></img></div>
            <div className="starWarsImage"><img src="https://upload.wikimedia.org/wikipedia/ru/0/08/Star_wars_dvd_cover.jpg"></img></div>
        </div>
    )
}

export default Image