import React from "react";

import Plays from "../Components/Plays.Component/plays.component";

const PlaysPage = () => {
    return (
        <>
            <div className="flex flex-col gap-4 px-28 pt-4">
                <div><h1 className="text-3xl text-navCol-700 font-bold">Plays in National Capital Region(NCR)</h1></div>
                <div className="flex gap-2 items-start">
                    <button className="rounded-full py-3 px-6 border border-myColor-300 text-sm font-bold ">Threatre</button>
                    <button className="rounded-full py-3 px-6 border border-myColor-300 text-sm font-bold ">Storytelling</button>
                </div>
               <div ><Plays/> </div>
            </div>
                     
        </>

    )
}

export default PlaysPage;