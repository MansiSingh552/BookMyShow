import React from "react";

const PlaysSlider = (props) => {
    //props -> src,title,subtitle,isDark(bool)
    return (
        <>
            <div className="flex flex-col gap-2 ">
                <div className="h-auto">
                    <img src={props.src} alt={props.title}  className="w-full h-full rounded"/>
                </div>
                <h3
                    className={`text-lg font-bold ${
                        props.isDark ? "text-white" : "text-gray-700" 
                    }`}
                >{props.title}</h3>
                <p 
                    className={`text-sm font-bold ${
                        props.isDark ? "text-white" : "text-gray-700" 
                    }`}
                >{props.subtitle}</p>
                <p  className={`text-sm ${
                        props.isDark ? "text-white" : "text-gray-700" 
                    }`}
                >{props.language}</p>
                <p   className={`text-sm ${
                        props.isDark ? "text-white" : "text-gray-700" 
                    }`}
                >{props.money}</p>
            </div>
        </>
    )
}

export default PlaysSlider;