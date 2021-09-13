import React from  "react";

import PlaysCard from "../../config/PlaysCard";
import PlaysSlider from "../../PosterSlider/Plays.posterSlider";

const Plays = (props) => {
    return (
        <>
                <div className="flex flex-row gap-6">
             {
                 PlaysCard.map((images) => (
                     <PlaysSlider  {...images} {...props}/>
                 )) 
    
                 
             }
         </div>
             

         
        </>
    )
}

export default Plays;