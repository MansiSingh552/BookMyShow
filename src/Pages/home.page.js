import React from "react";
import EntertainmentCardSlider from "../Components/Entertainment/entertainmentCard.component";
import { Premier } from "../Components/Premier/premier.component";

const HomePage = () => {
  return (
  <>
  <div className="container px-20 ">
  <h1 className="text-2xl font-bold text-gray-800">
  The best of Entertainment
  </h1>
  <EntertainmentCardSlider />
  
  </div>

  <div className="bg-navCol-200 py-16 px-20 w-full">
  <div className="flex">
   <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
   alt="Rupay"
   className="w-full h-full"
    />
  </div>

  <div className="flex flex-col text-white mt-12 mb-3 ">
    <h2 className="text-2xl font-bold ">Premiers</h2>
    <p className="text-sm font-bold">Brand new realease every Friday</p>
  </div>

  <div className="container w-full -mx-3">
   <Premier />
  </div>
 
</div>

  </>
);
};

export default HomePage;