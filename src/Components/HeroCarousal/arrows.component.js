import { tsPropertySignature } from "@babel/types";
import React from "react" ;
import { AiOutlineRight,AiOutlineLeft } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
export const NextArrow = (props) => {
    //const {className, style, onClick} = props
    return (
        
        <>
        <div 
        className=""
        style={{...props.style,fontSize:"25px",backgroundColor:"black",display:"flex",alignItems:"center",justifyContent:"center",right:"0px",top:"160px",zIndex:"15",height:"40px",width:"50px",position:"absolute",opacity:"0.6",borderRadius:"6px 0px 0px 6px"}}
        onClick={props.onClick}
        >
            <span className="text-white"><AiOutlineRight /></span>
        </div>
        </>
    )
}

export const PrevArrow = (props) => {
    //const {className, style, onClick} = props
    return (
        
        <>
        <div 
        className=""
        style={{...props.style,fontSize:"25px",backgroundColor:"black",display:"flex",alignItems:"center",justifyContent:"center",left:"0px",top:"160px",zIndex:"15",height:"40px",width:"50px",position:"absolute",opacity:"0.6",borderRadius:"0px 6px 6px 0px"}}
        onClick={props.onClick}
        >
            <span className="text-white"><AiOutlineLeft /></span>
        </div>
        </>
    )
}