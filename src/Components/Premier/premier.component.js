import React from "react";
import { BiImages } from "react-icons/bi";
import Slider from "react-slick";

//componnet 
import Poster from "../Poster/poster.component";

//setting
import setting from "../../config/PremierCarousal";

//premierImages
import PremierImages from "../../config/TempPoster.config";

export const Premier = (props) => {
    
   

    return ( 
        <>{(() => {
            if (props.images==="PremierImage") {
              return (
                <Slider {...setting}>
                {
                    PremierImages.map((image) => (
                        <Poster {...image} {...props}/>
                    ))
                }
            </Slider>
              )
            } 
          })()}
            
                
            
        
        </>
    );
}