import React from "react";
import { AiOutlineRight,AiOutlineLeft } from "react-icons/ai";

export const NextArrowPremier = (props) => {

    return (
        <>
         <div 
          className=""
          style={{...props.style,width:"30px",height:"30px",borderRadius:"50%",background:"gray",opacity:"0.9",position:"absolute",right:"0",top:"150px",fontSize:"20px",display:"flex",justifyContent:"center",alignItems:"center"}}
          onClick={props.onClick}
         >
             <span className="text-white"><AiOutlineRight /></span>
         </div>
        </>
    )
}

export const PrevArrowPremier = (props) => {

    return (
        <>
         <div 
          className=""
          style={{...props.style}}
          onClick={props.onClick}
         >

         </div>
        </>
    )
}