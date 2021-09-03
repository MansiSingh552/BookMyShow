import React from "react";

const Poster = (props) => {
    //props -> src,title,subtitle,isDark(bool)
    return (
        <>
            <div className="flex flex-col gap-2 mx-3">
                <div className="h-88">
                    <img src={props.src} alt={props.title} className="w-full h-full rounded"/>
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
            </div>
        </>
    )
}

export default Poster;