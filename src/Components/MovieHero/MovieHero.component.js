import React from "react";

import {FaHeart} from "react-icons/fa" 
import {BiShareAlt,BiChevronRight} from "react-icons/bi"
const MovieHero = () => {
    return (
        <>
        <div className="md:hidden style={{}}">
            <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" alt="poster"></img>
        </div>

        <div className="hidden md:block lg:hidden">  <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" alt="poster"></img></div>

        <div className="hidden lg:block relative" style={{height:"30rem"}}>
            
            <div className="absolute w-full h-full z-10" style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}> </div>
            
              <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" alt="poster" className="w-full h-full "></img>

            <div className="absolute flex flex-row z-20 top-0 px-20 py-8 gap-8 items-center">


            <div className="h-96">
                  <img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" className="w-full h-full rounded-md"></img>
              </div>

              <div className="text-white w-3/5 flex flex-col items-start gap-4">
                  <h3 className="text-4xl font-bold">Shang-Chi and the Legend of Ten Rings</h3>
                  <div className="flex flex-row gap-2 items-center py-2"> <span className="text-myColor-500 text-2xl"> <FaHeart /> </span> <span className="font-bold text-2xl">91%</span> <p>32.5K rating</p></div>
                  <div className="flex justify-between bg-grayShade-700 px-8 py-3 rounded-md flex gap-16 items-center">
                    <div className="">
                        <h3 className="font-bold text-xl">Add your rating & review</h3>
                        <p>Your Rating matters</p>
                    </div>
                    <div className="text-black  font-bold">
                        <button className="font-bold bg-white rounded-md px-4 py-2">Rate Now</button>
                    </div>
                  </div>
                  <div>
                      <div className="bg-white text-black mb-2 font-semibold rounded-sm"><h3>2D, 3D ,IMAX 2D, MX4D, 4XD</h3></div>
                      <div className="bg-white text-black font-semibold rounded-sm"><h3>HINDI, KANNADA, ENGLISH, TAMIL, GUJRATI</h3></div>
                      
                  </div>
                  <div className="flex gap-2">
                      <p>2h 12m</p>
                      <li>Action, Adventure, Fantasy</li>
                      <li>UA</li>
                      <li>3Sep , 2021</li>
                  </div>

                  <div className=""><button className="bg-myColor-500 px-14 py-3 rounded-md">Book Ticket</button></div>
              </div>



            </div>

            <div className="flex text-white gap-3 items-center justify-around bg-grayShade-800 opacity-70 w-28 py-2 px-4 rounded absolute top-8 right-14 z-50">
                <span className="  text-3xl "><BiShareAlt /></span>
                <button className=""> Share </button>
            </div>

              
              </div>

        </>
    )
}

export default MovieHero; 