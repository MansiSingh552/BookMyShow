import React from "react";

import { Premier } from "../Components/Premier/premier.component";

const PosterSlider = (props) => {
    return (
        <>
     <div className="px-20">
         <div className={`flex flex-col  mt-12 mb-3 ${ props.isDark ? "text-white":"text-gray-700"}`}>
            <h2 className="text-2xl font-bold ">{props.heading}</h2>
            <p className="text-sm font-bold">{props.subHeading}</p>
         </div>

         <div className="container w-full -mx-3">
          <Premier {...props} />
         </div>
    </div>
        </>
    )
}

export default PosterSlider;